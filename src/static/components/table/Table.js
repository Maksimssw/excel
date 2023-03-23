import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";
import resize from "@/components/table/resize";

class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Table',
      listeners: ['mousedown']
    });
  }
  static className = 'table'

  onMousedown(event) {
    if (event.target.dataset.resize) resize(event, this.$root)
  }
  toHTML() {
    return createTable(100)
  }
}

export default Table