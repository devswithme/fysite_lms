'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import { FormSubmit } from '../../forms/Submit/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { Button } from '../Button/index.js';
import './index.scss';
const baseClass = 'drawer-action-header';
export const DrawerActionHeader = t0 => {
  const $ = _c(16);
  const {
    cancelLabel,
    className,
    onCancel,
    onSave,
    saveLabel,
    title
  } = t0;
  const {
    t
  } = useTranslation();
  let t1;
  if ($[0] !== className) {
    t1 = [baseClass, className].filter(Boolean);
    $[0] = className;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const t2 = t1.join(" ");
  let t3;
  if ($[2] !== cancelLabel || $[3] !== onCancel || $[4] !== onSave || $[5] !== saveLabel || $[6] !== t || $[7] !== t2 || $[8] !== title) {
    let t4;
    if ($[10] !== cancelLabel || $[11] !== t) {
      t4 = cancelLabel || t("general:cancel");
      $[10] = cancelLabel;
      $[11] = t;
      $[12] = t4;
    } else {
      t4 = $[12];
    }
    let t5;
    if ($[13] !== saveLabel || $[14] !== t) {
      t5 = saveLabel || t("general:applyChanges");
      $[13] = saveLabel;
      $[14] = t;
      $[15] = t5;
    } else {
      t5 = $[15];
    }
    t3 = _jsx("div", {
      className: t2,
      children: _jsxs("div", {
        className: `${baseClass}__content`,
        children: [_jsx("h1", {
          className: `${baseClass}__title`,
          children: title
        }), _jsxs("div", {
          className: `${baseClass}__actions`,
          children: [_jsx(Button, {
            "aria-label": t("general:cancel"),
            buttonStyle: "secondary",
            onClick: onCancel,
            children: t4
          }), _jsx(FormSubmit, {
            "aria-label": t("general:applyChanges"),
            onClick: onSave,
            children: t5
          })]
        })]
      })
    });
    $[2] = cancelLabel;
    $[3] = onCancel;
    $[4] = onSave;
    $[5] = saveLabel;
    $[6] = t;
    $[7] = t2;
    $[8] = title;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
};
//# sourceMappingURL=index.js.map