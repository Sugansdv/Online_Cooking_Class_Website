import React, { createContext, useState } from "react";

export const DropdownContext = createContext();

export const DropdownProvider = ({ children }) => {
  const [isProgramDropdownOpen, setIsProgramDropdownOpen] = useState(false);
  const [isCourseDropdownOpen, setIsCourseDropdownOpen] = useState(false);

  return (
    <DropdownContext.Provider
      value={{
        isProgramDropdownOpen,
        setIsProgramDropdownOpen,
        isCourseDropdownOpen,
        setIsCourseDropdownOpen,
      }}
    >
      {children}
    </DropdownContext.Provider>
  );
};
