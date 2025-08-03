'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { usePathname, useRouter } from 'next/navigation.js';
import React, { createContext, use, useCallback, useEffect } from 'react';
const Context = /*#__PURE__*/createContext({
  cachingEnabled: true,
  clearRouteCache: () => {}
});
export const RouteCache = t0 => {
  const $ = _c(13);
  const {
    cachingEnabled: t1,
    children
  } = t0;
  const cachingEnabled = t1 === undefined ? true : t1;
  const pathname = usePathname();
  const router = useRouter();
  let t2;
  if ($[0] !== router) {
    t2 = () => {
      router.refresh();
    };
    $[0] = router;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const clearRouteCache = t2;
  let t3;
  if ($[2] !== cachingEnabled || $[3] !== clearRouteCache) {
    t3 = () => {
      if (cachingEnabled) {
        clearRouteCache();
      }
    };
    $[2] = cachingEnabled;
    $[3] = clearRouteCache;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== cachingEnabled || $[6] !== clearRouteCache || $[7] !== pathname) {
    t4 = [pathname, clearRouteCache, cachingEnabled];
    $[5] = cachingEnabled;
    $[6] = clearRouteCache;
    $[7] = pathname;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  useEffect(t3, t4);
  let t5;
  if ($[9] !== cachingEnabled || $[10] !== children || $[11] !== clearRouteCache) {
    t5 = _jsx(Context, {
      value: {
        cachingEnabled,
        clearRouteCache
      },
      children
    });
    $[9] = cachingEnabled;
    $[10] = children;
    $[11] = clearRouteCache;
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  return t5;
};
export const useRouteCache = () => use(Context);
//# sourceMappingURL=index.js.map