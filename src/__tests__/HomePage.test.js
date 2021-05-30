import { render } from '@testing-library/react';
import Homepage from '../Components/Homepage';

it('check for text in blogs', () => {
    const { queryByTitle } = render(<Homepage />);
    const btn = queryByTitle('btn');
    expect(btn).toBeTruthy();
})