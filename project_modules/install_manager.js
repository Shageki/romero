module.exports = {
  search_defaults: function() {
    const path = require('path')
    const fs = require('fs');
    const os = require('os');
    let homeDir = os.homedir();
    let platform = os.platform();
    var defaultLocations = {
      "win32": [`C:/Program Files/Steam/steamapps/common/7 Days To Die/Data/Config/`, `D:/Program Files/Steam/steamapps/common/7 Days To Die/Data/Config/`, `E:/Program Files/Steam/steamapps/common/7 Days To Die/Data/Config/`],
      "darwin": [`${homeDir}/Library/Application Support/Steam/SteamApps/common/7 Days To Die/7DaysToDie.app/Data/Config/`, `/Library/Application Support/Steam/SteamApps/common/7 Days To Die/7DaysToDie.app/Data/Config/`],
      "linux": [`${homeDir}/.local/share/Steam/SteamApps/common/7 Days To Die/Data/Config/`]
    }
    if (defaultLocations[platform] == undefined) {
      console.warn(`search_defaults: Unrecognized platform "${platform}" - please select install directory manually.`);
      return false;
    }
    let locations = defaultLocations[platform];
    var steam_folders = [];
    var i;
    for (i = 0; i < locations.length; i++) {
      let validation = install_manager.validate_location(locations[i])
      if (validation[0] == true) {
        gInstalls.push(validation[1])
        window.dispatchEvent(install_list_update)
      }
    }
  },
  search_config: function() {},
  search_manual: function() {
    // TODO: Invalidate duplicate entries
    const {
      dialog
    } = require('electron').remote
    let directory = dialog.showOpenDialog({
      properties: ['treatPackageAsDirectory', 'openDirectory']
    })
    let validation = install_manager.validate_location(`${directory}/`)
    if (validation[0] == true) {
      gInstalls.push(validation[1])
      window.dispatchEvent(install_list_update)
    } else {
      alert(`${directory} does not appear to be a valid install location.\n\nPlease select the 7 Days to Die game folder in a Steam library.`)
    }
  },
  validate_location: function(directory) {
    const fs = require('fs');

    function statWrapper(full_directory) {
      try {
        fs.statSync(`${full_directory}`);
        return true
      } catch (e) {
        return false
      }
    }
    if (statWrapper(`${directory}/XUi_Menu`) == true) {
      return [true, directory]
    }
    if (statWrapper(`${directory}/Config/XUi_Menu`) == true) {
      return [true, `${directory}Config/`]
    }
    if (statWrapper(`${directory}/Data/Config/XUi_Menu`) == true) {
      return [true, `${directory}Data/Config/`]
    }
    if (statWrapper(`${directory}/7DaysToDie.app/Data/Config/XUi_Menu`) == true) {
      return [true, `${directory}7DaysToDie.app/Data/Config/`]
    }
    return false
  },
  add_to_config: function() {},
}