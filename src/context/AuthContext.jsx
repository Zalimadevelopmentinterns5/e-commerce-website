import { createContext, useContext, useState, useEffect } from "react";

const AuthContext = createContext();

// ---------------------------------------------------------------------------
// MOCK AUTH (frontend-only for now)
// Backend doesn't have /login /register endpoints yet (no role field, no JWT
// issuing). This fakes the same flow using localStorage so the UI/routing
// can be built and tested today.
//
// WHEN BACKEND IS READY, replace the body of `login` and `register` below
// with real fetch calls, e.g.:
//
//   const res = await fetch("http://localhost:5000/api/auth/login", {
//     method: "POST",
//     headers: { "Content-Type": "application/json" },
//     body: JSON.stringify({ email, password, role }),
//   });
//   const data = await res.json();
//   if (!res.ok) throw new Error(data.error || "Login failed");
//   setUser(data.user); // and store data.token too
//
// Everything else (ProtectedRoute, Login.jsx, Register.jsx) stays the same.
// ---------------------------------------------------------------------------

const USERS_KEY = "qk_mock_users";
const SESSION_KEY = "qk_mock_session";

function loadUsers() {
  try {
    return JSON.parse(localStorage.getItem(USERS_KEY)) || [];
  } catch {
    return [];
  }
}

function saveUsers(users) {
  localStorage.setItem(USERS_KEY, JSON.stringify(users));
}

export function AuthProvider({ children }) {
  const [user, setUser] = useState(() => {
    try {
      return JSON.parse(localStorage.getItem(SESSION_KEY)) || null;
    } catch {
      return null;
    }
  });

  useEffect(() => {
    if (user) {
      localStorage.setItem(SESSION_KEY, JSON.stringify(user));
    } else {
      localStorage.removeItem(SESSION_KEY);
    }
  }, [user]);

  function register({ username, email, password, role }) {
    const users = loadUsers();
    if (users.some((u) => u.email === email)) {
      throw new Error("An account with this email already exists.");
    }
    users.push({ username, email, password, role });
    saveUsers(users);

    const sessionUser = { username, email, role };
    setUser(sessionUser);
    return sessionUser;
  }

  function login({ email, password, role }) {
    const users = loadUsers();
    const found = users.find(
      (u) => u.email === email && u.password === password && u.role === role
    );
    if (!found) {
      throw new Error("Invalid email, password, or role.");
    }
    const sessionUser = {
      username: found.username,
      email: found.email,
      role: found.role,
    };
    setUser(sessionUser);
    return sessionUser;
  }

  function logout() {
    setUser(null);
  }

  return (
    <AuthContext.Provider value={{ user, register, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}