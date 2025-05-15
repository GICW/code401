import React, { useState } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import ToDo from './Components/ToDo/ToDo';
import SettingsForm from './Components/SettingsForm/SettingsForm';


const App = () => {

  return (
    <BrowserRouter>
      <Header />
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path='/settings' element={<SettingsForm />} />
        </Routes>
    </BrowserRouter>
  );
};

export default App;
