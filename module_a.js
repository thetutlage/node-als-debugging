const storage = require('./storage')

module.exports = class ModuleA {
  async run() {
    const state = storage.getStore()
    console.log(state)
  }
}