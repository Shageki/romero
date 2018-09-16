  module.exports = {
    mods: [{
      "name": `Headshot Damage +`,
      "file": `items.xml`,
      "stacks": `N/A`,
      apply: function() {
        const fs = require('fs');
        let xmlDoc = mod_scripts.read_xml(`${gSelectedGame["directory"]}/items.xml`)
        let property_items = xmlDoc.querySelectorAll(`property[name='DamageBonus.head']`)
        for (var i = 0; i < property_items.length; i++) {
          let damage_mod = parseInt(property_items[i].getAttribute('value'))
          damage_mod = damage_mod * 10
          property_items[i].setAttribute('value', damage_mod)
        }
        var s = new XMLSerializer();
        var str = s.serializeToString(xmlDoc);
        fs.writeFileSync(`${gSelectedGame["directory"]}/items.xml`, str)
        mod_scripts.add_stack('Headshot Damage +')
      },
      remove: function() {
        if (mod_scripts["mods"][0]["stacks"] == 0) {
          alert(`Mod at 0 stacks, there is nothing to undo.`)
          return false;
        }
        const fs = require('fs');
        let xmlDoc = mod_scripts.read_xml(`${gSelectedGame["directory"]}/items.xml`)
        let property_items = xmlDoc.querySelectorAll(`property[name='DamageBonus.head']`)
        for (var i = 0; i < property_items.length; i++) {
          let damage_mod = parseInt(property_items[i].getAttribute('value'))
          damage_mod = damage_mod / 10
          property_items[i].setAttribute('value', damage_mod)
        }
        var s = new XMLSerializer();
        var str = s.serializeToString(xmlDoc);
        fs.writeFileSync(`${gSelectedGame["directory"]}/items.xml`, str)
        mod_scripts.remove_stack('Headshot Damage +')
      },
    }, {
      "name": `Stack Limit Doubler`,
      "file": `items.xml`,
      "stacks": `N/A`,
      apply: function() {
        const fs = require('fs');
        let xmlDoc = mod_scripts.read_xml(`${gSelectedGame["directory"]}/items.xml`)
        let property_items = xmlDoc.querySelectorAll(`property[name='Stacknumber']`)
        for (var i = 0; i < property_items.length; i++) {
          let damage_mod = parseInt(property_items[i].getAttribute('value'))
          damage_mod = damage_mod * 2
          property_items[i].setAttribute('value', damage_mod)
        }
        var s = new XMLSerializer();
        var str = s.serializeToString(xmlDoc);
        fs.writeFileSync(`${gSelectedGame["directory"]}/items.xml`, str)
        mod_scripts.add_stack('Stack Limit Doubler')
      },
      remove: function() {
        if (mod_scripts["mods"][0]["stacks"] == 0) {
          alert(`Mod at 0 stacks, there is nothing to undo.`)
          return false;
        }
        const fs = require('fs');
        let xmlDoc = mod_scripts.read_xml(`${gSelectedGame["directory"]}/items.xml`)
        let property_items = xmlDoc.querySelectorAll(`property[name='Stacknumber']`)
        for (var i = 0; i < property_items.length; i++) {
          let damage_mod = parseInt(property_items[i].getAttribute('value'))
          damage_mod = damage_mod / 2
          property_items[i].setAttribute('value', damage_mod)
        }
        var s = new XMLSerializer();
        var str = s.serializeToString(xmlDoc);
        fs.writeFileSync(`${gSelectedGame["directory"]}/items.xml`, str)
        mod_scripts.remove_stack('Stack Limit Doubler')
      },
    }, {
      "name": `Durable Items`,
      "file": `items.xml`,
      "stacks": `N/A`,
      apply: function() {
        const fs = require('fs');
        let xmlDoc = mod_scripts.read_xml(`${gSelectedGame["directory"]}/items.xml`)
        let property_items = xmlDoc.querySelectorAll(`property[name='DegradationRate']`)
        for (var i = 0; i < property_items.length; i++) {
          let damage_mod = property_items[i].getAttribute('value').split(',')
          let first_num = parseInt(damage_mod[0]) / 2
          let second_num = parseInt(damage_mod[1]) / 2
          damage_mod = `${first_num},${second_num}`
          property_items[i].setAttribute('value', damage_mod)
        }
        var s = new XMLSerializer();
        var str = s.serializeToString(xmlDoc);
        fs.writeFileSync(`${gSelectedGame["directory"]}/items.xml`, str)
        mod_scripts.add_stack('Durable Items')
      },
      remove: function() {
        if (mod_scripts["mods"][0]["stacks"] == 0) {
          alert(`Mod at 0 stacks, there is nothing to undo.`)
          return false;
        }
        const fs = require('fs');
        let xmlDoc = mod_scripts.read_xml(`${gSelectedGame["directory"]}/items.xml`)
        let property_items = xmlDoc.querySelectorAll(`property[name='DegradationRate']`)
        for (var i = 0; i < property_items.length; i++) {
          let damage_mod = property_items[i].getAttribute('value').split(',')
          let first_num = parseInt(damage_mod[0]) * 2
          let second_num = parseInt(damage_mod[1]) * 2
          damage_mod = `${first_num},${second_num}`
          property_items[i].setAttribute('value', damage_mod)
        }
        var s = new XMLSerializer();
        var str = s.serializeToString(xmlDoc);
        fs.writeFileSync(`${gSelectedGame["directory"]}/items.xml`, str)
        mod_scripts.add_stack('Durable Items')
      }
    }, {
      "name": `Weaker Zombie Block Damage`,
      "file": `items.xml`,
      "stacks": `N/A`,
      apply: function() {
        const fs = require('fs');
        let xmlDoc = mod_scripts.read_xml(`${gSelectedGame["directory"]}/items.xml`)
        let property_items = xmlDoc.querySelectorAll(`item[name*='Zombie']`)
        for (var i = 0; i < property_items.length; i++) {
          let block_line = property_items[i].querySelectorAll('property[name="DamageBlock"]')[0]
          if (block_line != undefined) {
            let damage_mod = block_line.getAttribute('value')
            damage_mod = parseInt(damage_mod) / 2
            block_line.setAttribute('value', damage_mod)
          }
        }
        var s = new XMLSerializer();
        var str = s.serializeToString(xmlDoc);
        fs.writeFileSync(`${gSelectedGame["directory"]}/items.xml`, str)
        mod_scripts.add_stack('Weaker Zombie Block Damage')
      },
      remove: function() {
        if (mod_scripts["mods"][0]["stacks"] == 0) {
          alert(`Mod at 0 stacks, there is nothing to undo.`)
          return false;
        }
        const fs = require('fs');
        let xmlDoc = mod_scripts.read_xml(`${gSelectedGame["directory"]}/items.xml`)
        let property_items = xmlDoc.querySelectorAll(`item[name*='Zombie']`)
        for (var i = 0; i < property_items.length; i++) {
          let block_line = property_items[i].querySelectorAll('property[name="DamageBlock"]')[0]
          if (block_line != undefined) {
            let damage_mod = block_line.getAttribute('value')
            damage_mod = parseInt(damage_mod) * 2
            block_line.setAttribute('value', damage_mod)
          }
        }
        var s = new XMLSerializer();
        var str = s.serializeToString(xmlDoc);
        fs.writeFileSync(`${gSelectedGame["directory"]}/items.xml`, str)
        mod_scripts.add_stack('Weaker Zombie Block Damage')
      }
    }],
    add_stack: function(mod) {
      const fs = require('fs');
      let xmlDoc = mod_scripts.read_xml(`${gSelectedGame["directory"]}romero.xml`)
      let romero_mod_data = xmlDoc.querySelector(`romero_mod[name='${mod}']`)
      let stacks = romero_mod_data.getAttribute('stacks')
      stacks++
      romero_mod_data.setAttribute('stacks', stacks)
      var s = new XMLSerializer();
      var str = s.serializeToString(xmlDoc);
      fs.writeFileSync(`${gSelectedGame["directory"]}romero.xml`, str)
      window.dispatchEvent(mod_list_update)
      console.log(`Added stack of "${mod}" - now at ${stacks} stacks.`)
    },
    remove_stack: function(mod) {
      const fs = require('fs');
      let xmlDoc = mod_scripts.read_xml(`${gSelectedGame["directory"]}romero.xml`)
      let romero_mod_data = xmlDoc.querySelector(`romero_mod[name='${mod}']`)
      let stacks = romero_mod_data.getAttribute('stacks')
      stacks--
      romero_mod_data.setAttribute('stacks', stacks)
      var s = new XMLSerializer();
      var str = s.serializeToString(xmlDoc);
      fs.writeFileSync(`${gSelectedGame["directory"]}romero.xml`, str)
      window.dispatchEvent(mod_list_update)
      console.log(`Added stack of "${mod}" - now at ${stacks} stacks.`)
    },
    count_stacks: function() {
      const fs = require('fs');

      if (fs.existsSync(`${gSelectedGame["directory"]}romero.xml`)) {
        console.log(`Found romero.xml file.`)
      } else {
        console.log(`No romero.xml file detected, creating.`)
        let defaultXML = `<?xml version="1.0" encoding="utf-8"?><romero></romero>`
        fs.writeFileSync(`${gSelectedGame["directory"]}romero.xml`, defaultXML)
      }

      for (var i = 0; i < mod_scripts.mods.length; i++) {
        let is_write_needed = false;
        mod_name = mod_scripts.mods[i]["name"]
        mod_file = mod_scripts.mods[i]["file"]
        let xmlDoc = mod_scripts.read_xml(`${gSelectedGame["directory"]}romero.xml`)

        let romero_mod_data = xmlDoc.querySelector(`romero_mod[name='${mod_name}']`)
        if (romero_mod_data == undefined) {
          mod_line = xmlDoc.createElement("romero_mod");
          mod_line.setAttribute("name", `${mod_name}`)
          mod_line.setAttribute("stacks", 0)
          xmlDoc.querySelector(`romero`).appendChild(mod_line);
          is_write_needed = true;
        }

        romero_mod_data = xmlDoc.querySelector(`romero_mod[name='${mod_name}']`)
        let xml_stack = romero_mod_data.getAttribute('stacks')
        mod_scripts.mods[i]["stacks"] = xml_stack;
        if (is_write_needed == true) {
          var s = new XMLSerializer();
          var str = s.serializeToString(xmlDoc);
          fs.writeFileSync(`${gSelectedGame["directory"]}romero.xml`, str)
        }
      }
    },
    read_xml: function(file_location) {
      const fs = require('fs');
      try {
        let file_xml_doc = fs.readFileSync(file_location)
        let parser = new DOMParser()
        let xmlDoc = parser.parseFromString(file_xml_doc, 'text/xml')
        return xmlDoc
      } catch (e) {
        console.log(`read_xml: ${e}`)
        alert(`Unable to parse ${file_location}\nPlease check your game directory and verify files in Steam.`)
      }
    },
  }