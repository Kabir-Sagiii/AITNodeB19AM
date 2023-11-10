import { createContext, useState } from "react";

export var authcontext = createContext();

const AuthcontextProvider = ({ children }) => {
  let [state, setState] = useState(null);

  return (
    <authcontext.Provider value={{ state, setState }}></authcontext.Provider>
  );
};
