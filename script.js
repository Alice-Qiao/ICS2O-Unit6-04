let height = 0
let base1 = 0
let base2 = 0
let number = 0

document.getElementById('button').addEventListener('click', math)

function math () {
  height = document.getElementById('height').value
  base1 = document.getElementById('base1').value
  base2 = document.getElementById('base2').value
  number = base1 / 2 * height + base2 / 2 * height
  alert(number)
}
