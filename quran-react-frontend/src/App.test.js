import { render, screen } from '@testing-library/react';
import Daily_Verse from './Daily_Verse';

test('renders learn react link', () => {
  render(<Daily_Verse />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
