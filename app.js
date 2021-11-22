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

    //swipe right
    function moverRight(){
        for (let i =0; i < 16; i++){
            let totalOne = squares[i].innerHTML,
            totalTwo = squares[i+1].innerHTML,
            totalThree = squares[i+2].innerHTML,
            totalFour = squares[i+3].innerHTML,
            row = [parseInt(totalOne),parseInt(totalTwo),parseInt(totalThree),parseInt(totalFour)];
            //console.log(totalFour)
            //console.log(row)

            let filteredRow = row.filter(num => num)
            //console.log(filteredRow)
            let missing = 4 - filteredRow.length,
            zeros = Array(missing).fill(0),
            //console.log(zeros)
            newRow = zeros.concat(filteredRow)
            squares[i].innerHTML =newRow[0];
            squares[i+1].innerHTML =newRow[1];
            squares[i+2].innerHTML =newRow[2];
            squares[i+3].innerHTML =newRow[3];
        }
    }
    moverRight();
})
