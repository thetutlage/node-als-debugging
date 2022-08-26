const { createServer } = require('http')
const storage = require('./storage')

async function requireModuleA() {
  return require('./module_a')
}

async function run(state) {
  return storage.run(state, async () => {
    const ModuleA = await requireModuleA()
    new ModuleA().run()
    state.res.end('done')
  })
}

createServer(async (req, res) => {
  return run({ req, res })
}).listen('3000')
