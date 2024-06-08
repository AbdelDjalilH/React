import Proptypes from "prop-types";
import React from "react";
function NavBar({setPokemonIndex, pokemonList }) {
  const handleClick = (pikachuName) => {
    if (pikachuName==="pikachu") {
    alert("pika pikachu !!!")
  }
};
  return (
    <div>
      {pokemonList.map((pokemon,index) => (
        <button key={pokemon.name} onClick={() =>{setPokemonIndex(index); handleClick(pokemon.name);}}>{pokemon.name}</button> 
        
        ))}        
        </div>  
      );
}


  

export default NavBar;
