class Dom {
}

const $ = () => new Dom()

$.create = (tagName, classes = '') => {
  const el = document.createElement(tagName)
  if (classes) {
    classes.split(' ').forEach(item => {
      console.log(item)
      el.classList.add(item)
    })
  }

  return el
}

export default $