// tests/Button.test.ts
import { render } from '@testing-library/svelte';
import Button from '../../src/components/Button.svelte';

test('renders the button with the correct label', () => {
  const { getByText } = render(Button, { props: { label: 'Submit' } });
  expect(getByText('Submit')).toBeInTheDocument();  //props가 잘 전달되는지 확인
});
