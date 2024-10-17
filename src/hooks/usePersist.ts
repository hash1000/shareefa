import { useState, useEffect } from "react";

const usePersist = (
  key?: string
): [
  boolean | string | object | any,
  React.Dispatch<React.SetStateAction<boolean | string | object>>
] => {
  const [persist, setPersist] = useState<boolean | string | object>(
    JSON.parse(localStorage.getItem(key || "persist") || "false")
  );

  function setStorage() {
    localStorage.setItem(key || "persist", JSON.stringify(persist));
  }

  useEffect(() => {
    setStorage();
  }, [persist, key]);

  return [persist, setPersist];
};

export default usePersist;
