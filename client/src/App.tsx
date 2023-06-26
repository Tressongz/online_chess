import React, {useEffect, useState} from 'react';
import './App.css';
import BoardComponent from "./components/BoardComponent";
import {Board} from "./models/Board";
import {Player} from "./models/Player";
import {Colors} from "./models/Colors";
import LostFigures from "./components/LostFigures";
import Timer from "./components/Timer";

function App() {
    const [board, setBoard] = useState(new Board())
    const [whitePlayer, setWhitePlayer] = useState(new Player(Colors.WHITE));
    const [blackPlayer, setBlackPlayer] = useState(new Player(Colors.BLACK));
    const [currentPlayer, setCurrentPlayer] = useState<Player | null>(null);

    function restart() {
        const newBoard = new Board()
        newBoard.initCells()
        newBoard.addFigures()
        setBoard(newBoard)
        setCurrentPlayer(whitePlayer)
    }

    useEffect(() => {
        restart()
    }, [])

    function swapPlayer() {
        setCurrentPlayer(currentPlayer?.color === Colors.WHITE ? blackPlayer : whitePlayer)
    }


    return (
    <div className="app">
        <Timer
            currentPLayer={currentPlayer}
            restart={restart}
        />
      <BoardComponent
          currentPlayer={currentPlayer}
          swapPlayer={swapPlayer}
        board={board}
        setBoard={setBoard}
      />
        <div>
            <LostFigures
                title={'Черный фигуры'}
                figures={board.lostBlackFigures}
            />
            <LostFigures
                title={'Былые фигуры'}
                figures={board.lostWhiteFigures}
            />
        </div>
    </div>
  );
}

export default App;
