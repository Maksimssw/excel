const CODES = {
  A: 65,
  Z: 90
}

const createCell = (_, index) => {
  return `
    <div class="cell" contenteditable data-col="${index}"></div>
  `
}
const createCol = (col, index) => {
  return `
    <div class="column grid-row justify-content-center" data-type="resize" data-col="${index}">
      ${col}
      <div class="resize resize_column" data-resize="col"></div>
    </div>
  `
}

const createRow = (num, content) => {
  const resize = num ? '<div class="resize resize_row" data-resize="row"></div>' : ''

  return `
    <div class="row grid-row justify-content-start" data-type="resize">
        <div 
          class="row__info grid-row justify-content-start">
          ${num ? num : ''}
          ${resize}
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
        .map(createChar)
        .map(createCell)
        .join('')

    rows.push(createRow(i, cell))
  }
  return rows.join('')
}