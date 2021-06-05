import React, { useState } from 'react';
import './App.css';
import ProductCard from './components/product-card/ProductCard';
import ToggleTheme from './components/toggle-theme/ToggleTheme';
import UserCard from './components/user-card/UserCard';

function App() {

  const [theme, setTheme] = useState('theme-light') 

  const handlerToggleTheme = (newTheme: string) => {
    setTheme(newTheme)
  }

  return (
    <div className="App">
      <ToggleTheme onToggle={handlerToggleTheme}/>
      <ProductCard theme={theme} />
      <UserCard theme={theme} />
    </div>
  );
}

export default App;
