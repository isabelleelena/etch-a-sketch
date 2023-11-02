const container = document.querySelector('#container');
const recreateGrid = document.querySelector('.create-grid');
const deleteGrid = document.querySelector('.delete-grid');

for (i = 0; i < 16; i++) {
    const div = document.createElement('div');
    div.classList.add('grid-square');
    container.appendChild(div);
}

const originalGrid = document.querySelectorAll('.grid-square');
originalGrid.forEach((square) => {

    square.addEventListener('mouseover', () => {
        square.setAttribute('style', 'background: black')
    })
})

recreateGrid.addEventListener('click', () => {
    createPromptAndNewGrid()
})

function createPromptAndNewGrid () {
    let userInput = prompt('Type in the number of boxes you want. Number must not be greater than 100.', '');

    originalGrid.forEach((square) => {
        square.remove();
    })

    let boxSize = Math.floor(960/userInput);
    let gridVolume = userInput ** 2;
    container.removeAttribute('style');
    container.setAttribute('style', `display: flex; width: 960px; flex-wrap: wrap;`)

    for (i = 0; i <  gridVolume; i++) {
        const div = document.createElement('div');
        container.appendChild(div);
        div.classList.add('new-grid-square');
        div.style.border = 'solid black 1px'; 
        div.style.boxSizing = 'border-box'; 
        div.style.width = `${boxSize}px`; 
        div.style.height = `${boxSize}px`;
        div.addEventListener('mouseover', () => {
            div.style.background = randomColor();
        })
        //div.addEventListener('mouseover', () => {
            //div.style.background = darkenColor();
        //})
    }

    const newGrid = document.querySelectorAll('.new-grid-square');

    deleteGrid.addEventListener('click', () => {
        newGrid.forEach((square) => {
        square.remove();
        })
    })
}


function randomColor() {
    let color = []
    for (let i = 0; i < 3; i++) {
        color.push(Math.floor(Math.random() * 256))
    }
    return 'rgb(' + color.join(', ') + ')';
}

//function darkenColor() {
 //   let currentColor = randomColor();
 //   for (let i = 0; i < 3; i++) {
  //      currentColor[i] += 25;
  //  }
   // return 'rgb(' + currentColor.join(', ') + ')';
//}

