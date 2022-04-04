import pokemonAPI from '@/api/pokemon.api.js';

describe('Pokemon API', () => {
    test('Axios Configuration', () => {
        expect(pokemonAPI.defaults.baseURL).toBe('https://pokeapi.co/api/v2/pokemon');
    })
})