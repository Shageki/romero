/* Determine OS
 *
 * Returns OS and system details
 */

module.exports = {
  about_system: function() {
    console.log('called');
    const os = require('os');
    let platform = os.platform();
    let version = os.release();
    let cpu = os.cpus();
    let ram = os.totalmem();
    let ram_gb = Number(Math.round((ram / 1073741824) + 'e2') + 'e-2');
    let os_map = {
      "darwin": {
        "name": `macOS`,
        "versions": {
          "17": `High Sierra`,
          "16": `Sierra`,
          "15": `El Capitan`,
          "14": `Yosemite`,
          "13": `Mavericks`,
          "12": `Mountain Lion`,
          "11": `Lion`,
          "10": `Snow Leopard`,
          "9": `Leopard`
        }
      },
      "win32": {
        "name": `Windows`,
        "versions": {
          "10": `10`,
          "6": `Vista/7/8`,
          "5": `2000/XP`
        }
      },
      "linux": {
        "name": `Linux`,
        "versions": {}
      }
    }
    let pretty_platform = platform;
    if (os_map[platform] != undefined) {
      pretty_platform = os_map[platform]["name"]
    }

    let pretty_version = version.split(`.`)[0];
    if (os_map[platform]["versions"][pretty_version] != undefined) {
      pretty_version = os_map[platform]["versions"][pretty_version]
    }

    let sysInfo = {
      "platform": platform,
      "platform_pretty": pretty_platform,
      "version": version,
      "version_pretty": pretty_version,
      "cpu": cpu,
      "ram": ram,
      "ram_gb": ram_gb
    }
    return sysInfo;
  }
}