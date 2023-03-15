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
        throw new Error(`method not specified`)
      }

      // event addEventListener
      this.$root.on(listener, this[method].bind(this))
    })
  }

  removeDOMListener() {}
}

// input => onInput
const getMethodName = (string) => {
  return 'on' + capitalize(string)
}