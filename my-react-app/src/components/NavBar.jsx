import Proptypes from "prop-types";
function NavBar ({pokemonIndex,setPokemonIndex,pokemonList}) {
    
    const previousIndex = () =>{setPokemonIndex(pokemonIndex-1)};
    const nextIndex = () =>{setPokemonIndex(pokemonIndex+1)}
    console.log(pokemonIndex);
    return (
        <div>
  {pokemonIndex >0 && <button onClick={previousIndex}>Précédent</button>}
  {pokemonIndex< pokemonList.length-1 && <button onClick={nextIndex}>Suivant</button>}
     </div>
    )
}
export default NavBar;