"use client";
import React, { useState } from 'react';

export const LanguageSwitcher = () => {
  const [currentLanguage, setCurrentLanguage] = useState('ua');

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'en' ? 'uk' : 'en';
    setCurrentLanguage(newLanguage);
  };

  return (
    <div>      
      <button className='py-[8px] px-[35px] scale-100 transition-all hover:scale-125 border-none' onClick={toggleLanguage}>{currentLanguage === 'en' ? 'EN' : 'UA'}</button>
    </div>
  );
};

