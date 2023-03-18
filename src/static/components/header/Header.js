import {ExcelComponent} from "../../core/ExcelComponent";

class Header extends ExcelComponent {
  static className = 'header'
  toHTML() {
    return `
      <a href="#" class="header__logo">
        <img
          src="@/images/excel-logo.webp"
          alt=""
        >
      </a>

      <div class="header__wrapper">
        <div class="header__info grid-row justify-content-start">
          <input
            type="text"
            value="Новая таблица"
            class="header__name"
          >

          <div class="header__content">
            <svg class="header__favourites icon-24 gray-hover">
              <use xlink:href="../static/icons/sprite.svg#star"></use>
            </svg>
            <div class="info">
              <svg class="info__icon icon-16">
                <use xlink:href="../static/icons/sprite.svg#arrow-down"></use>
              </svg>
              <p>Пометить</p>
            </div>
          </div>
        </div>

        <div class="header__action">
          <button class="header__delete gray-hover">
            <svg class="header__trash icon-24">
              <use xlink:href="../static/icons/sprite.svg#trash"></use>
            </svg>
          </button>
          <a href="#" class="header__link gray-hover">
            <svg class="header__arrow icon-24">
              <use xlink:href="../static/icons/sprite.svg#arrow-circle"></use>
            </svg>
          </a>
        </div>

        <div class="header__set">
          <nav>
            <ul class="header__list grid-row justify-content-start">
              <li class="header__item gray-hover">
                Файл
              </li>
              <li class="header__item gray-hover">
                Правка
              </li>
              <li class="header__item gray-hover">
                Вид
              </li>
              <li class="header__item gray-hover">
                Формат
              </li>
              <li class="header__item gray-hover">
                Данные
              </li>
              <li class="header__item gray-hover">
                Инструменты
              </li>
            </ul>
          </nav>
        </div>
      </div>
    `
  }
}

export default Header