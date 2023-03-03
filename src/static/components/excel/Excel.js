export class Excel {
  constructor(selector, options) {
    this.$el = document.querySelector(selector)
    this.component = options.component || []
  }
}