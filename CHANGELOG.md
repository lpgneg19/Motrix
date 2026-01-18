# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.9.6] - 2026-01-18

### Added
- Setup proxy with scopes
- Added `motrix://reveal-in-folder` protocol support
- Show task GID on task detail general page
- Task file filter improvements, added document extensions

### Changed
- Upgraded Electron to 40.0.0
- Upgraded Aria2 to 1.37.0(Except Linux version)
- Significant dependency updates
- Switched to `@babel/eslint-parser`
- Improved `WindowManager` to use `@electron/remote/main`
- Increased default sharing settings to improve network availability
- Updated default `max-connection-per-server` to 16
- Updated tracker CDN URL to cdn.jsdelivr.net
- Adjusted task dialog layout when showing advanced options
- Improved portable version config file base directory logic

### Fixed
- Fixed i18n progress typo
- Fixed clear-text logging of sensitive information
- Fixed sidebar transparency issue on macOS by updating vibrancy settings
- Increased RPC secret length limit to 64
- Fixed "object has been destroyed" error
- Fixed select dropdown style in dark mode

### Chore
- i18n updates and maintenance
- Code refactoring and formatting

## [1.8.19] - 2023-05-03

### Fixed
- Addressed issues with app auto-update failures
- Fixed selected task item border color in dark mode
- Rebuilt `aria2c` binaries for `darwin arm64` and `x64`

### Refactor
- Optimized `aria2.conf` default configuration
- Upgraded built-in Aria2 to version 1.36

### Improved
- Enhanced auto-update progress bar display
