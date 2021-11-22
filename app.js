document.addEventListener('DOMContentLoaded', () =>{
    const gridDisplay = document.querySelector('.grid'),
    scoreDisplay = document.getElementById('score'),
    resultDisplay = document.getElementById('result');
    width = 4;
    let squares = [];

    function createBoard(){
        for (let i = 0; i < width*width; i++){
            const square = document.createElement('div')
            square.innerHTML = 0
            gridDisplay.appendChild(square)
            squares.push(square);

        }
        generate();
        generate();
    }
    createBoard();
    
    //generate a number randomly
    function generate() {
        let randomNum = Math.floor(Math.random() * squares.length);
        console.log(randomNum)
        if (squares[randomNum].innerHTML == 0) {
            squares[randomNum].innerHTML = 2
        }else{ 
        generate();
        }
    }








})