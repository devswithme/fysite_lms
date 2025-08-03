'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { useConfig } from '../../../../../providers/Config/index.js';
import { useTranslation } from '../../../../../providers/Translation/index.js';
import { formatDate } from '../../../../../utilities/formatDocTitle/formatDateTitle.js';
export const DateCell = t0 => {
  const $ = _c(8);
  const {
    cellData,
    field: t1
  } = t0;
  const {
    admin: t2
  } = t1;
  let t3;
  if ($[0] !== t2) {
    t3 = t2 === undefined ? {} : t2;
    $[0] = t2;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  const {
    date
  } = t3;
  const {
    config: t4
  } = useConfig();
  const {
    admin: t5
  } = t4;
  const {
    dateFormat: dateFormatFromRoot
  } = t5;
  const dateFormat = date?.displayFormat || dateFormatFromRoot;
  const {
    i18n
  } = useTranslation();
  let t6;
  if ($[2] !== cellData || $[3] !== dateFormat || $[4] !== i18n) {
    t6 = cellData && formatDate({
      date: cellData,
      i18n,
      pattern: dateFormat
    });
    $[2] = cellData;
    $[3] = dateFormat;
    $[4] = i18n;
    $[5] = t6;
  } else {
    t6 = $[5];
  }
  let t7;
  if ($[6] !== t6) {
    t7 = _jsx("span", {
      children: t6
    });
    $[6] = t6;
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  return t7;
};
//# sourceMappingURL=index.js.map