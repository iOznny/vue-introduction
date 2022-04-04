import { shallowMount } from '@vue/test-utils';
import PokemonOptions from '@/components/PokemonOptions';
import { mockPokemons } from '../mocks/pokemons.mock';

describe('Component - Pokemon Options', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallowMount(PokemonOptions, {
            props: {
                pokemons: mockPokemons
            }
        });
    })
    
    test('Match with snapshot', () => {        
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Show fore options successful', () => {
        const liTags = wrapper.findAll('li');

        // Find four <li>
        expect(liTags.length).toBe(4);

        // Contains pokemon
        expect(liTags[0].text()).toBe('PIKACHU');
        expect(liTags[1].text()).toBe('CHARMANDER');
        expect(liTags[2].text()).toBe('CHARIZARD');
        expect(liTags[3].text()).toBe('MEW');
    })

    test('Emit "selection" with params', () => {
        const [li1, li2, li3, li4] = wrapper.findAll('li');

        // Emit event 'click'
        li1.trigger('click');
        li2.trigger('click');
        li3.trigger('click');
        li4.trigger('click');

        // Hope 4 emits
        expect(wrapper.emitted('selection-pokemon').length).toBe(4);

        // Checking li with id 
        expect(wrapper.emitted('selection-pokemon')[0]).toEqual([1]);
        expect(wrapper.emitted('selection-pokemon')[1]).toEqual([2]);
        expect(wrapper.emitted('selection-pokemon')[2]).toEqual([3]);
        expect(wrapper.emitted('selection-pokemon')[3]).toEqual([4]);
    })
})