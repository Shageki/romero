  module.exports = {
    game_files: [{
      "file": `items.xml`,
      "backups": []
    }, {
      "file": `blocks.xml`,
      "backups": []
    }, {
      "file": `gamestages.xml`,
      "backups": []
    }, {
      "file": `loot.xml`,
      "backups": []
    }],
    backup_file: function(file_index) {
      var fs = require('fs');
      let original_file = backup_manager.game_files[file_index]["file"];
      if (backup_manager.source_exists(`${gSelectedGame["directory"]}${original_file}`) == false) {
        alert(`Source file does not exist.\n\n${gSelectedGame["directory"]}${original_file}\n\nPlease verify your game files in Steam.`)
        return false;
      }
      let file_name = original_file.split(`.`)[0]
      let file_extension = original_file.split(`.`)[1]
      let time_stamp = new Date();
      let year = time_stamp.getFullYear();
      let month = time_stamp.getMonth();
      let day = time_stamp.getDate();
      let hour = time_stamp.getHours();
      let minute = time_stamp.getMinutes();
      let second = time_stamp.getSeconds();
      let millisecond = time_stamp.getMilliseconds();
      let backup_name = `_romero_backup_${file_name}_${year}_${month}_${day}_${hour}_${minute}_${second}_${millisecond}.${file_extension}`;
      backup_manager.game_files[file_index]["backups"].push(backup_name)
      console.log(`Backup created: ${gSelectedGame["directory"]}${original_file}`)
      fs.createReadStream(`${gSelectedGame["directory"]}${original_file}`).pipe(fs.createWriteStream(`${gSelectedGame["directory"]}${backup_name}`));
      window.dispatchEvent(backup_status_update)
    },
    restore_file: function(file_index, backup_index) {},
    update_backups: function() {
      var fs = require('fs')
      let directory_contents = fs.readdirSync(gSelectedGame["directory"])
      for (var i = 0; i < backup_manager.game_files.length; i++) {
        let file_name = backup_manager.game_files[i]["file"].split(`.`)[0]
        for (var i_2 = 0; i_2 < directory_contents.length; i_2++) {
          let file_backup_name = (directory_contents[i_2].split(`_`)[3])
          if (file_backup_name == file_name) {
            backup_manager.game_files[i]["backups"].push(directory_contents[i_2])
          }
        }
      }
    },
    source_exists: function(file) {
      const fs = require('fs')
      let check = fs.existsSync(file)
      return check
    },
    list_backups: function(file_index) {},
    purge_all: function() {
      const fs = require('fs');
      let files_to_purge = []
      for (var i = 0; i < backup_manager.game_files.length; i++) {
        files_to_purge.push(backup_manager.game_files[i]["file"])
      }
      files_to_purge.push(`romero.xml`)
      let alert_text = `Warning: This will erase the following files:\n`
      for (var i = 0; i < files_to_purge.length; i++) {
        alert_text += `\n${files_to_purge[i]}`
      }
      let result = window.confirm(alert_text);
      if (result == false) {
        return false;
      } else {
        let double_check = window.confirm(`You will need to verify the game in Steam to replace these files.\n\nAre you SURE that you wish to continue?`);
        if (double_check != true) {
          return false;
        }
      }
      for (var i = 0; i < files_to_purge.length; i++) {
        if (fs.existsSync(`${gSelectedGame["directory"]}${files_to_purge[i]}`)) {
          fs.unlinkSync(`${gSelectedGame["directory"]}${files_to_purge[i]}`)
        }
      };
      alert(`Files purged.\n\nPlease quit Romero, verify your 7 Days to Die game files in Steam, and relaunch to continue.`)
    }
  }