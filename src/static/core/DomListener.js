export class DomListener {
  constructor($root, listeners = []) {
    if (!$root) {
      throw new Error('Error $root')
    }
    this.$root = $root
    this.listeners = listeners
  }

  initDOMListeners() {
    console.log(this.listeners)
  }

  removeDOMListener() {}
}