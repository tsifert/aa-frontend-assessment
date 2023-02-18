import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import ErrorMessage from '../components/ErrorMessage/ErrorMessage';

describe('ErrorMessage', () => {

    render(
        <ErrorMessage message="This is a test" />
    );

    test('should display same text passed to message prop', () => {
        expect(
            screen.getByRole('heading', {
                name: /this is a test/i
            })
        ).toBeInTheDocument();
    });

});

