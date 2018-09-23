# Project Requirements
[Node.js](https://nodejs.org/en/)
[Electron](https://electronjs.org)


## Installing Node and Electron
As a learning project, Romero should use only scratch code and no additional dependencies.

### Installing Node

#### Install Node on macOS using Homebrew
`/usr/bin/ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"`
`brew install node`

If you encounter issues, check out [this guide on installing Node with Homebrew](https://www.dyclassroom.com/howto-mac/how-to-install-nodejs-and-npm-on-mac-using-homebrew) for a great rundown of how to handle various issues.

#### Install Node from the Node.js site
Visit [Node.js](https://nodejs.org/en/) and follow the instructions.

### Install Electron
Once Node is installed, you can use npm to install Electron.

#### Installing Electron as a development dependency (preferred)
Navigate to the project directory.
`npm install electron --save-dev`

#### Installing Electron globally
`npm install electron -g`


## Creating Binaries
Binaries can be created with electron-packager.

### Installing Electron Packager

#### Installing Electron as a development dependency (preferred)
Navigate to the project directory.
`npm install electron-packager --save-dev`

#### Installing Electron globally
`npm install electron-packager -g`


### macOS
Run the following in Terminal
`electron-packager . --overwrite --platform=darwin --arch=x64 --icon=resources/icons/Romero.icns --prune=true --out=release-builds`

### win32
`electron-packager . --overwrite --platform=win32 --arch=x64 --icon=resources/icons/Romero.png --prune=true --out=release-builds`


## Coding Conventions

### Modules and Extensions
Generally, avoid any external modules not already included in Node.js or Electron.
* Part of the project goal is to scratch build any functionality, so do not include any external code unless it is absolutely necessary.
* When possible, wrap generic functionality into modules:
  * Animation handlers, filesystem tasks, etc.
