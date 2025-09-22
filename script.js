const container = document.querySelector('#container');

// initiate grid
let squares = 16;
createGrid(squares);

const btn = document.getElementById('btn');

btn.addEventListener('click', () => {
    squares = prompt("How many squares do you want each side?");
    
    if (squares == null) {
        squares = 16;
    }

    clearGrid();

    const curSize = document.querySelector('.currentSize');
    curSize.textContent = `Current Size: ${squares}x${squares}`;

    createGrid(squares);
})

function clearGrid() {
    const toRemove = document.querySelectorAll('.grid');
    toRemove.forEach((rem) => {
        rem.remove();
    })
}

function eraseGrid() {
    const gridEle = document.querySelectorAll('.grid');
    gridEle.forEach((sq) => {
        sq.style.background = 'black';
    })
}

function createGrid(squares) {
    for (let i=0; i<squares*squares; i++) {
        const grid = document.createElement('div');
        grid.classList.add('grid');
        grid.style.width = `${Math.floor(500/squares)}px`;
        grid.style.height = `${Math.floor(500/squares)}px`;
        container.appendChild(grid);
    }
    addHoverEffect();
}

function addHoverEffect() {
    const grids = document.querySelectorAll('.grid');
    grids.forEach((grid) => {
        grid.addEventListener('mouseover', () => {
            grid.style.background = randomColor();
        })
        // grid.addEventListener('mouseout', () => {
        //     grid.style.background = 'black';
        // })
    })
}

function randomColor() {
    let r = Math.floor(Math.random()*250);
    let g = Math.floor(Math.random()*250);
    let b = Math.floor(Math.random()*250);
    return `rgba(${r}, ${g}, ${b})`;
}