import { expect, test, vi } from 'vitest';
import { render } from '@testing-library/react';
import Courses from './courses';
import 'element-internals-polyfill';

// Mock API response
const mockResponse = {
  json: () => new Promise((resolve) => resolve({}))
};
global.fetch = vi.fn().mockResolvedValue(mockResponse);


test('renders Courses component', () => {
  const wrapper = render(<Courses />);
  expect(wrapper).toBeTruthy();
});