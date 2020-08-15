module.exports = async query => {
  try {
    const data = await query
    return [null, data]
  } catch (error) {
    return [error]
  }
}
