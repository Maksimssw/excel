const CODES = {
  A: 65,
  Z: 90
}

const createCell = () => {
  return `
    <div class="cell" contenteditable></div>
  `
}
const createCol = (col) => {
  return `
    <div class="column grid-row justify-content-center">${col}</div>
  `
}

const createRow = (num, content) => {
  return `
    <div class="row grid-row justify-content-start">
        <div 
          class="row__info grid-row justify-content-start">
          ${num ? num : ''}
        </div>
        <div class="row__data">${content}</div>
    </div>
  `
}

const createChar = (_, index) => {
  return String.fromCharCode(CODES.A + index)
}
export const createTable = (rowsCount = 100) => {
  const colsCount = CODES.Z - CODES.A + 1
  const rows = []

  const cols = new Array(colsCount)
      .fill('')
      .map(createChar)
      .map(createCol)
      .join('')

  rows.push(createRow(null, cols))
  for (let i = 1; i < rowsCount + 1; i++) {
    const cell = new Array(colsCount)
        .fill('')
        .map(createCell)
        .join('')

    rows.push(createRow(i, cell))
  }
  return rows.join('')
}