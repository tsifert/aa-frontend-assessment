
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../features/store/store';


describe('React Testing Library', () => {

  test('rendered main element', () => {

    render(<Provider store={store}>
      <App />
    </Provider>);

    const mainElement = screen.getByTestId('main-check');
    expect(mainElement).toBeInTheDocument();
  });

});

