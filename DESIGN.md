# Coding and Design Conventions

### Modules and Extensions
Generally, avoid any external modules not already specific in Node.js or Electron.
* Part of the project goal is to scratch build any functionality, so do not include any external code unless it is absolutely necessary.
* When possible, wrap generic functionality into modules:
  * Animation handlers, filesystem tasks, etc.
