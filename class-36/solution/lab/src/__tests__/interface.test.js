import { render, screen } from '@testing-library/react';
import store from '../store';
import { Provider } from 'react-redux';
import App from '../app';

describe('Interface', () => {
  test('As a user, I want a clean, easy to use user interface so that I can shop the online store with confidence.', () => {
    render(
      <Provider store={store}>
        <App />
      </Provider>
    );

    // finds a header element
    expect(screen.getByRole('banner')).toBeInTheDocument();

    // finds a footer element
    expect(screen.getByRole('contentinfo')).toBeInTheDocument();
  });
});
