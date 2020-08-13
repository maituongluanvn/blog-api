/**
 * Copy from https://github.com/coderaiser/try-catch
 */
module.exports = (fn, ...args) => {
  try {
    return [null, fn(...args)]
  } catch (e) {
    return [e]
  }
}
