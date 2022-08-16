import { mount } from '@vue/test-utils';
import LabelAtom from '@/shared/components/atoms/label.atom.vue';

describe('Label should contain', () => {
  test('{{message}} passed by prop', () => {
    const wrapper = mount(LabelAtom, {
      props: {
        text: 'Hello World',
      },
    });

    expect(wrapper.text()).toContain('Hello World');
  });
});
