import React, { useState } from 'react';
import { DarkModeToggle } from 'react-dark-mode-toggle-2';

export default function Heading() {
  const [isDarkMode, setIsDarkMode] = useState(true);

  const bodyClass = document.body.classList;

  const handelToggle = () => {
    bodyClass.toggle('dark-theme');
  };

  handelToggle();
  return (
    <header>
      <h1>Note Keeper</h1>
      <DarkModeToggle
        className='theme-toggle'
        onChange={setIsDarkMode}
        isDarkMode={isDarkMode}
        size={70}
      />
    </header>
  );
}
