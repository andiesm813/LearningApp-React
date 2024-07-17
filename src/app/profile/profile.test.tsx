import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Profile from './profile';
import 'element-internals-polyfill';

test('renders Profile component', () => {
  const wrapper = render(<Profile />);
  expect(wrapper).toBeTruthy();
});