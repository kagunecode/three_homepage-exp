import { createContext, useContext, useState } from "react";

const NavigationContext = createContext(null);

export default function NavigationContextProvider({ children }) {
  const [status, setStatus] = useState(false);

  return (
    <NavigationContext.Provider value={{ status, setStatus }}>
      {children}
    </NavigationContext.Provider>
  );
}

export function useNavigationContext() {
  const context = useContext(NavigationContext);
  if (!context) {
    throw new Error(
      "This element has no access to this context. Please, import and wrap your elements on a NavigationContextProvider to use the context."
    );
  }
  return context;
}
