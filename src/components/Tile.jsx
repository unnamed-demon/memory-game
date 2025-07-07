import { useEffect, useState } from "react";
import "../App.css";

const placeholderImg =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1em' height='1em' viewBox='0 0 24 24'%3E%3C!-- Icon from Lets Icons by Leonid Tsvetkov - https://creativecommons.org/licenses/by/4.0/ --%3E%3Cg fill='none'%3E%3Cpath fill='currentColor' fill-rule='evenodd' d='M3.172 3.172C2 4.343 2 6.229 2 10v4c0 3.771 0 5.657 1.172 6.828S6.229 22 10 22h4c3.771 0 5.657 0 6.828-1.172S22 17.771 22 14v-4c0-2.84 0-4.61-.5-5.811V17a3.62 3.62 0 0 1-2.56-1.06l-.752-.752c-.722-.722-1.082-1.082-1.491-1.234a2 2 0 0 0-1.394 0c-.409.152-.77.512-1.49 1.234l-.114.113c-.585.585-.878.878-1.189.932a1 1 0 0 1-.699-.134c-.268-.166-.431-.547-.758-1.308L11 14.667c-.75-1.75-1.124-2.624-1.778-2.952a2 2 0 0 0-1.065-.205c-.729.062-1.401.735-2.747 2.08L3.5 15.5V2.887q-.174.129-.328.285' clip-rule='evenodd'/%3E%3Cpath stroke='currentColor' stroke-width='2' d='M3 10c0-1.914.002-3.249.138-4.256c.131-.978.372-1.496.74-1.865c.37-.37.888-.61 1.866-.741C6.751 3.002 8.086 3 10 3h4c1.914 0 3.249.002 4.256.138c.978.131 1.496.372 1.865.74c.37.37.61.888.742 1.866C20.998 6.751 21 8.086 21 10v4c0 1.914-.002 3.249-.137 4.256c-.132.978-.373 1.496-.742 1.865c-.369.37-.887.61-1.865.742c-1.007.135-2.342.137-4.256.137h-4c-1.914 0-3.249-.002-4.256-.137c-.978-.132-1.496-.373-1.865-.742c-.37-.369-.61-.887-.741-1.865C3.002 17.249 3 15.914 3 14z'/%3E%3Ccircle cx='15' cy='9' r='2' fill='currentColor'/%3E%3C/g%3E%3C/svg%3E";

function Tile({ tileType, unclicked, setUnclicked }) {
  const [imgUrl, setImgUrl] = useState(placeholderImg);

  let pokenum = -1;

  if (tileType === "unique") {
    const unclickedArray = [...unclicked];
    pokenum = unclickedArray[Math.floor(Math.random() * unclickedArray.length)];
  } else if (tileType === "random") {
    pokenum = 1 + Math.floor(Math.random() * 150);
  }

  console.log(tileType + " " + pokenum);

  useEffect(() => {
    async function fetchPokemon() {
      try {
        const response = await fetch(
          "https://pokeapi.co/api/v2/pokemon/" + pokenum
        );
        const obj = await response.json();
        setImgUrl(obj.sprites.front_default);
      } catch {
        console.log("fetch failed");
        setImgUrl(placeholderImg);
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
          if (imgUrl === placeholderImg) return;

          const tempUnclicked = new Set(unclicked);
          tempUnclicked.delete(e.target.dataset.pokenum);
          setUnclicked(tempUnclicked);
        }}
      />
    </div>
  );
}

export default Tile;
