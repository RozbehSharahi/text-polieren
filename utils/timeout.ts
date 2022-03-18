const timeout = (milliseconds: number) => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve(null)
    }, milliseconds)
  })
}
export default timeout
