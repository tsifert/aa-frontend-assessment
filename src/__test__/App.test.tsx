import { render, screen, waitFor } from '@testing-library/react';
import '@testing-library/jest-dom'
import App from '../App';
import { Provider } from 'react-redux';
import { store } from '../features/store/store';

describe('Check top-level components load', () => {

  beforeEach(() => {
    render(<Provider store={store}>
      <App />
    </Provider>);
  });

  test('render Main', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('main-check')).toBeInTheDocument();
    });
  });

  test('render PhotoList', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('photoListMain-check')).toBeInTheDocument();
    });
  });

  test('render FilterTab', async () => {
    await waitFor(() => {
      expect(screen.getByTestId('filterTab-check')).toBeInTheDocument();
    });
  });

  test('render PhotoCard, check number', async () => {

    await waitFor(() => {
      const photoCards = screen.queryAllByTestId('photoCardMain-check');
      expect(photoCards.length).toBeGreaterThan(0);
    })

  });


});

