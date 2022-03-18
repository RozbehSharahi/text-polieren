import eventService from '~/services/event-service'
import Page from '~/models/Page'
import timeout from '~/utils/timeout'

export default async function ({ app }) {
  const pages = (await app.$content('pages').fetch()).map((v) => new Page(v))

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  app.router.afterEach(async (to) => {
    await timeout(50)
    const newPage = pages.find((v) => v.matchesPath(to.fullPath))
    eventService.$emit('background-change', newPage.getBackgroundImage())
  })
}
