import { shallowMount } from '@vue/test-utils';
import PokemonPicture from '@/components/PokemonPicture';

describe('Component - Pokemon Picture', () => {
    test('Match with snapshot', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonID: 1,
                showPokemon: false
            }
        });

        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Show picture hidden with pokemon 100', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonID: 100,
                showPokemon: false
            }
        });

        // Find elements img in dom
        const [img1, img2] = wrapper.findAll('img');

        expect(img1.exists()).toBeTruthy();
        expect(img2).toBe(undefined);
        
        // If img1 contains class hidden-pokemon
        expect(img1.classes('hidden-pokemon')).toBeTruthy();

        // Checking picture is pokemon 100.svg
        expect(img1.attributes('src') ).toBe('https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/100.svg')
    })

    test('Show pokemon if (showPicture) is true ', () => {
        const wrapper = shallowMount(PokemonPicture, {
            props: {
                pokemonID: 100,
                showPokemon: true
            }
        });      

        // Find elements img in dom
        const [img1, img2] = wrapper.findAll('img');

        expect(img1.exists()).toBeTruthy();
        expect(img2.exists()).toBeTruthy();        
        
        // If img1 contains class hidden-pokemon
        expect(img2.classes('fade-in')).toBeTruthy();
    })
})