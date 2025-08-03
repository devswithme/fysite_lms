/* eslint-disable perfectionist/sort-object-types  */ // Need to disable this rule because the order of the overloads is important
'use client';

import { jsx as _jsx } from "react/jsx-runtime";
import React, { createContext, use, useCallback, useEffect, useMemo, useRef, useState } from 'react';
const RootConfigContext = /*#__PURE__*/createContext(undefined);
function sanitizeClientConfig(unSanitizedConfig) {
  if (!unSanitizedConfig?.blocks?.length || unSanitizedConfig.blocksMap) {
    ;
    unSanitizedConfig.blocksMap = {};
    return unSanitizedConfig;
  }
  const sanitizedConfig = {
    ...unSanitizedConfig
  };
  sanitizedConfig.blocksMap = {};
  for (const block of unSanitizedConfig.blocks) {
    sanitizedConfig.blocksMap[block.slug] = block;
  }
  return sanitizedConfig;
}
export const ConfigProvider = ({
  children,
  config: configFromProps
}) => {
  const [config, setConfig] = useState(() => sanitizeClientConfig(configFromProps));
  const isFirstRenderRef = useRef(true);
  // Need to update local config state if config from props changes, for HMR.
  // That way, config changes will be updated in the UI immediately without needing a refresh.
  useEffect(() => {
    if (isFirstRenderRef.current) {
      isFirstRenderRef.current = false;
      return;
    }
    setConfig(sanitizeClientConfig(configFromProps));
  }, [configFromProps]);
  // Build lookup maps for collections and globals so we can do O(1) lookups by slug
  const {
    collectionsBySlug: collectionsBySlug_0,
    globalsBySlug: globalsBySlug_0
  } = useMemo(() => {
    const collectionsBySlug = {};
    const globalsBySlug = {};
    for (const collection of config.collections) {
      collectionsBySlug[collection.slug] = collection;
    }
    for (const global of config.globals) {
      globalsBySlug[global.slug] = global;
    }
    return {
      collectionsBySlug,
      globalsBySlug
    };
  }, [config]);
  const getEntityConfig = useCallback(args => {
    if ('collectionSlug' in args) {
      return collectionsBySlug_0[args.collectionSlug] ?? null;
    }
    if ('globalSlug' in args) {
      return globalsBySlug_0[args.globalSlug] ?? null;
    }
    return null;
  }, [collectionsBySlug_0, globalsBySlug_0]);
  const value = useMemo(() => ({
    config,
    getEntityConfig,
    setConfig
  }), [config, getEntityConfig]);
  return /*#__PURE__*/_jsx(RootConfigContext, {
    value: value,
    children: children
  });
};
export const useConfig = () => use(RootConfigContext);
//# sourceMappingURL=index.js.map