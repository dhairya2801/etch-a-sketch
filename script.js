const container = document.querySelector('#container');

// initiate grid
let squares = 16;
createGrid(squares);
addHoverEffect();

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    squares = prompt("How many squares do you want each side?");
    
    // clear existing grid
    const toRemove = document.querySelectorAll('.grid');
    toRemove.forEach((rem) => {
        rem.remove();
    })

    createGrid(squares);
    addHoverEffect();
})

function createGrid(squares) {
    for (let i=0; i<squares*squares; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = `${Math.floor(1120/squares)}px`;
        grid.style.height = `${Math.floor(1120/squares)}px`;
        container.appendChild(grid);
    }
}

function addHoverEffect() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.background = 'rgba(98, 137, 192, 1)';
        })
        grid.addEventListener('mouseout', () => {
            grid.style.background = 'black';
        })
    })
}