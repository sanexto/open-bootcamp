import { useState } from 'react';

const useLocalStorage = (key, defaultValue = null) => {
  const [value, set] = useState(localStorage.getItem(key) ?? defaultValue);

  const setValue = (newValue) => {
    localStorage.setItem(key, newValue);
    set(localStorage.getItem(key));
  };

  return [value, setValue];
};

export default useLocalStorage;
