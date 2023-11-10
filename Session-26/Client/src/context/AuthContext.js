import { createContext, useState, useEffect } from "react";

export var authcontext = createContext();

const AuthcontextProvider = ({ children }) => {
  let [state, setState] = useState(null);
  useEffect(() => {
    setState(localStorage.getItem("token"));
  }, []);

  return (
    <authcontext.Provider value={{ state, setState }}>
      {children}
    </authcontext.Provider>
  );
};

export default AuthcontextProvider;
