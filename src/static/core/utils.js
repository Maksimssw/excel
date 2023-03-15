// do the first letter big
export const capitalize = (string) => {
  if (typeof string !== 'string') {
    throw new Error(`The data type must be string`)
  }

  return string.charAt(0).toUpperCase() + string.slice(1)
}