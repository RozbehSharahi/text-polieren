import eventService from '~/services/event-service'
import Page from '~/models/Page'

export default async function ({ app }) {
  const pages = (await app.$content('pages').fetch()).map((v) => new Page(v))

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.router.beforeEach((to, from, next) => {
    const newPage = pages.find((v) => v.getPath() === to.fullPath)
    eventService.$emit('background-change', newPage.getBackgroundImage())
    next()
  })
}
