import React, { createContext, useContext, useState } from 'react';

export const EmailContext = createContext();

export const useEmail = () => {
  return useContext(EmailContext);
};

// Schimbă funcția useEmailValue pentru a include și funcția de setare a emailului
export const useEmailValue = () => useContext(EmailContext);

export const EmailProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  const setEmailValue = (newEmail) => {
    setEmail(newEmail);
  };

  return (
    <EmailContext.Provider value={{ email, setEmail: setEmailValue }}>
      {children}
    </EmailContext.Provider>
  );
};
