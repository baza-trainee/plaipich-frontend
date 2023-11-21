"use client";
import React, { useState } from 'react';

export const LanguageSwitcher = ({lng}:{lng:string}) => {
  const [currentLanguage, setCurrentLanguage] = useState(lng);

  const toggleLanguage = () => {
    const newLanguage = currentLanguage === 'uk' ? 'en' : 'uk';
    setCurrentLanguage(newLanguage);
  };

  return (
    <div>      
      <button className='py-[8px] px-[35px] scale-100 transition-all hover:scale-125 border-none' onClick={toggleLanguage}>{currentLanguage === 'uk' ? 'EN' : 'UA'}</button>
    </div>
  );
};

