"use client";
import React, {
  createContext,
  useCallback,
  useEffect,
  useState,
  useContext,
} from "react";

const LiffContext = createContext({ liff: null, liffError: null });
export const useLiff = () => useContext(LiffContext);

export const LiffProvider = ({ children, liffId }) => {
  const [liff, setLiff] = useState(null);
  const [liffError, setLiffError] = useState(null);

  const initLiff = useCallback(async () => {
    try {
      const liffModule = await import("@line/liff");
      const liff = liffModule.default;
      await liff.init({ liffId });
      console.log("LIFF init succeeded.");
      setLiff(liff);
    } catch (error) {
      console.log("LIFF init failed.");
      setLiffError(error.toString());
    }
  }, [liffId]);

  // init Liff
  useEffect(() => {
    console.log("LIFF init start...");
    initLiff();
  }, [initLiff]);

  return (
    <LiffContext.Provider
      value={{
        liff,
        liffError,
      }}
    >
      {children}
    </LiffContext.Provider>
  );
};
