import {ExcelComponent} from "../../core/ExcelComponent";

class Table extends ExcelComponent {
  static className = 'table'
  toHTML() {
    return `
      <div class="row grid-row justify-content-start">
        <div class="row__info grid-row justify-content-start">

        </div>

        <div class="row__data">
          <div class="column grid-row justify-content-center">A</div>
          <div class="column grid-row justify-content-center">B</div>
          <div class="column grid-row justify-content-center">C</div>
        </div>
      </div>

      <div class="row grid-row justify-content-start">
        <div class="row__info grid-row justify-content-start">
          1
        </div>

        <div class="row__data">
          <div class="cell selected" contenteditable="">A1</div>
          <div class="cell" contenteditable="">B1</div>
          <div class="cell" contenteditable="">C1</div>
        </div>
      </div>

      <div class="row grid-row justify-content-start">
        <div class="row__info grid-row justify-content-start">
          2
        </div>

        <div class="row__data">
          <div class="cell" contenteditable="">A2</div>
          <div class="cell" contenteditable="">B2</div>
          <div class="cell" contenteditable="">C2</div>
        </div>
      </div>

      <div class="row grid-row justify-content-start">
        <div class="row__info grid-row justify-content-start">
          3
        </div>

        <div class="row__data">
          <div class="cell" contenteditable="">A3</div>
          <div class="cell" contenteditable="">B3</div>
          <div class="cell" contenteditable="">C3</div>
        </div>
      </div>
    `
  }
}

export default Table