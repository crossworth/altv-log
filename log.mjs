import * as alt from 'alt'
import { stringify } from './stringify'

const log = (...args) => {
  for (let arg of args) {
    alt.log(stringify(arg))
  }
}

export { log }
export { setDepth } from './stringify'