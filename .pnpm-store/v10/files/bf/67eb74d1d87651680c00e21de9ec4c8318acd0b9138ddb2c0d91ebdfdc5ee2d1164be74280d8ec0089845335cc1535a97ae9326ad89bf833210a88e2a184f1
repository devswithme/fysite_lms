'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Button, LoadingOverlay, toast, useAuth, useRouteTransition, useTranslation } from '@payloadcms/ui';
import { useRouter } from 'next/navigation.js';
import { formatAdminURL } from 'payload/shared';
import React, { useEffect } from 'react';
const baseClass = 'logout';
export const LogoutClient = props => {
  const $ = _c(23);
  const {
    adminRoute,
    inactivity,
    redirect
  } = props;
  const {
    logOut,
    user
  } = useAuth();
  const {
    startRouteTransition
  } = useRouteTransition();
  const [isLoggedOut, setIsLoggedOut] = React.useState(!user);
  const logOutSuccessRef = React.useRef(false);
  let t0;
  if ($[0] !== adminRoute || $[1] !== inactivity || $[2] !== redirect) {
    t0 = () => formatAdminURL({
      adminRoute,
      path: `/login${inactivity && redirect && redirect.length > 0 ? `?redirect=${encodeURIComponent(redirect)}` : ""}`
    });
    $[0] = adminRoute;
    $[1] = inactivity;
    $[2] = redirect;
    $[3] = t0;
  } else {
    t0 = $[3];
  }
  const [loginRoute] = React.useState(t0);
  const {
    t
  } = useTranslation();
  const router = useRouter();
  let t1;
  if ($[4] !== inactivity || $[5] !== logOut || $[6] !== loginRoute || $[7] !== router || $[8] !== startRouteTransition || $[9] !== t) {
    t1 = async () => {
      const loggedOut = await logOut();
      setIsLoggedOut(loggedOut);
      if (!inactivity && loggedOut && !logOutSuccessRef.current) {
        toast.success(t("authentication:loggedOutSuccessfully"));
        logOutSuccessRef.current = true;
        startRouteTransition(() => router.push(loginRoute));
        return;
      }
    };
    $[4] = inactivity;
    $[5] = logOut;
    $[6] = loginRoute;
    $[7] = router;
    $[8] = startRouteTransition;
    $[9] = t;
    $[10] = t1;
  } else {
    t1 = $[10];
  }
  const handleLogOut = t1;
  let t2;
  let t3;
  if ($[11] !== handleLogOut || $[12] !== isLoggedOut || $[13] !== loginRoute || $[14] !== router || $[15] !== startRouteTransition) {
    t2 = () => {
      if (!isLoggedOut) {
        handleLogOut();
      } else {
        startRouteTransition(() => router.push(loginRoute));
      }
    };
    t3 = [handleLogOut, isLoggedOut, loginRoute, router, startRouteTransition];
    $[11] = handleLogOut;
    $[12] = isLoggedOut;
    $[13] = loginRoute;
    $[14] = router;
    $[15] = startRouteTransition;
    $[16] = t2;
    $[17] = t3;
  } else {
    t2 = $[16];
    t3 = $[17];
  }
  useEffect(t2, t3);
  if (isLoggedOut && inactivity) {
    let t4;
    if ($[18] !== loginRoute || $[19] !== t) {
      t4 = _jsxs("div", {
        className: `${baseClass}__wrap`,
        children: [_jsx("h2", {
          children: t("authentication:loggedOutInactivity")
        }), _jsx(Button, {
          buttonStyle: "secondary",
          el: "link",
          size: "large",
          url: loginRoute,
          children: t("authentication:logBackIn")
        })]
      });
      $[18] = loginRoute;
      $[19] = t;
      $[20] = t4;
    } else {
      t4 = $[20];
    }
    return t4;
  }
  let t4;
  if ($[21] !== t) {
    t4 = _jsx(LoadingOverlay, {
      animationDuration: "0ms",
      loadingText: t("authentication:loggingOut")
    });
    $[21] = t;
    $[22] = t4;
  } else {
    t4 = $[22];
  }
  return t4;
};
//# sourceMappingURL=LogoutClient.js.map