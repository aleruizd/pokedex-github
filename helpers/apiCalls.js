const getPokemon = async(url) => {
    let res = await fetch(url);
    return await res.json();
}

const getPokemonList = async (limit,offset) => {
    offset *= limit;

    if((offset+limit) > 151){
        limit -= (offset+limit) - 151;
    }

    let res = await fetch(`https://pokeapi.co/api/v2/pokemon?limit=${limit}&offset=${offset}`);
    let pokemonUrlList = await res.json();

    let pokemonList = await Promise.all(pokemonUrlList.results.map(async pokemon => {
        return getPokemon(pokemon.url);
    }));

    return pokemonList;
}

export {
    getPokemonList
}