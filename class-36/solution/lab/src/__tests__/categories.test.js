import { render, screen, fireEvent } from '@testing-library/react';
import store from '../store';
import { Provider } from 'react-redux';
import App from '../app';

describe('Categories', () => {
  test('As a user, I expect to see a list of available product categories in the store so that I can easily browse products.', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    expect(screen.getByTestId('categories')).toBeInTheDocument();
    expect(screen.getByText(/Electronics/)).toBeInTheDocument();
    expect(screen.getByText(/Food/)).toBeInTheDocument();
    expect(screen.getByText(/Clothing/)).toBeInTheDocument();
  });

  test('As a user, I want to choose a category and see a list of all available products matching that category.', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    const electronicsBtn = screen.getByText(/Electronics/);
    fireEvent.click(electronicsBtn);
    expect(screen.getByText(/TV/)).toBeInTheDocument();
    expect(screen.getByText(/Radio/)).toBeInTheDocument();
  })
});
