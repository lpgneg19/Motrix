import is from 'electron-is'
import { ipcRenderer } from 'electron'
import { createApp } from 'vue'
import I18NextVue from 'i18next-vue'
import ElementPlus, { ElLoading, ElMessage } from 'element-plus'
import 'element-plus/dist/index.css'
import axios from 'axios'

import App from './App.vue'
import router from '@/router'
import store from '@/store'
import { getLocaleManager } from '@/components/Locale'
import Icon from '@/components/Icons/Icon'
import Msg from '@/components/Msg'
import { commands } from '@/components/CommandManager/instance'
import TrayWorker from '@/workers/tray.worker'

import '@/components/Theme/Index.scss'
import {
  bytesToSize,
  bitfieldToPercent,
  localeDateTimeFormat,
  peerIdParser,
  removeExtensionDot,
  timeFormat
} from '@shared/utils'

const updateTray = is.renderer()
  ? async (payload) => {
    const { tray } = payload
    if (!tray) {
      return
    }

    const ab = await tray.arrayBuffer()
    ipcRenderer.send('command', 'application:update-tray', ab)
  }
  : () => { }

function initTrayWorker() {
  const worker = new TrayWorker()

  worker.addEventListener('message', (event) => {
    const { type, payload } = event.data

    switch (type) {
      case 'initialized':
      case 'log':
        console.log('[Motrix] Log from Tray Worker: ', payload)
        break
      case 'tray:drawed':
        updateTray(payload)
        break
      default:
        console.warn('[Motrix] Tray Worker unhandled message type:', type, payload)
    }
  })

  return worker
}

function init(config) {
  const app = createApp(App)

  if (is.renderer()) {
    app.config.globalProperties.$electron = require('electron')
  }

  app.config.globalProperties.$http = axios
  app.config.globalProperties.$filters = {
    bytesToSize,
    bitfieldToPercent,
    localeDateTimeFormat,
    peerIdParser,
    removeExtensionDot,
    timeFormat
  }
  app.config.productionTip = false

  const { locale } = config
  const localeManager = getLocaleManager()
  localeManager.changeLanguageByLocale(locale)

  app.use(I18NextVue, { i18next: localeManager.getI18n() })

  app.use(ElementPlus, {
    size: 'small'
  })

  app.use(Msg, ElMessage, {
    showClose: true
  })

  app.component('mo-icon', Icon)

  const loading = ElLoading.service({
    fullscreen: true,
    background: 'rgba(0, 0, 0, 0.1)'
  })

  app.use(store)
  app.use(router)

  const vm = app.mount('#app')

  // Attach commands to the root component instance
  vm.commands = commands
  require('./commands')

  vm.trayWorker = initTrayWorker()

  setTimeout(() => {
    loading.close()
  }, 400)
}

store.dispatch('preference/fetchPreference')
  .then((config) => {
    console.info('[Motrix] load preference:', config)
    init(config)
  })
  .catch((err) => {
    alert(err)
  })
