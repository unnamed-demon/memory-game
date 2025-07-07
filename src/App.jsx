import { useState } from "react";
import Tile from "./components/Tile";
import "./App.css";

function genUnclicked() {
  const set = new Set();
  for(let i=1; i<=150; i++) {
    set.add(i);
  }
  return set;
}

function App() {
  const [unclicked, setUnclicked] = useState(genUnclicked());
  
  const score = 150 - unclicked.size;
  let dice = Math.floor(Math.random() * 4);

  return (
    <>
      <header>
        <h1>Unnamed Demon's Memory Game</h1>
      </header>
      <div className="grid-container">
        <Tile
          tileType={dice === 0 ? "unique" : "random"}
          unclicked={unclicked}
          setUnclicked={setUnclicked}
        />
        <Tile
          tileType={dice === 1 ? "unique" : "random"}
          unclicked={unclicked}
          setUnclicked={setUnclicked}
        />
        <Tile
          tileType={dice === 2 ? "unique" : "random"}
          unclicked={unclicked}
          setUnclicked={setUnclicked}
        />
        <Tile
          tileType={dice === 3 ? "unique" : "random"}
          unclicked={unclicked}
          setUnclicked={setUnclicked}
        />
      </div>
    </>
  );
}

export default App;
