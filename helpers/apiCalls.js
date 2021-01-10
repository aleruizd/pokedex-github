const getPokemon = async(id) => {
    let res = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    let pokemon = await res.json();

    return pokemon;
}

const getPokemonList = async (limit,offset) => {
    let pokemonList = [];
    for(let i=offset;i<(limit+offset);i++){
        let pokemon = await getPokemon(i);
        pokemonList.push(pokemon)
    }
    
    return pokemonList;
}

export {
    getPokemonList
}