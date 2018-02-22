import { shallow } from '@vue/test-utils';
import Home from '../../../app/components/pages/Home.vue';

describe('Home', () => {

  it('sets a greeting', () => {
    let wrapper = shallow(Home);
    expect(wrapper.vm.greeting).to.equal('hello world!')
  });

});
