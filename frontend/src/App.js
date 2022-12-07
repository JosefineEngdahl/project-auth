import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import { configureStore, combineReducers } from '@reduxjs/toolkit';

import Start from 'components/Start'
import Register from 'components/Register'
import Login from 'components/Login'
import Main from 'components/Main'
import Notfound from 'components/Notfound'


import user from "./reducers/user";
import thoughts from "./reducers/thoughts";

const reducer = combineReducers({
  user: user.reducer,
  thoughts: thoughts.reducer,
});

const store = configureStore({ reducer });


export const App = () => {
  return (
    <BrowserRouter>
    <Provider store={store}>
    <Routes>
      <Route path='/' element={<Start />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/main' element={<Main />} />
      <Route path='*' element={<Notfound />} /> 
    </Routes>
    </Provider>
    </BrowserRouter>
  );
}
