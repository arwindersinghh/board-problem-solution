let board = [
    ["A","B","C","E"],
    ["S","F","C","S"],
    ["A","D","E","E"]
];

let word1 = "ABCCED";
let word2 = "SEE";
let word3 = "ABCB";



function findSearchTerm(board, word) {
    
    let rowLen = board.length - 1;
    let columnLen = board[0].length - 1;
    
    
    function DFS(row, column, idx){
        if(row < 0 || row > rowLen || column < 0 || column > columnLen || board[row][column] !== word[idx]) return false;
        if(word.length-1 === idx) return true;

        //mark this part of the board as visited
        board[row][column] = "#"
        
        //if we find a match, return true without correcting the board
        if(DFS(row-1, column, idx+1) || DFS(row+1, column, idx+1) || DFS(row, column+1, idx+1) || DFS(row, column-1, idx+1)) return true;
        
        //our recursive calls will return the board back to normal if we didn't find the right amount of matches
        board[row][column] = word[idx];
    }
    
    for(let i = 0; i <= rowLen; i++){
        for(let j = 0; j <= columnLen; j++){
            if(board[i][j] === word[0] && DFS(i, j, 0)) return true;
        }
    }
    
    
    return false;
};

//resetting the board since it ends up with the '#' characters in it before testing each input
console.log(findSearchTerm(board, word1));
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
console.log(findSearchTerm(board, word2));
board = [["A","B","C","E"],["S","F","C","S"],["A","D","E","E"]];
console.log(findSearchTerm(board, word3));
