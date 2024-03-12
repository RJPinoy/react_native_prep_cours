import * as React from "react";
import Pokemon from "./Pokemon";

const nmbArray = Array.from(Array(20).keys());
// console.log(nmbArray);
let pokeList = [];

function pokeFetch(index) {
  index = index + +1;
  let pokeData = fetch ("https://pokeapi.co/api/v2/pokemon/" + index);

  pokeData.then(promise => {
    return promise.json();
  }).then(content => {
    pokeList.push(content);
  });
}
nmbArray.forEach(pokeFetch);

const PokemonProvider = () => {

    return (
        <>
            {pokeList.map(pokemon => (
                <Pokemon key={pokemon.id} {...pokemon} />
            ))}
        </>
    );
};

export default PokemonProvider;