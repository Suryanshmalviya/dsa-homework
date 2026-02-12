//https://leetcode.com/problems/sudoku-solver/
// Topic:Backtracking, Hard - Sudoku Solver. 
// Time Complexity:
// Best:
// Average:
// Worst:
// Space Complexity:

type Board = number[][];

function helper(board: Board, row: number, col: number, num: number): boolean {
    // Check row
    for (let j = 0; j < 9; j++) {
        if (board[row][j] === num) 
            return false;
    }
    // Check column
    for (let i = 0; i < 9; i++) {
        if (board[i][col] === num) 
            return false;
    }
    // Check 3x3 subgrid
    const startRow = Math.floor(row / 3) * 3;
    const startCol = Math.floor(col / 3) * 3;
    for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
            if (board[startRow + i][startCol + j] === num) return false;
        }
    }
    return true;
}

function solveSudoku(board: Board): boolean {
    for (let row = 0; row < 9; row++) {
        for (let col = 0; col < 9; col++) {
            if (board[row][col] === 0) {
                for (let num = 1; num <= 9; num++) {
                    if (helper(board, row, col, num)) {
                        board[row][col] = num;
                        if (solveSudoku(board)) return true;
                        board[row][col] = 0;
                    }
                }
                return false;
            }
        }
    }
    return true;
}

const puzzle: Board = [
    [5, 3, 0, 0, 7, 0, 0, 0, 0],
    [6, 0, 0, 1, 9, 5, 0, 0, 0],
    [0, 9, 8, 0, 0, 0, 0, 6, 0],
    [8, 0, 0, 0, 6, 0, 0, 0, 3],
    [4, 0, 0, 8, 0, 3, 0, 0, 1],
    [7, 0, 0, 0, 2, 0, 0, 0, 6],
    [0, 6, 0, 0, 0, 0, 2, 8, 0],
    [0, 0, 0, 4, 1, 9, 0, 0, 5],
    [0, 0, 0, 0, 8, 0, 0, 7, 9],
];

if (solveSudoku(puzzle)) {
    console.log("Solved Sudoku:");
    puzzle.forEach(row => console.log(row.join(" ")));
} else {
    console.log("No solution exists.");
}

// Output:
// Solved Sudoku:
// 5 3 4 6 7 8 9 1 2
// 6 7 2 1 9 5 3 4 8
// 1 9 8 3 4 2 5 6 7
// 8 5 9 7 6 1 4 2 3
// 4 2 6 8 5 3 7 9 1
// 7 1 3 9 2 4 8 5 6
// 9 6 1 5 3 7 2 8 4
// 2 8 7 4 1 9 6 3 5
// 3 4 5 2 8 6 1 7 9

// Explanation:
// This TypeScript code implements a Sudoku solver using a backtracking algorithm.
// It takes a 9x9 Sudoku board (represented as a 2D array where 0s are empty cells) 
// and attempts to fill it with numbers 1-9, ensuring no duplicates in rows, columns, or 3x3 subgrids.
// If solvable, it modifies the board in place and returns true; otherwise, false.