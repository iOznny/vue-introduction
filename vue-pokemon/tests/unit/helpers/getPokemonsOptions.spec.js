import getPokemonsOptions, { getPokemons, getPokemonsNames } from '@/helpers/getPokemosOptions.js';

describe('Get Pokemons Options Helpers', () => {
    test('Return array numbers with length of 650', () => {
        const pokemons = getPokemons();
        expect(pokemons.length).toBe(650);
        expect(pokemons[0]).toBe(1);
    })

    test('Return first four names of pokemons', async () => {
        const names = await getPokemonsNames([1, 2, 3, 4]);
        
        // expect(names[0].name).toBe('bulbasaur');
        // expect(names[1].name).toBe('ivysaur');
        // expect(names[2].name).toBe('venusaur');
        // expect(names[3].name).toBe('charmander');

        expect(names).toStrictEqual([
            { id: 1, name: 'bulbasaur' },
            { id: 2, name: 'ivysaur' },
            { id: 3, name: 'venusaur' },
            { id: 4, name: 'charmander' }
        ]);
    })

    test('GetPokemonsOptions return mixin array', async () => {
        const pokemons = await getPokemonsOptions();

        // Checking length is 4
        expect(pokemons.length).toBe(4);

        // Diference pokemons
        expect(pokemons).toEqual([
            { 
                id: expect.any(Number), 
                name: expect.any(String)
            },
            { 
                id: expect.any(Number), 
                name: expect.any(String)
            },
            { 
                id: expect.any(Number), 
                name: expect.any(String)
            },
            { 
                id: expect.any(Number), 
                name: expect.any(String)
            }
        ]);
    })
})