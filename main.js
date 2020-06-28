var boardController = ( function(){
    var pack = [1,2,3,4,5,6,7,8,9]

    function setBoard(array){
        var board = document.querySelector('.game-board');
        board.innerHTML = '';
        array.forEach(element => {
            board.innerHTML += `<div class="box">${element}</div>`
        });
    }
    
    function sortBoard(){
        var returnArray = pack.sort();
        setBoard(returnArray);
    }

    /**
     * shuffles the array of elemeent and sets the board again
     */
     function shuffleBoard() {
        for (var i = pack.length - 1; i > 0; i--) {
            var j = Math.floor(Math.random() * (i + 1));
            var temp = pack[i];
            pack[i] = pack[j];
            pack[j] = temp;
        }
        setBoard(pack);
    }

    function init (){
        setBoard(pack);
    }

    init();
    return {
        sortBoard: sortBoard,
        setBorad: setBoard,
        shuffleBoard: shuffleBoard
    }
}())

/**
 * Add the click listener on load
 */
window.addEventListener('load', function(){
    document.querySelector('#sort').addEventListener('click', boardController.sortBoard)
    document.querySelector('#shuffle').addEventListener('click', boardController.shuffleBoard)
})

