import React, { useState } from "react";

const TicTacToe = () => {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isPlayerTurn, setIsPlayerTurn] = useState(true);
  const [playerScore, setPlayerScore] = useState(0);
  const [botScore, setBotScore] = useState(0);

  const checkWinner = (board) => {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let combo of winningCombinations) {
      const [a, b, c] = combo;
      if (board[a] && board[a] === board[b] && board[a] === board[c]) {
        return board[a];
      }
    }
    return board.includes(null) ? null : "Draw";
  };

  const handlePlayerMove = (index) => {
    if (!board[index] && isPlayerTurn) {
      const newBoard = [...board];
      newBoard[index] = "X";
      setBoard(newBoard);

      const winner = checkWinner(newBoard);
      if (winner) {
        handleWinner(winner);
        return;
      }

      setIsPlayerTurn(false);
      setTimeout(() => handleBotMove(newBoard), 500);
    }
  };

  const handleBotMove = (newBoard) => {
    const availableMoves = newBoard
      .map((val, index) => (val === null ? index : null))
      .filter((val) => val !== null);

    if (availableMoves.length > 0) {
      const randomMove =
        availableMoves[Math.floor(Math.random() * availableMoves.length)];
      newBoard[randomMove] = "O";
      setBoard(newBoard);

      const winner = checkWinner(newBoard);
      if (winner) {
        handleWinner(winner);
      } else {
        setIsPlayerTurn(true);
      }
    }
  };

  const handleWinner = (winner) => {
    if (winner === "X") {
      setPlayerScore(playerScore + 1);
    } else if (winner === "O") {
      setBotScore(botScore + 1);
    }
    setTimeout(resetBoard, 1000);
  };

  const resetBoard = () => {
    setBoard(Array(9).fill(null));
    setIsPlayerTurn(true);
  };

  return (
    <div className="h-full w-full bg-black flex flex-col items-center justify-center text-white pt-10">
      {/* Scoreboard */}
      <div className="flex justify-between items-center w-64 mb-8">
        <div className="text-xl font-bold">
          Player: <span>{playerScore}</span>
        </div>
        <div className="text-xl font-bold">
          Bot: <span>{botScore}</span>
        </div>
      </div>

      {/* Game Board */}
      <div className="grid grid-cols-3 gap-2">
        {board.map((value, index) => (
          <div
            key={index}
            className="w-16 h-16 bg-white text-black flex items-center justify-center text-2xl font-bold cursor-pointer"
            onClick={() => handlePlayerMove(index)}
          >
            {value}
          </div>
        ))}
      </div>
    </div>
  );
};

export default TicTacToe;
