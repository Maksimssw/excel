import {ExcelComponent} from "../../core/ExcelComponent";

class Formula extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Formula',
      listeners: ['input']
    });
  }

  static className = 'formula grid-row justify-content-start'

  toHTML() {
    return `
      <div class="formula__fx">fx</div>
      <div class="formula__input" contenteditable="" spellcheck="false"></div>
    `
  }

  onInput(event) {
    console.log('Formula:', event)
  }
}

export default Formula