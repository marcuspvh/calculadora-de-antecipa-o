import React from 'react';
import './App.css';

import { ListCalculate } from './components/List';
import Register from './components/Register';
import { AuthProvider } from './context/AuthContext';

function App() {
 
  
  return (
    <AuthProvider>
    <div className="App">
  
      <Register />
   
      <ListCalculate />
   
    </div>
    </AuthProvider>
  );
}

export default App;
