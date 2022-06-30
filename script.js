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
