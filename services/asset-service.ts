const assetService = new (class AssetService {
  private alreadyLoaded: string[] = []

  async preloadImage(url: string): Promise<void> {
    if (this.alreadyLoaded.includes(url)) {
      return
    }

    this.alreadyLoaded.push(url)

    return await new Promise((resolve) => {
      const img = new Image()
      img.onload = function (): void {
        // @ts-ignore
        resolve(this)
      }
      img.src = url
    })
  }
})()

export default assetService
