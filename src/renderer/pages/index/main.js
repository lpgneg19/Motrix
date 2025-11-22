/* eslint-disable */
const fs = require('fs')
const path = require('path')

function logToFile(msg) {
  alert('Main JS Running')
  try {
    const logPath = path.join(process.cwd(), 'renderer-debug.log')
    fs.appendFileSync(logPath, msg + '\n')
  } catch (e) {
    // ignore
  }
}

logToFile('Renderer process started at ' + new Date().toISOString())

try {
  logToFile('Requiring vue...')
  const Vue = require('vue')
  logToFile('Vue required successfully: ' + Object.keys(Vue).join(','))

  const { createApp } = Vue
  const app = createApp({
    template: '<div>Hello Vue Require</div>'
  })
  app.mount('#app')
  logToFile('Vue mounted via require')
} catch (err) {
  logToFile('Error requiring/mounting Vue: ' + err.toString())
  if (err.stack) logToFile(err.stack)
}
