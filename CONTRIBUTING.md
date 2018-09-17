# Project Requirements
Install [Node.js](https://nodejs.org/en/)
Install Electron

`npm install electron-packager`

## Creating Binaries

### macOS
Run the following in Terminal
```
electron-packager . --overwrite --platform=darwin --arch=x64 --icon=resources/icons/Romero.icns --prune=true --out=release-builds
```

### win32
```
electron-packager . --overwrite --platform=win32 --arch=x64 --icon=resources/icons/Romero.png --prune=true --out=release-builds
```

## Coding Conventions

### Modules and Extensions
Generally, avoid any external modules not already included in Node.js or Electron.
* Part of the project goal is to scratch build any functionality, so do not include any external code unless it is absolutely necessary.
* When possible, wrap generic functionality into modules:
  * Animation handlers, filesystem tasks, etc.
