var exist = function(board, word) {
    
    let rowLen = board.length - 1;
    let columnLen = board[0].length - 1;
    
    
    function DFS(row, column, idx){
        if(row < 0 || row > rowLen || column < 0 || column > columnLen || board[row][column] !== word[idx]) return false;
        if(word.length-1 === idx) return true;

        //mark this part of the board as visited
        board[row][column] = "#"
        
        //if we find a match, return true without correcting the board
        if(DFS(row-1, column, idx+1) || DFS(row+1, column, idx+1) || DFS(row, column+1, idx+1) || DFS(row, column-1, idx+1)) return true;
        
        //our recursive calls will mark the board unvisited if we didn't find the right amount of matches
        board[row][column] = word[idx];
    }
    
    for(let i = 0; i <= rowLen; i++){
        for(let j = 0; j <= columnLen; j++){
            if(board[i][j] === word[0] && DFS(i, j, 0)) return true;
        }
    }
    
    
    return false;
};
