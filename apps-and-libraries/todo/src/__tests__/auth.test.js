import '@testing-library/jest-dom';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import AuthProvider, { AuthContext } from '../Context/Auth';
import Login from '../Components/Login';
import Auth from '../Components/Auth';

// src/setupTests.js
import { server } from '../mocks/server.js'
// Establish API mocking before all tests.
beforeAll(() => server.listen())

// Reset any request handlers that we may add during the tests,
// so they don't affect other tests.
afterEach(() => server.resetHandlers())

// Clean up after the tests are finished.
afterAll(() => server.close())

test('Should contain user and isloggedIn initial values', async() => {

  render(
    <AuthProvider>
      <AuthContext.Consumer>
        {auth => (
          <>
            <p data-testid="isLoggedIn">{auth.isLoggedIn.toString()}</p>
            <p data-testid="user">{typeof auth.user}</p>
          </>
        )}
      </AuthContext.Consumer>
    </AuthProvider>
  )

  expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('false');
  expect(screen.getByTestId('user')).toHaveTextContent('object');
});

test('Login component should be able to login and logout', async () => {

  render(
    <AuthProvider>
      <AuthContext.Consumer>
        {auth =>
          <>
            <Login />
            <p data-testid="isLoggedIn">{auth.isLoggedIn.toString()}</p>
            <p data-testid="capabilities">{`${auth.user.capabilities}`}</p>
          </>
        }
      </AuthContext.Consumer>
    </AuthProvider>
  )

  const usernameInput = screen.getByPlaceholderText('Username');
  const passwordInput = screen.getByPlaceholderText('Password');
  const loginButton = screen.getByText('Login');

  // mocking an event:  change of input
  fireEvent.change(usernameInput, { target: { value: 'admin' } });
  fireEvent.change(passwordInput, { target: { value: 'ADMIN' } });
  fireEvent.click(loginButton);

  await waitFor(() => {
    expect(screen.getByTestId('isLoggedIn')).toHaveTextContent('true');
  });
  await waitFor(() => {
    expect(screen.getByTestId('capabilities')).toHaveTextContent('create,update,read,delete');
  })

  const logoutButton = screen.getByText('Log Out');
  fireEvent.click(logoutButton);

  await waitFor(() => {
    expect(screen.getByTestId('isLoggedIn')).toHaveTextContent(false)
  });
});

test('Auth component should be able to render when logged in', async () => {
  render(
    <AuthProvider>
      <AuthContext.Consumer>
        {auth => (
          <>
            <Login />
            <Auth capability="read">
              <p data-testid="test-read">I am Authorized!!</p>
            </Auth>
            <Auth capability="delete">
              <p data-testid="test-delete">I am Authorized!!</p>
            </Auth>
          </>
        )}
      </AuthContext.Consumer>

    </AuthProvider>
  );

  let userInput = screen.getByPlaceholderText('Username');
  let passInput = screen.getByPlaceholderText('Password');

  fireEvent.change(userInput, { target: { value: 'admin' } });
  fireEvent.change(passInput, { target: { value: 'ADMIN' } });
  fireEvent.click(screen.getByText('Login'));

  let authorized;
  await waitFor(() => {
    authorized =  screen.getByTestId('test-read');
  });

  // notice if not expected to exist we use different method.  aka there is nothing to "get"
  let alsoAuthorized =  screen.queryByTestId('test-delete');

  await waitFor(() => {
    expect(authorized).toHaveTextContent('I am Authorized!!');
  });
  await waitFor(() => {
    expect(alsoAuthorized).toBeInTheDocument();
  });
});
