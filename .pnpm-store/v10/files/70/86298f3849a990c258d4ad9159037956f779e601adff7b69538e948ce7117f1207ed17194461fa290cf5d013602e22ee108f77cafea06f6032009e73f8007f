'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { useTranslation } from '@payloadcms/ui';
import React from 'react';
import { useSelectedLocales } from '../../../Default/SelectedLocalesContext.js';
import { DiffCollapser } from '../../DiffCollapser/index.js';
import { RenderVersionFieldsToDiff } from '../../RenderVersionFieldsToDiff.js';
const baseClass = 'group-diff';
export const Group = t0 => {
  const $ = _c(12);
  const {
    baseVersionField,
    comparisonValue: valueFrom,
    field,
    locale,
    parentIsLocalized,
    versionValue: valueTo
  } = t0;
  const {
    i18n
  } = useTranslation();
  const {
    selectedLocales
  } = useSelectedLocales();
  let t1;
  if ($[0] !== field || $[1] !== i18n || $[2] !== locale) {
    t1 = "label" in field && field.label && typeof field.label !== "function" && _jsxs("span", {
      children: [locale && _jsx("span", {
        className: `${baseClass}__locale-label`,
        children: locale
      }), getTranslation(field.label, i18n)]
    });
    $[0] = field;
    $[1] = i18n;
    $[2] = locale;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const t2 = parentIsLocalized || field.localized;
  let t3;
  if ($[4] !== baseVersionField.fields || $[5] !== field.fields || $[6] !== selectedLocales || $[7] !== t1 || $[8] !== t2 || $[9] !== valueFrom || $[10] !== valueTo) {
    t3 = _jsx("div", {
      className: baseClass,
      children: _jsx(DiffCollapser, {
        fields: field.fields,
        Label: t1,
        locales: selectedLocales,
        parentIsLocalized: t2,
        valueFrom,
        valueTo,
        children: _jsx(RenderVersionFieldsToDiff, {
          versionFields: baseVersionField.fields
        })
      })
    });
    $[4] = baseVersionField.fields;
    $[5] = field.fields;
    $[6] = selectedLocales;
    $[7] = t1;
    $[8] = t2;
    $[9] = valueFrom;
    $[10] = valueTo;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
};
//# sourceMappingURL=index.js.map