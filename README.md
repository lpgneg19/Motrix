# Motrix

<p>
  <a href="https://motrix.app">
    <img src="./static/512x512.png" width="256" alt="Motrix App Icon" />
  </a>
</p>

## A full-featured download manager

[![GitHub release](https://img.shields.io/github/v/release/lpgneg19/Motrix.svg)](https://github.com/lpgneg19/Motrix/releases) ![Build/release](https://github.com/lpgneg19/Motrix/workflows/Build/release/badge.svg) ![Total Downloads](https://img.shields.io/github/downloads/lpgneg19/Motrix/total.svg) 

English | [简体中文](./README-CN.md)

Motrix is a full-featured download manager that supports downloading HTTP, FTP, BitTorrent, Magnet, etc.

Motrix has a clean and easy to use interface. I hope you will like it 👻.

✈️ [Official Website](https://motrix.app) | 📖 [Manual](https://github.com/agalwood/Motrix/wiki)

## 💽 Installation

Download from [GitHub Releases](https://github.com/agalwood/Motrix/releases) and install it.

## ✨ Features

- 🕹 Simple and clear user interface
- 🦄 Supports BitTorrent & Magnet
- ☑️ BitTorrent selective download
- 📡 Update tracker list every day automatically
- 🔌 UPnP & NAT-PMP Port Mapping
- 🎛 Up to 10 concurrent download tasks
- 🚀 Supports 64 threads in a single task
- 🚥 Supports speed limit
- 🕶 Mock User-Agent
- 🔔 Download completed Notification
- 💻 Ready for Touch Bar (Mac only)
- 🤖 Resident system tray for quick operation
- 📟 Tray speed meter displays real-time speed (Mac only)
- 🌑 Dark mode
- 🗑 Delete related files when removing tasks (optional)
- 🌍 I18n, [View supported languages](#-internationalization).
- 🛠 More features in development

## 🧭 Safari Extension (macOS)

Motrix for macOS comes with a bundled Safari Extension that allows you to download files directly with Motrix.

### How to Enable

1.  Launch **Motrix**.
2.  Open **Safari**.
3.  Go to **Safari** > **Settings...** (or **Preferences...**) > **Extensions**.
4.  Find **Motrix Extension** in the list and check the box to enable it.
5.  (Optional) Click **Always Allow on Every Website** to ensure seamless integration.

### Note for Unsigned Builds

If you are using a version of Motrix that is not signed with an Apple Developer Certificate (e.g., a self-built version), you need to enable "Allow Unsigned Extensions" in Safari:

1.  Open **Safari** > **Settings...** > **Advanced**.
2.  Check **Show features for web developers**.
3.  In the menu bar, click **Develop** and check **Allow Unsigned Extensions**.
4.  Enter your system password if prompted.
5.  Restart Safari and try enabling the extension again.

### Usage

Right-click on any link in Safari and select **Download with Motrix**. The download task will be automatically sent to Motrix.

## 🖥 User Interface

![motrix-screenshot-task-en.png](https://cdn.nlark.com/yuque/0/2020/png/129147/1589782238501-e7b39166-da58-4152-ae34-65a061cafa48.png)

## ⌨️ Development

### Clone Code

```bash
git clone git@github.com:agalwood/Motrix.git
```

### Install Dependencies

```bash
cd Motrix
yarn
```

> Error: Electron failed to install correctly, please delete node_modules/electron and try installing again

`Electron` failed to install correctly, please refer to https://github.com/electron/electron/issues/8466#issuecomment-571425574

### Dev Mode

```bash
yarn run dev
```

### Build Release

```bash
yarn run build
```
#### Build for Apple Silicon

```bash
yarn run build:applesilicon
```

After building, the application will be found in the project's `release` directory.

## 🛠 Technology Stack

- [Electron](https://electronjs.org/)
- [Vue](https://vuejs.org/) + [VueX](https://vuex.vuejs.org/) + [Element](https://element.eleme.io)
- [Aria2](https://aria2.github.io/)

## ☑️ TODO

Development Roadmap see: [Trello](https://trello.com/b/qNUzA0bv/motrix)

## 🤝 Contribute [![PRs Welcome](https://img.shields.io/badge/PRs-welcome-brightgreen.svg?style=flat)](http://makeapullrequest.com)

If you are interested in participating in joint development, PR and Forks are welcome!

## 🌍 Internationalization

Translations into versions for other languages are welcome 🧐! Please read the [translation guide](./CONTRIBUTING.md#-translation-guide) before starting translations.

| Key   | Name                | Status       |
|-------|:--------------------|:-------------|
| ar    | Arabic              | ✔️ [@hadialqattan](https://github.com/hadialqattan), [@AhmedElTabarani](https://github.com/AhmedElTabarani) |
| bg    | Българският език    | ✔️ [@null-none](https://github.com/null-none) |
| ca    | Català              | ✔️ [@marcizhu](https://github.com/marcizhu) |
| de    | Deutsch             | ✔️ [@Schloemicher](https://github.com/Schloemicher) |
| el    | Ελληνικά            | ✔️ [@Likecinema](https://github.com/Likecinema) |
| en-US | English             | ✔️           |
| es    | Español             | ✔️ [@Chofito](https://github.com/Chofito)|
| fa    | فارسی               | ✔️ [@Nima-Ra](https://github.com/Nima-Ra) |
| fr    | Français            | ✔️ [@gpatarin](https://github.com/gpatarin) |
| hu    | Hungarian           | ✔️ [@zalnaRs](https://github.com/zalnaRs) |
| id    | Indonesia           | ✔️ [@aarestu](https://github.com/aarestu) |
| it    | Italiano            | ✔️ [@blackcat-917](https://github.com/blackcat-917) |
| ja    | 日本語               | ✔️ [@hbkrkzk](https://github.com/hbkrkzk) |
| ko    | 한국어                | ✔️ [@KOZ39](https://github.com/KOZ39) |
| nb    | Norsk Bokmål        | ✔️ [@rubjo](https://github.com/rubjo) |
| nl    | Nederlands          | ✔️ [@nickbouwhuis](https://github.com/nickbouwhuis) |
| pl    | Polski              | ✔️ [@KanarekLife](https://github.com/KanarekLife) |
| pt-BR | Portuguese (Brazil) | ✔️ [@andrenoberto](https://github.com/andrenoberto) |
| ro    | Română              | ✔️ [@alyn3d](https://github.com/alyn3d) |
| ru    | Русский             | ✔️ [@bladeaweb](https://github.com/bladeaweb) |
| th    | แบบไทย              | ✔️ [@nxanywhere](https://github.com/nxanywhere) |
| tr    | Türkçe              | ✔️ [@abdullah](https://github.com/abdullah) |
| uk    | Українська          | ✔️ [@bladeaweb](https://github.com/bladeaweb) |
| vi    | Tiếng Việt          | ✔️ [@duythanhvn](https://github.com/duythanhvn) |
| zh-CN | 简体中文             | ✔️           |
| zh-TW | 繁體中文             | ✔️ [@Yukaii](https://github.com/Yukaii) [@5idereal](https://github.com/5idereal) |

## 📜 License

[MIT](https://opensource.org/licenses/MIT) Copyright (c) 2018-present Dr_rOot
