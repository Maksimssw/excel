class Dom {
  constructor(selector) {
    this.$el = typeof selector === 'string'
      ? document.querySelector(selector)
      : selector
  }

  html(html) {
    if (typeof html === 'string') {
      this.$el.innerHTML = html
      return this
    }
    return this.$el.outerHTML.trim()
  }

  clear() {
    this.html('')
    return this
  }

  on(type, callback) {
    this.$el.addEventListener(type, callback)
  }

  off(type, callback) {
    this.$el.removeEventListener(type, callback)
  }

  closest(selector) {
    return $(this.$el.closest(selector))
  }

  get data() {
    return this.$el.dataset
  }

  getCoord() {
    return this.$el.getBoundingClientRect()
  }

  findAll(selector) {
    return this.$el.querySelectorAll(selector)
  }

  css(styles = {}) {
    Object.keys(styles).forEach(key => {
      return this.$el.style[key] = styles[key]
    })
  }

  append(node) {
    if (node instanceof Dom) {
      node = node.$el
    }

    if (Element.prototype.append) {
      this.$el.append(node)
    } else {
      this.$el.appendChild(node)
    }

    return this
  }
}

const $ = (selector) => new Dom(selector)

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    classes.split(' ').forEach(item => {
      el.classList.add(item)
    })
  }

  return $(el)
}

export default $