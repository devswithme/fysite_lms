'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { useWatchForm } from '../../Form/context.js';
const RowLabel = /*#__PURE__*/React.createContext({
  data: {},
  path: '',
  rowNumber: undefined
});
export const RowLabelProvider = t0 => {
  const $ = _c(6);
  const {
    children,
    path,
    rowNumber
  } = t0;
  const {
    getDataByPath,
    getSiblingData
  } = useWatchForm();
  let t1;
  if ($[0] !== children || $[1] !== getDataByPath || $[2] !== getSiblingData || $[3] !== path || $[4] !== rowNumber) {
    const collapsibleData = getSiblingData(path);
    const arrayData = getDataByPath(path);
    const data = arrayData || collapsibleData;
    t1 = _jsx(RowLabel, {
      value: {
        data,
        path,
        rowNumber
      },
      children
    });
    $[0] = children;
    $[1] = getDataByPath;
    $[2] = getSiblingData;
    $[3] = path;
    $[4] = rowNumber;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  return t1;
};
export const useRowLabel = () => {
  return React.use(RowLabel);
};
//# sourceMappingURL=index.js.map