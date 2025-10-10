import { describe, it, expect } from 'vitest';

import { mount } from '@vue/test-utils';
import Content from '../DropDownButtonContent.vue';

describe('Content', () => {
  it('renders properly', () => {
    const wrapper = mount(Content);
    expect(wrapper.text()).toContain('Sandra Johnson');
  });
});
