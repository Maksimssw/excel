import {Excel} from "@/components/excel/Excel";

const excel = new Excel('#app', {
  component: []
})

{
  // Functionality in the form of a list and in the form of a grid
  const list = document.querySelector('.list-button')
  const grid = document.querySelector('.grid-button')
  const buttons = document.querySelectorAll('.dashboard__button')
  const listWrapper = document.querySelector('.list')

  const changeClass = () => {
    grid.classList.contains('dashboard__button_active')
      ? listWrapper.classList.remove('list_grid')
      : listWrapper.classList.add('list_grid')
  }

  changeClass();
  const toggleClassButton = () => {
    if (localStorage.getItem('dasboard-button-active') === 'true') {
      list.classList.remove('dashboard__button_active')
      grid.classList.add('dashboard__button_active')
    } else {
      list.classList.add('dashboard__button_active')
      grid.classList.remove('dashboard__button_active')
    }

    changeClass();
  }

  toggleClassButton()

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('dasboard-button-active', grid.classList.toggle('dashboard__button_active'))

      toggleClassButton()
    })
  })
}