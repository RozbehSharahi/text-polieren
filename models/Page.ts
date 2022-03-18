type align = 'left' | 'right' | 'center'

interface IPage {
  path: string
  title: string
  description: string
  content: string
  priority: string | undefined
  background: string | undefined
  titlePosition: align | undefined
}

export default class Page {
  private readonly page: IPage

  constructor(page: IPage) {
    this.page = page
  }

  public getTitle(): string {
    return this.page.title
  }

  public getTitlePosition(): align {
    return this.page.titlePosition || 'left'
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
    let image = this.page.background || '/backgrounds/buchpolieren.jpg'

    if (!image.match(/^https?:\/\//)) {
      image = (process.env.baseUrl as string).replace(/\/$/, '') + image
    }

    return image
  }

  public getPath(): string {
    if (this.page.path === '/pages/homepage') return '/'
    return this.page.path.replace(/^\/pages/, '')
  }

  public matchesPath(path: string): boolean {
    if (this.getPath() === '/' && path === '/') return true
    return this.getPath() === path.replace(/\/$/, '')
  }
}
