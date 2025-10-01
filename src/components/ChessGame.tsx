import React, { useState } from 'react';
import { cn } from '@/lib/utils';

// Define types for pieces and the board
type PieceSymbol = 'r' | 'n' | 'b' | 'q' | 'k' | 'p' | 'R' | 'N' | 'B' | 'Q' | 'K' | 'P';
type Piece = PieceSymbol | null;
type Board = Piece[][];

// Initial board setup
const initialBoard: Board = [
  ['r', 'n', 'b', 'q', 'k', 'b', 'n', 'r'],
  ['p', 'p', 'p', 'p', 'p', 'p', 'p', 'p'],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  [null, null, null, null, null, null, null, null],
  ['P', 'P', 'P', 'P', 'P', 'P', 'P', 'P'],
  ['R', 'N', 'B', 'Q', 'K', 'B', 'N', 'R'],
];

// Map piece symbols to Unicode characters
const pieceToUnicode: Record<PieceSymbol, string> = {
  'r': '♜', 'n': '♞', 'b': '♝', 'q': '♛', 'k': '♚', 'p': '♟',
  'R': '♖', 'N': '♘', 'B': '♗', 'Q': '♕', 'K': '♔', 'P': '♙',
};

interface Position {
  row: number;
  col: number;
}

const ChessGame = () => {
  const [board, setBoard] = useState<Board>(initialBoard);
  const [selectedPiece, setSelectedPiece] = useState<Position | null>(null);

  const handleSquareClick = (row: number, col: number) => {
    if (selectedPiece) {
      // Move piece
      const newBoard = board.map(r => [...r]);
      const piece = newBoard[selectedPiece.row][selectedPiece.col];
      
      // This is a simple move logic without validation.
      // In a real game, you'd check for valid moves here.
      newBoard[row][col] = piece;
      newBoard[selectedPiece.row][selectedPiece.col] = null;
      
      setBoard(newBoard);
      setSelectedPiece(null);
    } else {
      // Select piece
      if (board[row][col]) {
        setSelectedPiece({ row, col });
      }
    }
  };

  return (
    <div className="p-4 bg-gradient-to-br from-purple-500/50 to-indigo-600/50 rounded-2xl shadow-2xl backdrop-blur-lg border border-white/20">
      <div className="grid grid-cols-8 gap-0">
        {board.map((row, rowIndex) =>
          row.map((piece, colIndex) => {
            const isLightSquare = (rowIndex + colIndex) % 2 !== 0;
            const isSelected = selectedPiece?.row === rowIndex && selectedPiece?.col === colIndex;

            return (
              <div
                key={`${rowIndex}-${colIndex}`}
                onClick={() => handleSquareClick(rowIndex, colIndex)}
                className={cn(
                  'w-16 h-16 md:w-20 md:h-20 flex items-center justify-center cursor-pointer transition-all duration-200',
                  isLightSquare ? 'bg-white/30' : 'bg-black/30',
                  isSelected && 'ring-4 ring-yellow-400 z-10 scale-105',
                  'hover:bg-white/40'
                )}
              >
                {piece && (
                  <span className={cn(
                    'text-5xl md:text-6xl drop-shadow-lg',
                    'p' === piece.toLowerCase() ? 'text-4xl md:text-5xl' : '',
                    'P' === piece || 'R' === piece || 'N' === piece || 'B' === piece || 'Q' === piece || 'K' === piece ? 'text-gray-100' : 'text-gray-900'
                  )}>
                    {pieceToUnicode[piece as PieceSymbol]}
                  </span>
                )}
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};

export default ChessGame;