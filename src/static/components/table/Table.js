import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import $ from "@core/dom";

class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    });
  }
  static className = 'table'

  onMousedown(event) {
    if (event.target.dataset.resize) {
      event.target.classList.add('column__resize_active')
      const $target = $(event.target)
      const $parent = $target.closest('[data-type="resize"]')
      const coord = $parent.getCoord()
      const cells = this.$root.findAll(`[data-col='${$parent.data.col}']`)

      const cellWidth = (width) => {
        cells.forEach((el) => el.style.width = width)
      }

      document.onmousemove = (e) => {
        document.body.style.userSelect = 'none'
        const delta = Math.floor(e.pageX - coord.right)
        const value = coord.width + delta
        $parent.$el.style.width = value + 'px'
      }

      document.onmouseup = (e) => {
        document.body.style.userSelect = 'auto'
        event.target.classList.remove('column__resize_active')
        document.onmousemove = null
        cellWidth($parent.$el.style.width)
      }
    }
  }
  toHTML() {
    return createTable(100)
  }
}

export default Table