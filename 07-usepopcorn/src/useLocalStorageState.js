import { useState, useEffect } from "react";

export function useLocalStorageState(initialState, localStorageKey) {
  const [value, setValue] = useState(function () {
    const storageValue = JSON.parse(localStorage.getItem(localStorageKey));
    return storageValue ? storageValue : initialState;
  });

  useEffect(
    function () {
      localStorage.setItem(localStorageKey, JSON.stringify(value));
    },
    [value, localStorageKey]
  );

  return [value, setValue];
}
