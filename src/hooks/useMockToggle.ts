import { useEffect, useState } from "react";

export function useMockToggle() {
  const [useToken, setUseToken] = useState(true);

  useEffect(() => {
    const stored = localStorage.getItem("use_token");
    setUseToken(stored === "true");
  }, []);

  const toggle = () => {
    const newValue = !useToken;
    setUseToken(newValue);
    localStorage.setItem("use_token", String(newValue));
  };

  return { useToken, toggle };
}