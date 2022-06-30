const gameBoard = (() => {
    const board = document.querySelector('#game-board');
    
    const genGrid = () => {
        let grid = [];
        for (let index = 0; index < 9; index++) {            
            let field = document.createElement('div');
            field.className = "field";
            field.id = `f-${index}`
            board.appendChild(field);
            grid.push(field);
        }
        setListener(grid);
    }

    const setListener = (grid) => {
        for (let index = 0; index < grid.length; index++) {
            grid[index].addEventListener('click', (e) => {
                console.log(e);
            });
        }
    }
    return {genGrid};
})();

gameBoard.genGrid();

const players = (name, fig) => {
    const pName = name;
    const figure = fig;
    const turn = (fig === 'X') ? true : false;
    return {pName, figure, turn};
}

const p1 = players('geda', 'O');
console.log(p1.pName);
console.log(p1.figure);
console.log(p1.turn);
console.log(p1);