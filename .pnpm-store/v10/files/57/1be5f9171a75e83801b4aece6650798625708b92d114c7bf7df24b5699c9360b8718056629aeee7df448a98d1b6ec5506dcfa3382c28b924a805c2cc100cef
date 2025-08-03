'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import React from 'react';
import { ChevronIcon } from '../../../icons/Chevron/index.js';
import { useLocale } from '../../../providers/Locale/index.js';
import { useTranslation } from '../../../providers/Translation/index.js';
import './index.scss';
const baseClass = 'localizer-button';
export const LocalizerLabel = props => {
  const $ = _c(12);
  const {
    ariaLabel,
    className
  } = props;
  const locale = useLocale();
  const {
    i18n,
    t
  } = useTranslation();
  let t0;
  if ($[0] !== ariaLabel || $[1] !== t) {
    t0 = ariaLabel || t("general:locale");
    $[0] = ariaLabel;
    $[1] = t;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = [baseClass, className].filter(Boolean);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  const t2 = t1.join(" ");
  const t3 = locale ? locale.code : undefined;
  const t4 = `${t("general:locale")}:`;
  let t5;
  if ($[5] !== i18n || $[6] !== locale.label || $[7] !== t0 || $[8] !== t2 || $[9] !== t3 || $[10] !== t4) {
    t5 = _jsxs("div", {
      "aria-label": t0,
      className: t2,
      "data-locale": t3,
      children: [_jsxs("div", {
        className: `${baseClass}__label`,
        children: [t4, "\xA0"]
      }), _jsxs("div", {
        className: `${baseClass}__current`,
        children: [_jsx("span", {
          className: `${baseClass}__current-label`,
          children: `${getTranslation(locale.label, i18n)}`
        }), _jsx(ChevronIcon, {
          className: `${baseClass}__chevron`
        })]
      })]
    });
    $[5] = i18n;
    $[6] = locale.label;
    $[7] = t0;
    $[8] = t2;
    $[9] = t3;
    $[10] = t4;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  return t5;
};
//# sourceMappingURL=index.js.map