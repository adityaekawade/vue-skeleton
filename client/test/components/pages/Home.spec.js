/* Copyright 2017-2018, Frameshift Labs, Inc., All rights reserved. */
import { shallow } from '@vue/test-utils';
import Home from '../../../app/components/pages/Home.vue';

describe('Home', () => {

  it('shows a message telling the user to login first', () => {
    let wrapper = shallow(Home);
    expect(wrapper.vm.greeting).to.equal('hello world!')
  });

});
