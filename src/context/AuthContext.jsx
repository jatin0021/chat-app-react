import { createContext, useContext, useState, useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../Firebase"; // ✅ Import Firebase auth

// ✅ Create Context
const AuthContext = createContext();

// ✅ Create Provider
export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);

  // ✅ Listen for auth state changes (user login/logout)
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setCurrentUser(user);
    });
    return () => unsubscribe(); // Cleanup
  }, []);

  return (
    <AuthContext.Provider value={{ currentUser, setCurrentUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// ✅ Custom Hook to Use AuthContext
export const useAuth = () => useContext(AuthContext);
