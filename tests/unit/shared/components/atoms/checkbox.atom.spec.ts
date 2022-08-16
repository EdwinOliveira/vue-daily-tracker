import { mount } from '@vue/test-utils';
import CheckboxAtom from '@/shared/components/atoms/checkbox.atom.vue';

describe('Checkbox should be able', () => {
  // test('to emit state {{ false }} of checkbox when clicked', () => {});
  test('have its background as rgb(122, 64, 246)', () => {
    const wrapper = mount(CheckboxAtom, {
      props: {
        state: true,
      },
    });

    expect(wrapper.find('.wrapper').attributes().style).toContain(
      'background-color: rgb(122, 64, 246);'
    );
  });

  test('have its background as rgb(44, 44, 44)', () => {
    const wrapper = mount(CheckboxAtom, {
      props: {
        state: false,
      },
    });

    expect(wrapper.find('.wrapper').attributes().style).toContain(
      'background-color: rgb(44, 44, 44);'
    );
  });
});
