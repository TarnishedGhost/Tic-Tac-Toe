const gameBoard = document.querySelector("#gameboard")
const infoDisplay = document.querySelector("#info")
const startCells = [
    "", "", "", "", "", "", "", "", ""
]
let go = "хрестик"
infoDisplay.textContent = "Хрестик ходить першим"


function createBoard() {
    startCells.forEach((_cell, index) => {
        const cellElement = document.createElement('div')
        cellElement.classList.add('square')
        cellElement.id = index
        cellElement.addEventListener('click', addGo)
        gameBoard.append(cellElement)
    })
}
createBoard()


function addGo(e) {
    const goDisplay = document.createElement('div')
    goDisplay.classList.add(go)
    e.target.append(goDisplay)
    go = go === "хрестик" ? "нулик" : "хрестик"
    infoDisplay.textContent = "Зараз хід " + go + "а."
    e.target.removeEventListener("click", addGo)
    checkScore()
}

function checkScore() {
    const allSquares = document.querySelectorAll(".square")
    const winningCombos = [
        [0,1,2], [3,4,5], [6,7,8],
        [0,3,6], [1,4,7], [2,5,8],
        [0,4,8], [2,4,6]
    ]

    console.log(allSquares[4])

    winningCombos.forEach(array => {
        const circleWins = array.every(cell =>
            allSquares[cell].firstChild?.classList.contains('нулик'))

        if (circleWins) {
            infoDisplay.textContent = "Нулик виграв!"
            allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
            return
        }
    })

winningCombos.forEach(array => {
    const crossWins = array.every(cell =>
        allSquares[cell].firstChild?.classList.contains('хрестик'))

    if (crossWins) {
        infoDisplay.textContent = "Хрестик виграв!"
        allSquares.forEach(square => square.replaceWith(square.cloneNode(true)))
        return
    }
})


}

