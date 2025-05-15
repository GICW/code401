import React, { useState, useEffect } from 'react';

export const SettingsContext = React.createContext();

const SettingsProvider = ({ children }) => {
  const [showCompleted, setShowCompleted] = useState(false);
  const [pageItems, setPageItems] = useState(3);
  const [sort, setSort] = useState('difficulty');

  const saveLocally = () => {
    localStorage.setItem('todo', JSON.stringify({showCompleted, pageItems, sort}));
  }

  let values = {
    showCompleted,
    pageItems,
    sort,
    setShowCompleted,
    setPageItems,
    setSort,
    saveLocally,
  }

  useEffect(() => {
    const storage = JSON.parse(localStorage.getItem('todo'));
    if (storage) {
      setShowCompleted(storage.showCompleted);
      setPageItems(storage.pageItems);
      setSort(storage.sort);
    }
  }, [])

  return (
    <SettingsContext.Provider value={values}>
      {children}
    </SettingsContext.Provider>
  )
};

export default SettingsProvider;
