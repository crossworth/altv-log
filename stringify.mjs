const sort = (a, b) => {
  return a.toLowerCase() < b.toLowerCase() ? -1 : 1
}

let depth = 5

const setDepth = newDepth => {
  depth = newDepth
}

const stringify = (object, visited = [], buffer = '') => {
  if (object === null) {
    return 'null'
  }

  if (typeof object === 'undefined') {
    return 'undefined'
  }

  let type = ''

  try {
    type = ({}).toString.call(object)
  } catch (e) {
    type = '[object Object]'
  }

  if (type === '[object Number]') {
    return '' + object
  }

  if (type === '[object Boolean]') {
    return object ? 'true' : 'false'
  }

  if (type === '[object Function]') {
    return object.toString().split('\n  ').join('\n' + buffer)
  }

  if (type === '[object String]') {
    return `"${object.replace(/"/g, '\\"')}"`
  }

  for (let i = 0; i < visited.length; i++) {
    if (object === visited[i]) {
      return `[circular ${type.slice(1)}]`
    }
  }

  visited.push(object)

  if (type === '[object Array]') {
    let parts = []

    for (let i = 0; i < object.length; i++) {
      parts.push(stringify(object[i], visited))
    }

    return '[' + parts.join(', ') + ']'
  }

  if (type.match(/Array/)) {
    return type
  }

  let typeFinal = `~y~${type}~w~ `
  let newBuffer = `${buffer} `

  let parts = []

  if (buffer.length < depth) {
    let names = []

    try {
      for (let name in object) {
        names.push(name)
      }
    } catch (e) {
    }

    names.sort(sort)
    for (let i = 0; i < names.length; i++) {
      try {
        parts.push(`${newBuffer}${names[i]}: ${stringify(object[names[i]], visited, newBuffer)}`)
      } catch (e) {
      }
    }
  }

  if (!parts.length) {
    return `${typeFinal}{ ... }`
  }

  return `${typeFinal}{\n${parts.join(`,\n`)}\n${buffer}}`
}

export { stringify, setDepth }