const timeout = (milliseconds: number) => {
  return new Promise((resolve) => {
    window.setTimeout(() => {
      resolve()
    }, milliseconds)
  })
}
export default timeout
