import {ExcelComponent} from "../../core/ExcelComponent";

class Toolbar extends ExcelComponent {
  constructor($root) {
    super($root, {
      name: 'Toolbar',
      listeners: ['click']
    });
  }
  static className = 'toolbar grid-row justify-content-start'
  onClick(event) {
    console.log(event.target)
  }
  toHTML() {
    return `
      <div class="toolbar__format gray-border grid-row justify-content-start">
        <div class="toolbar__format-item toolbar__info gray-hover">
          p.
          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="#_sprite_arrow-down"></use>
            </svg>
            <p>Денежный формат</p>
          </div>
        </div>

        <div class="toolbar__format-item toolbar__info gray-hover">
          %
          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
            </svg>
            <p>Процентный формат</p>
          </div>
        </div>

        <div class="toolbar__format-item toolbar__info gray-hover">
          <svg class="toolbar__icon icon-24">
            <use xlink:href="../static/icons/sprite.svg#arrow"></use>
          </svg>

          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
            </svg>
            <p>Уменьшить число после запятой</p>
          </div>
        </div>

        <div class="toolbar__format-item toolbar__info gray-hover">
          <svg class="toolbar__icon icon-24 rotate-180">
            <use xlink:href="../static/icons/sprite.svg#arrow"></use>
          </svg>

          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
            </svg>
            <p>Увеличить числ после запятой</p>
          </div>
        </div>
      </div>

      <div class="toolbar__font gray-border">
        <div class="toolbar__font-action toolbar__info grid-row justify-content-start gray-hover">
          <p>По умолчанию</p>

          <svg class="toolbar__icon icon-24">
            <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
          </svg>

          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
            </svg>
            <p>Шрифт</p>
          </div>
        </div>
      </div>

      <div class="toolbar__text gray-border grid-row justify-content-start">
        <div class="toolbar__text-action toolbar__info">
          <svg class="toolbar__icon gray-hover icon-24">
            <use xlink:href="../static/icons/sprite.svg#bold"></use>
          </svg>

          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
            </svg>
            <p>Полужирный (Ctrl + R)</p>
          </div>
        </div>

        <div class="toolbar__text-action toolbar__info">
          <svg class="toolbar__icon gray-hover icon-24">
            <use xlink:href="../static/icons/sprite.svg#italic"></use>
          </svg>

          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
            </svg>
            <p>Курсив (Ctrl + I)</p>
          </div>
        </div>

        <div class="toolbar__text-action toolbar__info">
          <svg class="toolbar__icon gray-hover icon-24">
            <use xlink:href="../static/icons/sprite.svg#cross-out"></use>
          </svg>

          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
            </svg>
            <p>Зачеркнутый (Alt + Shift + 5)</p>
          </div>
        </div>

        <div class="toolbar__text-action toolbar__info">
          <svg class="toolbar__icon gray-hover icon-24">
            <use xlink:href="../static/icons/sprite.svg#format"></use>
          </svg>

          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
            </svg>
            <p>Капс (Ctrl + U)</p>
          </div>
        </div>
      </div>

      <div class="grid-row justify-content-start gray-border">
        <div class="gray-hover toolbar__info">
          <svg class="toolbar__icon gray-hover icon-24">
            <use xlink:href="../static/icons/sprite.svg#format-align-left"></use>
          </svg>

          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
            </svg>
            <p>Позицианирование</p>
          </div>
        </div>

        <div class="gray-hover toolbar__info">
          <svg class="toolbar__icon gray-hover icon-24">
            <use xlink:href="../static/icons/sprite.svg#format-align-center"></use>
          </svg>

          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
            </svg>
            <p>Позицианирование</p>
          </div>
        </div>

        <div class="gray-hover toolbar__info">
          <svg class="toolbar__icon gray-hover icon-24">
            <use xlink:href="../static/icons/sprite.svg#format-align-right"></use>
          </svg>

          <div class="info">
            <svg class="info__icon icon-16">
              <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
            </svg>
            <p>Позицианирование</p>
          </div>
        </div>
      </div>
    `
  }
}

export default Toolbar