import {capitalize} from "@core/utils";

export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('Error $root')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    this.listeners.forEach((listener) => {
      const method = getMethodName(listener)
      if (!this[method]) {
        throw new Error(`method ${method} not specified in ${this.name}`)
      }
      this[method] = this[method].bind(this)
      // event addEventListener
      this.$root.on(listener, this[method])
    })
  }

  removeDOMListener() {
    this.listeners.forEach((listeners) => {
      const method = getMethodName(listeners)
      this.$root.off(listeners, this[method])
    })
  }
}

// input => onInput
const getMethodName = (string) => {
  return 'on' + capitalize(string)
}