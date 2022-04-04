import pokemonAPI from "@/api/pokemon.api";

// Generate array with number from 0 to 650 Pokemons
export const getPokemons = () => {
    const pokemons = Array.from(Array(650));
    return pokemons.map((_, i) => i + 1);
};

// Set pokemons options
const getPokemonsOptions = async () => {
    // Mix pokemon number arrangement
    const mixPokemons = getPokemons().sort(() => Math.random() - 0.5);
    
    // We pass the first 4 of the arrangement
    const pokemons = await getPokemonsNames(mixPokemons.splice(0, 4));
    return pokemons;
};

// Get first 4 pokemons
export const getPokemonsNames = async ([a, b, c, d] = []) => {
    const promises = [
        pokemonAPI.get(`/${ a }`),
        pokemonAPI.get(`/${ b }`),
        pokemonAPI.get(`/${ c }`),
        pokemonAPI.get(`/${ d }`),
    ];

    const [p1, p2, p3, p4] = await Promise.all(promises);
    
    // Return pokemons names
    return [
        { id: p1.data.id, name: p1.data.name },
        { id: p2.data.id, name: p2.data.name },
        { id: p3.data.id, name: p3.data.name },
        { id: p4.data.id, name: p4.data.name }
    ];
}

export default getPokemonsOptions;