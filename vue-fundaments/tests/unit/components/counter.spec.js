// ShallowMount: Solo monta el componente que le indiquemos.
// Mount:  Monta todo el componente, sub-componentes y un proceso mas pesado de renderizado.
import { shallowMount, mount } from "@vue/test-utils";

// Components
import Counter from "@/components/Counter";

describe('Counter Component', () => {
    
    it('Match with the Snapshot', () => {
        const wrapper = shallowMount(Counter);
        expect(wrapper.html()).toMatchSnapshot();
    })
})