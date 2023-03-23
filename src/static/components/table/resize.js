import $ from "@core/dom";

const resize = (event, $root) => {
  event.target.classList.add('resize_active')
  const $target = $(event.target)
  const grid = $target.data.resize
  const $parent = $target.closest('[data-type="resize"]')
  const coord = $parent.getCoord()
  const cells = $root.findAll(`[data-col='${$parent.data.col}']`)
  const sideProp = grid === 'col' ? 'bottom' : 'right'
  let value
  const cellWidth = () => {
    $parent.css({width: value + 'px'})
    cells.forEach((el) => el.style.width = $parent.$el.offsetWidth + 'px')
  }
  $target.css({[sideProp]: '-5000px'})

  document.onmousemove = (e) => {
    document.body.style.userSelect = 'none'

    const delta = grid === 'col'
      ? Math.floor(e.pageX - coord.right)
      : Math.floor(e.pageY - coord.bottom)

    grid === 'col'
      ? $target.css({right: -delta + 'px'})
      : $target.css({bottom: -delta + 'px'})

    value = grid === 'col'
      ? coord.width + delta
      : coord.height + delta
  }

  document.onmouseup = (e) => {
    document.onmousemove = null
    document.onmouseup = null
    document.body.style.userSelect = 'auto'
    event.target.classList.remove('resize_active')
    $target.css({right: 0, bottom: 0})

    grid === 'col' ? cellWidth() : $parent.css({height: value + 'px'})
  }
}

export default resize