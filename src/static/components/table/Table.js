import {ExcelComponent} from "@core/ExcelComponent";
import {createTable} from "@/components/table/table.template";

class Table extends ExcelComponent {
  static className = 'table'
  toHTML() {
    return createTable()
  }
}

export default Table