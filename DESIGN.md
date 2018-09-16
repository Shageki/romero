# Design Notes
Feature roadmap and acceptance criteria.


## Key App Functionality
These are the core v1.0 features.


### Find game installs
Detects OS and looks in correct locations
Searches default locations and populates
Searches config file locations
Validates manually selected files
* (has to search 1-3 layers above / below)
* ie if in data search x directories up and down for a 7d2d install folder, then fix on that)
* If found adds to config file for future startups
Loads installs into an array (installs)
* On array change (React?) append a line into the array w/ triggers to select
* Custom event fired w/ listener to update line

### File version management
Backup key files in data folder alongside source if they do not exist.
* format is `_romero_backup_filename_extension_timestamp_.extension`
    * ie `_romero_backup_items_xml_2018101214362803.xml`
    * Split w/ _ will allow us to easily parse the string
Restore to backup (drop down to select backup file w/ pretty date/time stamp).
Purge files (warning to validate files after)

### Mod management
Write mod text block to file in comment block
``` html
<!-- Romero Mods
Headshot damage: 1
Bigger hordes: 1
Durable materials: 3
Stronger tools: 2
-->
```

Check for mod state by reading file for text block and show applications
* https://stackoverflow.com/questions/6156501/read-a-file-one-line-at-a-time-in-node-js
Apply mod (runs the apply script)
* Adds to application count
Remove mod (runs the undo script)
* Reduces application count
    * User cannot undo if 0 applications detected


## Future Updates
These are features that may be included in future releases.


### Manage server games
Swap server config file (similar to file version management functionality) but with unique UI

### Link to Night of the Living Dead
Play the original 1968 original from Archive.org (since it is public domain)
* https://archive.org/details/Night.Of.The.Living.Dead_1080p

### Localization
Localized text framework to support other languages