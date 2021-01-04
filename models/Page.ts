interface IPage {
  path: string
  title: string
  description: string
  content: string
  priority: string | undefined
  background: string | undefined
}

export default class Page {
  private readonly page: IPage

  constructor(page: IPage) {
    this.page = page
  }

  public getTitle(): string {
    return this.page.title
  }

  public getDescription(): string {
    return this.page.description
  }

  public getContent(): string {
    return this.page.content
  }

  public getDocument(): IPage {
    return this.page
  }

  public getPriority(): number {
    return parseInt(this.page.priority || '0')
  }

  public getBackgroundImage(): string {
    return this.page.background || 'candles.jpg'
  }

  public getPath(): string {
    if (this.page.path === '/pages/homepage') return '/'
    return this.page.path.replace(/^\/pages/, '')
  }
}
