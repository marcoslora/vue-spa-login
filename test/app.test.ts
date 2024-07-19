import { shallowMount } from '@vue/test-utils';
import App from '../src/App.vue';
import router from '@/router';

describe('app', () => {
  it('should pass', () => {
    const wrapper = shallowMount(App, { global: { plugins: [router] } });
    const routerView = wrapper.findComponent({ name: 'RouterView' });
    expect(routerView.exists()).toBe(true);
  });
});
