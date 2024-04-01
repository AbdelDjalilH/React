
import { useState } from "react";
import PokemonCard from "./components/PokemonCard";
function App () {
    const [pokemonIndex,setPokemonIndex] = useState(0);
    const previousIndex = () =>{setPokemonIndex(pokemonIndex-1)};
    const nextIndex = () =>{setPokemonIndex(pokemonIndex+1)}
    console.log(pokemonIndex);
return (
  <div>
  {pokemonIndex >0 && <button onClick={previousIndex}>Précédent</button>}
  
<PokemonCard pokemon={pokemonList[pokemonIndex]} />


{pokemonIndex< pokemonList.length-1 && <button onClick={nextIndex}>Suivant</button>}
     </div>
     );
}
export default App; 
const pokemonList = [
  {
      name: "bulbasaur",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/1.png",
    },
    {
      name: "charmander",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/4.png",
    },
    {
      name: "squirtle",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/7.png",
    },
    {
      name: "pikachu",
      imgSrc:
        "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/25.png",
    },
    {
      name: "mew",
    },
  ];
  