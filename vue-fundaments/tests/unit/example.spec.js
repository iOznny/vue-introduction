// import { shallowMount } from '@vue/test-utils'
// import HelloWorld from '@/components/HelloWorld.vue'

// describe('HelloWorld.vue', () => {
//   it('renders props.msg when passed', () => {
//     const msg = 'new message'
//     const wrapper = shallowMount(HelloWorld, {
//       props: { msg }
//     })
//     expect(wrapper.text()).toMatch(msg)
//   })
// })

describe('Example Component', () => {

  test('Greater than 10', () => {
    // Arreglar
    let value = 5;

    // Estimulo
    value = value + 6;

    // Observar el resultado
    if (value > 10) {
      // good
    } else {
      throw `${ value } no es 10`
    }
  })

  test('Greater than 10 with Expect', () => {
    let value = 5;
    value = value + 6;

    expect(value).toBeGreaterThan(10);
  })

})