{
  // Functionality in the form of a list and in the form of a grid
  const list = document.querySelector('.list')
  const grid = document.querySelector('.grid')
  const buttons = document.querySelectorAll('.dashboard__button')

  const toggleClassButton = () => {
    if (localStorage.getItem('dasboard-button-active') === 'true') {
      list.classList.remove('dashboard__button_active')
      grid.classList.add('dashboard__button_active')
    } else {
      list.classList.add('dashboard__button_active')
      grid.classList.remove('dashboard__button_active')
    }
  }

  toggleClassButton()

  buttons.forEach((button) => {
    button.addEventListener('click', () => {
      localStorage.setItem('dasboard-button-active', grid.classList.toggle('dashboard__button_active'))

      toggleClassButton()
    })
  })
}