import { defineNitroPlugin } from 'nitropack/runtime/plugin'

export default defineNitroPlugin((nitroApp) => {
  nitroApp.hooks.hook('robots:robots-txt', async (ctx) => {
    // remove comments from robotsTxt
    ctx.robotsTxt = ctx.robotsTxt.replace(/^#.*$/gm, '').trim()
  })
})
