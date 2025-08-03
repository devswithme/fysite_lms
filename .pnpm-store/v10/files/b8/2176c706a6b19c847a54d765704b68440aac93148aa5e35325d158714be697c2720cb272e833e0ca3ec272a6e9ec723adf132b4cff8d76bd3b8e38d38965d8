'use client';

import { jsx as _jsx } from "react/jsx-runtime";
import { useModal } from '@faceless-ui/modal';
import { usePathname, useRouter } from 'next/navigation.js';
import { formatAdminURL } from 'payload/shared';
import * as qs from 'qs-esm';
import React, { createContext, use, useCallback, useEffect, useState } from 'react';
import { toast } from 'sonner';
import { stayLoggedInModalSlug } from '../../elements/StayLoggedIn/index.js';
import { useDebounce } from '../../hooks/useDebounce.js';
import { useEffectEvent } from '../../hooks/useEffectEvent.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { requests } from '../../utilities/api.js';
import { useConfig } from '../Config/index.js';
import { useRouteTransition } from '../RouteTransition/index.js';
const Context = /*#__PURE__*/createContext({});
const maxTimeoutTime = 2147483647;
export function AuthProvider({
  children,
  permissions: initialPermissions,
  user: initialUser
}) {
  const [user, setUserInMemory] = useState(initialUser);
  const [tokenInMemory, setTokenInMemory] = useState();
  const [tokenExpiration, setTokenExpiration] = useState();
  const pathname = usePathname();
  const router = useRouter();
  const {
    config
  } = useConfig();
  const {
    admin: {
      routes: {
        inactivity: logoutInactivityRoute
      },
      user: userSlug
    },
    routes: {
      admin: adminRoute,
      api: apiRoute
    },
    serverURL
  } = config;
  const [permissions, setPermissions] = useState(initialPermissions);
  const {
    i18n
  } = useTranslation();
  const {
    closeAllModals,
    openModal
  } = useModal();
  const [lastLocationChange, setLastLocationChange] = useState(0);
  const debouncedLocationChange = useDebounce(lastLocationChange, 10000);
  const refreshTokenTimeoutRef = React.useRef(null);
  const {
    startRouteTransition
  } = useRouteTransition();
  const id = user?.id;
  const redirectToInactivityRoute = useCallback(() => {
    startRouteTransition(() => router.replace(formatAdminURL({
      adminRoute,
      path: `${logoutInactivityRoute}${window.location.pathname.startsWith(adminRoute) ? `?redirect=${encodeURIComponent(window.location.pathname)}` : ''}`
    })));
    closeAllModals();
  }, [router, adminRoute, logoutInactivityRoute, closeAllModals, startRouteTransition]);
  const revokeTokenAndExpire = useCallback(() => {
    setTokenInMemory(undefined);
    setTokenExpiration(undefined);
    clearTimeout(refreshTokenTimeoutRef.current);
  }, []);
  const setNewUser = useCallback(userResponse => {
    if (userResponse?.user) {
      setUserInMemory(userResponse.user);
      setTokenInMemory(userResponse.token);
      setTokenExpiration(userResponse.exp);
    } else {
      setUserInMemory(null);
      revokeTokenAndExpire();
    }
  }, [revokeTokenAndExpire]);
  const refreshCookie = useCallback(forceRefresh => {
    const now = Math.round(new Date().getTime() / 1000);
    const remainingTime = (typeof tokenExpiration === 'number' ? tokenExpiration : 0) - now;
    if (forceRefresh || tokenExpiration && remainingTime < 120) {
      refreshTokenTimeoutRef.current = setTimeout(() => {
        async function refresh() {
          try {
            const request = await requests.post(`${serverURL}${apiRoute}/${userSlug}/refresh-token?refresh`, {
              headers: {
                'Accept-Language': i18n.language
              }
            });
            if (request.status === 200) {
              const json = await request.json();
              setNewUser(json);
            } else {
              setNewUser(null);
              redirectToInactivityRoute();
            }
          } catch (e) {
            toast.error(e.message);
          }
        }
        void refresh();
      }, 1000);
    }
    return () => {
      clearTimeout(refreshTokenTimeoutRef.current);
    };
  }, [apiRoute, i18n.language, redirectToInactivityRoute, serverURL, setNewUser, tokenExpiration, userSlug]);
  const refreshCookieAsync = useCallback(async skipSetUser => {
    try {
      const request_0 = await requests.post(`${serverURL}${apiRoute}/${userSlug}/refresh-token`, {
        headers: {
          'Accept-Language': i18n.language
        }
      });
      if (request_0.status === 200) {
        const json_0 = await request_0.json();
        if (!skipSetUser) {
          setNewUser(json_0);
        }
        return json_0.user;
      }
      setNewUser(null);
      redirectToInactivityRoute();
      return null;
    } catch (e_0) {
      toast.error(`Refreshing token failed: ${e_0.message}`);
      return null;
    }
  }, [apiRoute, i18n.language, redirectToInactivityRoute, serverURL, setNewUser, userSlug]);
  const logOut = useCallback(async () => {
    try {
      await requests.post(`${serverURL}${apiRoute}/${user.collection}/logout`);
      setNewUser(null);
      revokeTokenAndExpire();
      return true;
    } catch (e_1) {
      toast.error(`Logging out failed: ${e_1.message}`);
      return false;
    }
  }, [apiRoute, revokeTokenAndExpire, serverURL, setNewUser, user]);
  const refreshPermissions = useCallback(async ({
    locale
  } = {}) => {
    const params = qs.stringify({
      locale
    }, {
      addQueryPrefix: true
    });
    try {
      const request_1 = await requests.get(`${serverURL}${apiRoute}/access${params}`, {
        headers: {
          'Accept-Language': i18n.language
        }
      });
      if (request_1.status === 200) {
        const json_1 = await request_1.json();
        setPermissions(json_1);
      } else {
        throw new Error(`Fetching permissions failed with status code ${request_1.status}`);
      }
    } catch (e_2) {
      toast.error(`Refreshing permissions failed: ${e_2.message}`);
    }
  }, [serverURL, apiRoute, i18n]);
  const fetchFullUser = React.useCallback(async () => {
    try {
      const request_2 = await requests.get(`${serverURL}${apiRoute}/${userSlug}/me`, {
        credentials: 'include',
        headers: {
          'Accept-Language': i18n.language
        }
      });
      if (request_2.status === 200) {
        const json_2 = await request_2.json();
        const user_0 = null;
        setNewUser(json_2);
        return user_0;
      }
    } catch (e_3) {
      toast.error(`Fetching user failed: ${e_3.message}`);
    }
    return null;
  }, [serverURL, apiRoute, userSlug, i18n.language, setNewUser]);
  const fetchFullUserEvent = useEffectEvent(fetchFullUser);
  // On mount, get user and set
  useEffect(() => {
    void fetchFullUserEvent();
  }, []);
  const refreshCookieEvent = useEffectEvent(() => {
    if (id) {
      refreshCookie();
    }
  });
  // When location changes, refresh cookie
  useEffect(() => {
    refreshCookieEvent();
  }, [debouncedLocationChange]);
  useEffect(() => {
    setLastLocationChange(Date.now());
  }, [pathname]);
  useEffect(() => {
    let reminder;
    let forceLogOut;
    const now_0 = Math.round(new Date().getTime() / 1000);
    const remainingTime_0 = typeof tokenExpiration === 'number' ? tokenExpiration - now_0 : 0;
    const remindInTimeFromNow = Math.max(Math.min((remainingTime_0 - 60) * 1000, maxTimeoutTime), 0);
    const forceLogOutInTimeFromNow = Math.max(Math.min(remainingTime_0 * 1000, maxTimeoutTime), 0);
    if (!user) {
      clearTimeout(reminder);
      clearTimeout(forceLogOut);
      return;
    }
    if (remainingTime_0 > 0) {
      reminder = setTimeout(() => {
        openModal(stayLoggedInModalSlug);
      }, remindInTimeFromNow);
      forceLogOut = setTimeout(() => {
        setNewUser(null);
        redirectToInactivityRoute();
      }, forceLogOutInTimeFromNow);
    }
    return () => {
      if (reminder) {
        clearTimeout(reminder);
      }
      if (forceLogOut) {
        clearTimeout(forceLogOut);
      }
    };
  }, [tokenExpiration, openModal, i18n, setNewUser, user, redirectToInactivityRoute]);
  return /*#__PURE__*/_jsx(Context, {
    value: {
      fetchFullUser,
      logOut,
      permissions,
      refreshCookie,
      refreshCookieAsync,
      refreshPermissions,
      setPermissions,
      setUser: setNewUser,
      token: tokenInMemory,
      user
    },
    children: children
  });
}
export const useAuth = () => use(Context);
//# sourceMappingURL=index.js.map