// ShallowMount: Solo monta el componente que le indiquemos.
// Mount:  Monta todo el componente, sub-componentes y un proceso mas pesado de renderizado.
import { shallowMount, mount } from "@vue/test-utils";

// Components
import Counter from "@/components/Counter";

describe('Counter Component', () => {
    let wrapper;

    // Despues de cada test
    beforeEach(() => {
        wrapper = shallowMount(Counter);
    })

    /**
     * Testings
    */

    it('Match with the Snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    it('Checking value in h2', () => {
        // Find element in dom
        expect(wrapper.find('h2').exists()).toBe(true);

        const h2 = wrapper.find('h2').text();
        expect(h2).toBe('Counter');
    })

    test('Value for default is 10 in <p>', () => {
        const pValue = wrapper.find('[data-test-counter="counter"]').text();
        expect(pValue).toBe('10');
    })

    test('Increment & Decrement the counter', async () => {
        const [increment, decrement] = wrapper.findAll('button');

        // Click in incremenet        
        await increment.trigger('click');        
                
        // Click in decrement    
        await decrement.trigger('click');
        await decrement.trigger('click');

        const pValue = wrapper.find('[data-test-counter="counter"]').text();        
        expect(pValue).toBe('9');
    })

    test('Set value in default', () => {
        let { start } = wrapper.props();
        const value = wrapper.find('[data-test-counter="counter"]').text()

        expect(Number(value)).toBe(start);
    })

    test('Show prop title', () => {        
        const wrapper = shallowMount(Counter, {
            props: {
                title: 'Hola Mundo',   
                start: 5
            }
        });

        expect(wrapper.find('h2').text()).toBe('Hola Mundo');
    })

})