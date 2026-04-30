import { createContext, useContext, useEffect, useMemo, useState } from 'react';

const USERS_KEY = 'clothery_users';
const CURRENT_USER_KEY = 'clothery_current_user';
const PENDING_PURCHASE_KEY = 'clothery_pending_purchase';

const AuthContext = createContext(null);

function readStorage(key, fallbackValue) {
  if (typeof window === 'undefined') {
    return fallbackValue;
  }

  const rawValue = window.localStorage.getItem(key);

  if (!rawValue) {
    return fallbackValue;
  }

  try {
    return JSON.parse(rawValue);
  } catch {
    return fallbackValue;
  }
}

function writeStorage(key, value) {
  window.localStorage.setItem(key, JSON.stringify(value));
}

export function AuthProvider({ children }) {
  const [users, setUsers] = useState(() => readStorage(USERS_KEY, []));
  const [currentUser, setCurrentUser] = useState(() => readStorage(CURRENT_USER_KEY, null));
  const [pendingPurchase, setPendingPurchase] = useState(() => readStorage(PENDING_PURCHASE_KEY, null));

  useEffect(() => {
    writeStorage(USERS_KEY, users);
  }, [users]);

  useEffect(() => {
    if (currentUser) {
      writeStorage(CURRENT_USER_KEY, currentUser);
      return;
    }

    window.localStorage.removeItem(CURRENT_USER_KEY);
  }, [currentUser]);

  useEffect(() => {
    if (pendingPurchase) {
      writeStorage(PENDING_PURCHASE_KEY, pendingPurchase);
      return;
    }

    window.localStorage.removeItem(PENDING_PURCHASE_KEY);
  }, [pendingPurchase]);

  const registerUser = ({ firstName, lastName, email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();
    const userExists = users.some(user => user.email === normalizedEmail);

    if (userExists) {
      return {
        success: false,
        message: 'Користувач з таким email вже існує.',
      };
    }

    const newUser = {
      id: Date.now(),
      firstName: firstName.trim(),
      lastName: lastName.trim(),
      email: normalizedEmail,
      password,
      purchases: [],
    };

    const nextUsers = [...users, newUser];
    setUsers(nextUsers);
    setCurrentUser(newUser);

    return {
      success: true,
      message: 'Реєстрація успішна.',
    };
  };

  const loginUser = ({ email, password }) => {
    const normalizedEmail = email.trim().toLowerCase();
    const foundUser = users.find(
      user => user.email === normalizedEmail && user.password === password
    );

    if (!foundUser) {
      return {
        success: false,
        message: 'Невірний email або пароль.',
      };
    }

    setCurrentUser(foundUser);

    return {
      success: true,
      message: 'Вхід виконано.',
    };
  };

  const logoutUser = () => {
    setCurrentUser(null);
    setPendingPurchase(null);
  };

  const beginPurchase = product => {
    setPendingPurchase({
      ...product,
      startedAt: new Date().toISOString(),
    });
  };

  const completePurchase = () => {
    if (!currentUser || !pendingPurchase) {
      return false;
    }

    const purchaseRecord = {
      ...pendingPurchase,
      purchasedAt: new Date().toISOString(),
    };

    const nextUsers = users.map(user => {
      if (user.email !== currentUser.email) {
        return user;
      }

      return {
        ...user,
        purchases: [...(user.purchases || []), purchaseRecord],
      };
    });

    const updatedUser = nextUsers.find(user => user.email === currentUser.email) || null;

    setUsers(nextUsers);
    setCurrentUser(updatedUser);
    setPendingPurchase(null);

    return true;
  };

  const value = useMemo(
    () => ({
      currentUser,
      isAuthenticated: Boolean(currentUser),
      pendingPurchase,
      registerUser,
      loginUser,
      logoutUser,
      beginPurchase,
      completePurchase,
    }),
    [currentUser, pendingPurchase, users]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}

export function useAuth() {
  const context = useContext(AuthContext);

  if (!context) {
    throw new Error('useAuth must be used within AuthProvider');
  }

  return context;
}
