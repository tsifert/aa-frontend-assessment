import { fireEvent, render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import DeleteButton from '../components/DeleteButton/DeleteButton';

describe('DeleteButton', () => {

    const handleClick = jest.fn();

    render(
        <DeleteButton onClick={handleClick} />
    );

    test('calls onClick prop when clicked', () => {

        fireEvent.click(screen.getByText(/delete/i));
        expect(handleClick).toHaveBeenCalledTimes(1);
    });
});

