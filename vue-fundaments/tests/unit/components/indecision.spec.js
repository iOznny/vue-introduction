import { shallowMount } from "@vue/test-utils";

// Components
import Indecision from "@/components/Indecision";

describe('Indecision Component', () => {
    let wrapper;
    let clgSpy;

    // Mock of API
    global.fetch = jest.fn(() => Promise.resolve({
        json: () => Promise.resolve({
            answer: 'yes',
            forced: false,
            image: 'https://yesno.wtf/assets/yes/2.gif',
        })
    }))

    // Despues de cada test
    beforeEach(() => {
        wrapper = shallowMount(Indecision);

        clgSpy = jest.spyOn(console, 'log');
        jest.clearAllMocks();
    })

    /**
     * Testings
    */

    test('Match with the Snapshot', () => {
        expect(wrapper.html()).toMatchSnapshot();
    })

    test('Not trigger in input', async () => {
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

        const input = wrapper.find('input');
        await input.setValue('Hola mundo');

        expect(clgSpy).toHaveBeenCalled();
        expect(getAnswerSpy).toHaveReturnedTimes(0);
    })

    test('If includes (?) launch getAnswer', async () => {        
        const getAnswerSpy = jest.spyOn(wrapper.vm, 'getAnswer');

        const input = wrapper.find('input');
        await input.setValue('Hola mundo?');

        expect(clgSpy).toHaveBeenCalledTimes(1);
        expect(getAnswerSpy).toHaveBeenCalled();
    })

    test('Testing in getAnswer()', async () => {
        await wrapper.vm.getAnswer();
        const img = wrapper.find('img');

        expect(img.exists()).toBeTruthy();
        expect(wrapper.vm.imagen).toBe('https://yesno.wtf/assets/yes/2.gif');
        expect(wrapper.vm.answer).toBe('¡Si!');
    })

    test('Testing in getAnswer() - Failed in API', async () => {
        // Failed in API
        fetch.mockImplementationOnce(() => Promise.reject('API is down.'));
        await wrapper.vm.getAnswer();

        const img = wrapper.find('img');

        // Not exists
        expect(img.exists()).toBeFalsy();
        expect(wrapper.vm.answer).toBe('No se pudo cargar del API');
    })

});