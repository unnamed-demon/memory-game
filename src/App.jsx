import { useState } from "react";
import Tile from "./components/Tile";
import LoadingOverlay from "./components/LoadingOverlay";
import "./App.css";

function genUnclicked() {
  const set = new Set();
  for (let i = 1; i <= 150; i++) {
    set.add(i);
  }
  return set;
}

function App() {
  const [unclicked, setUnclicked] = useState(genUnclicked());
  const [gameOver, setGameOver] = useState(false);
  const [fetched, setFetched] = useState(0);

  const score = 150 - unclicked.size;
  let dice = Math.floor(Math.random() * 4);

  function reset() {
    setFetched(0);
    setUnclicked(genUnclicked());
    setGameOver(false);
    console.log("new game");
  }

  return (
    <>
      <header>
        <h1>Unnamed Demon's Memory Game</h1>
        <div className="score-container">          
          <h1>Score : {String(150 - unclicked.size).padStart(3, "0")}</h1>
        </div>
      </header>

      <dialog open={gameOver}>
        {score === 150 ? (
          <>
            <b>YOU WIN!</b> <p>Your score is {score}</p>
          </>
        ) : (
          <>
            <b>GAME OVER</b> <p>Your score is {score}</p>
          </>
        )}
        <button onClick={reset}>Retry</button>
      </dialog>

      <div className="grid-container">
        {fetched < 4 && <LoadingOverlay />}
        <Tile
          tileType={dice === 0 ? "unique" : "random"}
          unclicked={unclicked}
          setUnclicked={setUnclicked}
          gameOver={gameOver}
          setGameOver={setGameOver}
          fetched={fetched}
          setFetched={setFetched}
        />
        <Tile
          tileType={dice === 1 ? "unique" : "random"}
          unclicked={unclicked}
          setUnclicked={setUnclicked}
          gameOver={gameOver}
          setGameOver={setGameOver}
          fetched={fetched}
          setFetched={setFetched}
        />
        <Tile
          tileType={dice === 2 ? "unique" : "random"}
          unclicked={unclicked}
          setUnclicked={setUnclicked}
          gameOver={gameOver}
          setGameOver={setGameOver}
          fetched={fetched}
          setFetched={setFetched}
        />
        <Tile
          tileType={dice === 3 ? "unique" : "random"}
          unclicked={unclicked}
          setUnclicked={setUnclicked}
          gameOver={gameOver}
          setGameOver={setGameOver}
          fetched={fetched}
          setFetched={setFetched}
        />
      </div>
    </>
  );
}

export default App;
