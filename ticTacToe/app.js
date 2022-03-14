let board = ['', '', '', '', '', '', '', '', ''];
let currentPlayer = 'X';
let isGameAcive = true;
const tiles = document.getElementsByClassName('game-board-tile')
const xmarked = []
const omarked = []


const playerAction = () => {
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].addEventListener('click', () => {
            if (isValidAction(i)) {
                doMarkTile(i)
                resultValidation()
                resultAnnounce()
            };
        })
    }
};

playerAction()
const isValidAction = (i) => {
    if (tiles[i].id === 'X' || tiles[i].id === 'O') {
        return false
    } else {
        return true
    }
};

const doMarkTile = (i) => {
    tiles[i].innerHTML = currentPlayer
    board[i] = currentPlayer
    tiles[i].setAttribute('id', currentPlayer)
    currentPlayer === 'X' ? xmarked.push(i) : omarked.push(i)
    changePlayer()
    displayCurrentPlayer()
};

const changePlayer = () => {
    currentPlayer === 'X' ? currentPlayer = 'O' : currentPlayer = 'X'
};

const displayCurrentPlayer = () => {
    document.getElementById('display-player-div').innerHTML = `<p>Current player is ${currentPlayer}</p>`
}

const resultValidation = () => {
    for (let i = 0; i < winningConditions.length; i++) {
        if (equalsIgnoreOrder(winningConditions[i], xmarked)) {
            return 'X' 
        } else if (equalsIgnoreOrder(winningConditions[i], omarked)) {
            return 'O'
        }
    }
    let count = 0
    for (let i = 0; i < board.length; i++) {
        if (board[i] === '') {
            count++
        }
    }
    if (count === 0) {
        return 'Tie'
    }
};

const resultAnnounce = () => {
    result = resultValidation();
    console.log(result)
    if (result !== undefined) {
        alert(`Winner is player ${result}`)
    }
};

const resetBoard = () => {
    let board = ['', '', '', '', '', '', '', '', ''];
    for (let i = 0; i < tiles.length; i++) {
        tiles[i].setAttribute('id', 't')
        tiles[i].innerHTML = ''
    }
}

const winningConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6]
];

const equalsIgnoreOrder = (a, b) => {
    if (a.length !== b.length) return false;
    const uniqueValues = new Set([...a, ...b]);
    for (const v of uniqueValues) {
      const aCount = a.filter(e => e === v).length;
      const bCount = b.filter(e => e === v).length;
      if (aCount !== bCount) return false;
    }
    return true;
}
  