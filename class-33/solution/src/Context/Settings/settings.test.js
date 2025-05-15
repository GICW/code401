import '@testing-library/jest-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import SettingsProvider, { SettingsContext } from './';

describe('Settings Context', () => {
  test('provides initial state', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {({ showCompleted, pageItems, sort, }) => (
            <>
              <h1>SettingsProvider Initial State</h1>
              <ul>
                <li data-testid="completed">{showCompleted.toString()}</li>
                <li data-testid="pageItems">{pageItems}</li>
                <li data-testid="sort">{sort}</li>
              </ul>
            </>
          )}
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    const completedLi = screen.getByTestId('completed');
    const pageItemsLi = screen.getByTestId('pageItems');
    const sortLi = screen.getByTestId('sort');

    expect(completedLi).toHaveTextContent(false);
    expect(pageItemsLi).toHaveTextContent(3);
    expect(sortLi).toHaveTextContent('difficulty');
  });
  test('provides updated state', () => {
    render(
      <SettingsProvider>
        <SettingsContext.Consumer>
          {({ showCompleted, pageItems, sort, setShowCompleted, setPageItems, setSort }) => (
            <>
              <h1>SettingsProvider Initial State</h1>
              <ul>
                <li
                  onClick={() => setShowCompleted(true)}
                  data-testid="completed"
                >
                  {showCompleted.toString()}
                </li>
                <li
                  onClick={() => setPageItems(4)}
                  data-testid="pageItems"
                >
                  {pageItems}
                </li>
                <li
                  onClick={() => setSort('something different')}
                  data-testid="sort"
                >
                  {sort}
                </li>
              </ul>
            </>
          )}
        </SettingsContext.Consumer>
      </SettingsProvider>
    );

    const completedLi = screen.getByTestId('completed');
    const pageItemsLi = screen.getByTestId('pageItems');
    const sortLi = screen.getByTestId('sort');

    expect(completedLi).toHaveTextContent(false);
    expect(pageItemsLi).toHaveTextContent(3);
    expect(sortLi).toHaveTextContent('difficulty');

    fireEvent.click(completedLi);
    fireEvent.click(pageItemsLi);
    fireEvent.click(sortLi);

    expect(completedLi).toHaveTextContent(true);
    expect(pageItemsLi).toHaveTextContent(4);
    expect(sortLi).toHaveTextContent('something different');
  });
});
