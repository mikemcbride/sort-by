// takes an array of objects, an array of properties to sort by,
// and optionally a case-sensitive parameter (defaults to false)
// returns an array sorted by the given properties, in order.
const sortBy = function(arr, props, sensitive = false) {
  return arr.sort((a, b) => {
    return props
      .map(prop => {
        let dir = 1

        if (prop[0] === '-') {
          // they want a reverse sort
          dir = -1
          prop = prop.substring(1)
        }

        // sort should be case insensitive
        const _a =
          typeof a[prop] === 'string' && sensitive === false
            ? a[prop].toLowerCase()
            : a[prop]
        const _b =
          typeof b[prop] === 'string' && sensitive === false
            ? b[prop].toLowerCase()
            : b[prop]

        return _a > _b ? dir : _a < _b ? -dir : 0
      })
      .reduce((p, n) => {
        return p ? p : n
      }, 0)
  })
}

export default sortBy

