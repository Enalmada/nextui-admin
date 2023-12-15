// src/hooks/useIsomorphicLayoutEffect.ts
import {useEffect, useLayoutEffect} from "react";
var useIsomorphicLayoutEffect = typeof window !== "undefined" ? useLayoutEffect : useEffect;
export {
  useIsomorphicLayoutEffect
};
