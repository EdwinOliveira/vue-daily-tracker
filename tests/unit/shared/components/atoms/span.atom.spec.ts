import { mount } from '@vue/test-utils';
import SpanAtom from '@/shared/components/atoms/span.atom.vue';

describe('Span should contain', () => {
  test('{{message}} passed by prop', () => {
    const wrapper = mount(SpanAtom, {
      props: {
        text: 'Hello World',
      },
    });

    expect(wrapper.text()).toContain('Hello World');
  });
});
