import React, { useState, useEffect } from 'react';
import cookie from 'react-cookies';
import jwt_decode from 'jwt-decode';
import axios from 'axios';

export const AuthContext = React.createContext();

function AuthProvider({ children }) {

  let [error, setError] = useState(null);
  let [isLoggedIn, setIsLoggedIn] = useState(false);
  let [user, setUser] = useState({});

  const can = (capability) => {
    return user?.capabilities?.includes(capability); 
  }

  const login = async (username, password) => {

    const config = {
      baseURL: 'https://api-js401.herokuapp.com',
      url: '/signin',
      method: 'post',
      auth: {
        username,
        password,
      }
    }

    const response = await axios(config);
    const { token } = response.data;
    // console.log('response', response.data);

    if (token) {
      try {
        _validateToken(token);
        // console.log('I am Here', {isLoggedIn, user});
      } catch (e) {
        console.error(e);
      }
    }
  }

  const _validateToken = (token) => {
    try {
      let validUser = jwt_decode(token);
      // console.log({validUser})
      if (validUser) {
        setUser(validUser);
        // console.log({inside: {validUser}})
        // console.log({user})
        setIsLoggedIn(true);
        // console.log('isLoggedIn:', isLoggedIn);
        // cookie.save('auth', token);
      }
    } catch (e) {
      setIsLoggedIn(false);
      setError(e);
    }
  }

  const logout = () => {
    setUser({});
    setIsLoggedIn(false);
    setError(null);
    cookie.remove('auth');
  }

  useEffect(() => {
    let token = cookie.load('auth');
    if(token){
      _validateToken(token)
    }
  }, [])


  const values = {
    error,
    isLoggedIn,
    user,
    can,
    login,
    logout,
  }

  return (
    <AuthContext.Provider value={values}>
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider;
