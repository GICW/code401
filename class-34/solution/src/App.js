import { useContext } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './Components/Header/Header';
import ToDo from './Components/ToDo/ToDo';
import SettingsForm from './Components/SettingsForm/SettingsForm';
import { AuthContext } from './Context/Auth/Auth';
import { When } from 'react-if';
import Footer from './Components/Footer/Footer';

const App = () => {
  const { isLoggedIn } = useContext(AuthContext)

  return (
    <BrowserRouter>
      <Header />
      <When condition={isLoggedIn}>
        <Routes>
          <Route path="/" element={<ToDo />} />
          <Route path='/settings' element={<SettingsForm />} />
        </Routes>
      </When>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
