import React from "react";
import GeneralContext from "./GeneralContext";

const GeneralContextProvider = ({ children }) => {
  const values = {};
  return (
    <GeneralContext.Provider value={values}>{children}</GeneralContext.Provider>
  );
};

export default GeneralContextProvider;
