import {ExcelComponent} from "../../core/ExcelComponent";

class Formula extends ExcelComponent {
  static className = 'formula grid-row justify-content-start'
  toHTML() {
    return `
      <div class="formula__fx">fx</div>
      <div class="formula__input" contenteditable="" spellcheck="false"></div>
    `
  }
}

export default Formula