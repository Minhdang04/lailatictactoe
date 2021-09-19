const X_CLASS = "x"
const CIRCLE_CLASS = 'circle'
const win = [
    [0,1,2], [3,4,5], [6,7,8], [0,3,6], [1,4,7], [2,5,8], [0,4,8], [2,4,6]
]
const cell = document.querySelectorAll('[data-cell]')
const table = document.getElementById('table')
const winningMessageElement = document.getElementById('win') //chon tat ca cac phan tu co class ( chi class thoi nhe) như duoc khai bao
const restart = document.getElementById('restart')
const winningMessage = document.querySelector('[data]')
let circle

start()

restart.addEventListener('click', start)

function start() {
    circle = false
    cellElements.forEach(cell => {
        cell.classList(X_CLASS)
        cell.classList(CIRCLE_CLASS)
        cell.removeEventListener('click', click)
        cell.addEventListener("click", click, { once: true})
    })
    hover()
    winningMessageElement.classList.remove('show') //xoa cai thong bao thang cuoc
}

function click(e) {
    const cell = e.target
    const current = circlce ? CIRCLE : X_CLASS //kiem tra xem den luot dua nao, luot O khong thi cho thang X
    placeMark(cell, current) //ten function 
    if (check()) {
        end(false)
    }
    else if (isDraw()) {
        endGame(true)
    }
    else {
        change()
        hover()
    }
}

function end(draw) {
    if (draw) { 
        winningMessage.innerText = 'Draw!'
    }
    else {
        winningMessage.innerText = `${circle ? "O's" : "X's"} Wins!` //thong bao X hoac O thang tuy dieu kien
    }
    winningMessageElement.classList.add('show')
}

function isDraw() {
    return [...cellElement].every(cell =>{ //just like an array
        return cell.classList.contains(X_CLASS) || cell.classList.contains(CIRCLE_CLASS)
    })
}

function placeMark(cell, current) {
    cell.classList.add(current) //them vao html cai o trong ngoac
}

function change() {
    circle = !circle
}

function hover() {
    table.classList.remove(X_CLASS)
    table.classList.remove(CIRCLE_CLASS)
    if (circle) {
        table.classList.add(CIRCLE_CLASS)
    }
}

function check(currentClass) {
   return win.some(combination => { //lap di lap lai den khi dung mot dieu kien thi thoi
       return combination.every(index => { //lap di lap lai den khi dung tat ca cac truong hop
        return cellElements[index].classList.contains(current) //return
       }) 
   }) 
}