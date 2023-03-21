import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";

class Table extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Table',
    });
  }
  static className = 'table'
  toHTML() {
    return createTable()
  }
}

export default Table