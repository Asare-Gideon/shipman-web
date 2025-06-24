import { useLayoutEffect, useState } from "react";

export function useReSize() {
  const [size, setSize] = useState([
    typeof window !== "undefined" ? window.innerWidth : 0,
    typeof window !== "undefined" ? window.innerHeight : 0,
  ]);
  useLayoutEffect(() => {
    function updateSize() {
      setSize([
        typeof window !== "undefined" ? window.innerWidth : 0,
        typeof window !== "undefined" ? window.innerHeight : 0,
      ]);
    }
    window.addEventListener("resize", updateSize);
    updateSize();
    return () => window.removeEventListener("resize", updateSize);
  }, []);
  return size;
}
