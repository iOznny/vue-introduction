import { shallowMount, mount } from '@vue/test-utils';
import { mockPokemons } from '../mocks/pokemons.mock';

import PokemonPage from '@/pages/PokemonPage';

describe('Page - Pokemon Page', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonPage);
    })
    
    test('Match with snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Call mixPokemons', () => {
        const mixPokemonsSpy = jest.spyOn(PokemonPage.methods, 'mixPokemons');
        const wrapper = shallowMount(PokemonPage);

        expect(mixPokemonsSpy).toHaveBeenCalled();
    })

    test('Match with snapshot when loading pokemons', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemons: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Show components PokemonPicture and PokemonOptions', () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemons: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        });
        
        const picture = wrapper.find('pokemon-picture-stub')
        const options = wrapper.find('pokemon-options-stub')

        // Components exists
        expect(picture.exists()).toBeTruthy();
        expect(options.exists()).toBeTruthy();

        // PokemonPicture has attribute id === 5
        expect(picture.attributes('pokemonid')).toBe('1');

        // PokemonOptions had attribute pokemons to be true
        expect(options.attributes('pokemons')).toBeTruthy();
    })

    test('Testing with checkAnswer', async () => {
        const wrapper = shallowMount(PokemonPage, {
            data() {
                return {
                    pokemons: mockPokemons,
                    pokemon: mockPokemons[0],
                    showPokemon: false,
                    showAnswer: false,
                    message: ''
                }
            }
        });

        await wrapper.vm.checkAnswer(1);

        expect(wrapper.find('h2').exists()).toBeTruthy();
        expect(wrapper.vm.showPokemon).toBeTruthy();

        await wrapper.vm.checkAnswer(1);
        expect(wrapper.vm.message).toBe('¡Correcto! PIKACHU');
    })
})