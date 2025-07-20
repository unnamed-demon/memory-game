import { useEffect, useState } from "react";
import "../App.css";

const loadingImg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from SVG Spinners by Utkarsh Verma - https://github.com/n3r4zzurr0/svg-spinners/blob/main/LICENSE --%3E%3Crect width='7.33' height='7.33' x='1' y='1' fill='currentColor'%3E%3Canimate id='svgSpinnersBlocksWave0' attributeName='x' begin='0;svgSpinnersBlocksWave1.end+0.2s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='y' begin='0;svgSpinnersBlocksWave1.end+0.2s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='width' begin='0;svgSpinnersBlocksWave1.end+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='0;svgSpinnersBlocksWave1.end+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='8.33' y='1' fill='currentColor'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='1' y='8.33' fill='currentColor'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.1s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='15.66' y='1' fill='currentColor'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='8.33' y='8.33' fill='currentColor'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='1' y='15.66' fill='currentColor'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='1;4;1'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.2s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='15.66' y='8.33' fill='currentColor'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='8.33' y='15.66' fill='currentColor'%3E%3Canimate attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='8.33;11.33;8.33'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.3s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3Crect width='7.33' height='7.33' x='15.66' y='15.66' fill='currentColor'%3E%3Canimate id='svgSpinnersBlocksWave1' attributeName='x' begin='svgSpinnersBlocksWave0.begin+0.4s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='y' begin='svgSpinnersBlocksWave0.begin+0.4s' dur='0.6s' values='15.66;18.66;15.66'/%3E%3Canimate attributeName='width' begin='svgSpinnersBlocksWave0.begin+0.4s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3Canimate attributeName='height' begin='svgSpinnersBlocksWave0.begin+0.4s' dur='0.6s' values='7.33;1.33;7.33'/%3E%3C/rect%3E%3C/svg%3E";

function genPokenum(tileType, unclicked) {
  let pokenum = -1;

  if (tileType === "unique") {
    const unclickedArray = [...unclicked];
    pokenum = unclickedArray[Math.floor(Math.random() * unclickedArray.length)];
  } else if (tileType === "random") {
    pokenum = 1 + Math.floor(Math.random() * 150);
  }

  return pokenum;
}

function Tile({
  tileType,
  unclicked,
  setUnclicked,
  gameOver,
  setGameOver,
  setFetched,
  maxScore
}) {
  const [imgUrl, setImgUrl] = useState(loadingImg);
  const [pokenum, setPokenum] = useState(genPokenum(tileType, unclicked));

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const tempPokenum = genPokenum(tileType, unclicked);
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + tempPokenum
        );
        setTimeout(() => setFetched((fetched) => fetched + 1), 1000);
        const obj = await response.json();
        setImgUrl(obj.sprites.front_default);
        setPokenum(tempPokenum);
      } catch {
        console.log("fetch failed");
        setImgUrl(loadingImg);
        setPokenum(-1);
      }
    }
    fetchPokemon();
  }, [unclicked]);

  return (
    <div className="grid-tile">
      <img
        src={imgUrl}
        alt="pokemon"
        data-pokenum={pokenum}
        onClick={(e) => {
          if (pokenum == -1) return;
          if (gameOver) return;

          console.log(pokenum);
          const tempUnclicked = new Set(unclicked);
          const didDeleteHappen = tempUnclicked.delete(
            Number(e.target.dataset.pokenum)
          );

          if (!didDeleteHappen) setGameOver(true);
          else if (tempUnclicked.size === 150 - maxScore) {
            setUnclicked(tempUnclicked);
            setGameOver(true);
          } else {
            setUnclicked(tempUnclicked);
            setFetched(0);
          }
        }}
      />
    </div>
  );
}

export default Tile;
