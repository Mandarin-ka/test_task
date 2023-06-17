import { useMemo } from "react";
import { getStoragedFlowers } from "../utils/localStorage";

export const useCounter = (): number => {
  return useMemo(() => {
    return getStoragedFlowers().length;
  }, []);
};
