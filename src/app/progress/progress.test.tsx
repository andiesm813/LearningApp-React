import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Progress from './progress';
import 'element-internals-polyfill';

test('renders Progress component', () => {
  const wrapper = render(<Progress />);
  expect(wrapper).toBeTruthy();
});