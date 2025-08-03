'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import React from 'react';
import { useForm } from '../../forms/Form/context.js';
import { useEditDepth } from '../../providers/EditDepth/index.js';
import { useLocale } from '../../providers/Locale/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { generateFieldID } from '../../utilities/generateFieldID.js';
import './index.scss';
export const FieldLabel = props => {
  const $ = _c(25);
  const {
    as: t0,
    hideLocale: t1,
    htmlFor: htmlForFromProps,
    label,
    localized: t2,
    path,
    required: t3,
    unstyled: t4
  } = props;
  const ElementFromProps = t0 === undefined ? "label" : t0;
  const hideLocale = t1 === undefined ? false : t1;
  const localized = t2 === undefined ? false : t2;
  const required = t3 === undefined ? false : t3;
  const unstyled = t4 === undefined ? false : t4;
  const {
    uuid
  } = useForm();
  const editDepth = useEditDepth();
  let t5;
  if ($[0] !== editDepth || $[1] !== htmlForFromProps || $[2] !== path || $[3] !== uuid) {
    t5 = htmlForFromProps || generateFieldID(path, editDepth, uuid);
    $[0] = editDepth;
    $[1] = htmlForFromProps;
    $[2] = path;
    $[3] = uuid;
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  const htmlFor = t5;
  const {
    i18n
  } = useTranslation();
  const {
    code,
    label: localLabel
  } = useLocale();
  const Element = ElementFromProps === "label" ? htmlFor ? "label" : "span" : ElementFromProps || "span";
  if (label) {
    const t6 = `field-label${unstyled ? " unstyled" : ""}`;
    let t7;
    if ($[5] !== Element || $[6] !== code || $[7] !== hideLocale || $[8] !== htmlFor || $[9] !== i18n || $[10] !== label || $[11] !== localLabel || $[12] !== localized || $[13] !== required || $[14] !== t6 || $[15] !== unstyled) {
      let t8;
      if ($[17] !== required || $[18] !== unstyled) {
        t8 = required && !unstyled && _jsx("span", {
          className: "required",
          children: "*"
        });
        $[17] = required;
        $[18] = unstyled;
        $[19] = t8;
      } else {
        t8 = $[19];
      }
      let t9;
      if ($[20] !== code || $[21] !== hideLocale || $[22] !== localLabel || $[23] !== localized) {
        t9 = localized && !hideLocale && _jsxs("span", {
          className: "localized",
          children: ["\u2014 ", typeof localLabel === "string" ? localLabel : code]
        });
        $[20] = code;
        $[21] = hideLocale;
        $[22] = localLabel;
        $[23] = localized;
        $[24] = t9;
      } else {
        t9 = $[24];
      }
      t7 = _jsxs(Element, {
        className: t6,
        htmlFor,
        children: [getTranslation(label, i18n), t8, t9]
      });
      $[5] = Element;
      $[6] = code;
      $[7] = hideLocale;
      $[8] = htmlFor;
      $[9] = i18n;
      $[10] = label;
      $[11] = localLabel;
      $[12] = localized;
      $[13] = required;
      $[14] = t6;
      $[15] = unstyled;
      $[16] = t7;
    } else {
      t7 = $[16];
    }
    return t7;
  }
  return null;
};
//# sourceMappingURL=index.js.map