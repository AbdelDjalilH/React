
import Proptypes from "prop-types";
function PokemonCard({pokemon}) {
   
  return (
    <figure>
      {pokemon.imgSrc!=null ? (
        <img src={pokemon.imgSrc} alt={pokemon.name} />
      ) : (
        
          <p>???</p>
       
      )}
      <figcaption>{pokemon.name}</figcaption>
    </figure>
  );
}
PokemonCard.Proptypes = {
  pokemon : Proptypes.shape({
  name: Proptypes.string.isRequired,
  imgSrc : Proptypes.string,
  })
}

export default PokemonCard;
