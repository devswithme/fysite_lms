'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { ChevronIcon, FieldDiffLabel, useConfig, useTranslation } from '@payloadcms/ui';
import { fieldIsArrayType, fieldIsBlockType } from 'payload/shared';
import React, { useState } from 'react';
import { countChangedFields, countChangedFieldsInRows } from '../utilities/countChangedFields.js';
const baseClass = 'diff-collapser';
export const DiffCollapser = t0 => {
  const $ = _c(23);
  const {
    children,
    field,
    fields,
    hideGutter: t1,
    initCollapsed: t2,
    isIterable: t3,
    Label,
    locales,
    parentIsLocalized,
    valueFrom,
    valueTo
  } = t0;
  const hideGutter = t1 === undefined ? false : t1;
  const initCollapsed = t2 === undefined ? false : t2;
  const isIterable = t3 === undefined ? false : t3;
  const {
    t
  } = useTranslation();
  const [isCollapsed, setIsCollapsed] = useState(initCollapsed);
  const {
    config
  } = useConfig();
  let t4;
  if ($[0] !== Label || $[1] !== children || $[2] !== config || $[3] !== field || $[4] !== fields || $[5] !== hideGutter || $[6] !== isCollapsed || $[7] !== isIterable || $[8] !== locales || $[9] !== parentIsLocalized || $[10] !== t || $[11] !== valueFrom || $[12] !== valueTo) {
    let changeCount;
    if (isIterable) {
      if (!fieldIsArrayType(field) && !fieldIsBlockType(field)) {
        throw new Error("DiffCollapser: field must be an array or blocks field when isIterable is true");
      }
      let t5;
      if ($[14] !== valueFrom) {
        t5 = valueFrom ?? [];
        $[14] = valueFrom;
        $[15] = t5;
      } else {
        t5 = $[15];
      }
      const comparisonRows = t5;
      let t6;
      if ($[16] !== valueTo) {
        t6 = valueTo ?? [];
        $[16] = valueTo;
        $[17] = t6;
      } else {
        t6 = $[17];
      }
      const versionRows = t6;
      if (!Array.isArray(comparisonRows) || !Array.isArray(versionRows)) {
        throw new Error("DiffCollapser: comparison and version must be arrays when isIterable is true");
      }
      changeCount = countChangedFieldsInRows({
        comparisonRows,
        config,
        field,
        locales,
        parentIsLocalized,
        versionRows
      });
    } else {
      changeCount = countChangedFields({
        comparison: valueFrom,
        config,
        fields,
        locales,
        parentIsLocalized,
        version: valueTo
      });
    }
    const t5 = isCollapsed && `${baseClass}__content--is-collapsed`;
    const t6 = hideGutter && `${baseClass}__content--hide-gutter`;
    let t7;
    if ($[18] !== t5 || $[19] !== t6) {
      t7 = [`${baseClass}__content`, t5, t6].filter(Boolean);
      $[18] = t5;
      $[19] = t6;
      $[20] = t7;
    } else {
      t7 = $[20];
    }
    const contentClassNames = t7.join(" ");
    let t8;
    if ($[21] !== isCollapsed) {
      t8 = () => setIsCollapsed(!isCollapsed);
      $[21] = isCollapsed;
      $[22] = t8;
    } else {
      t8 = $[22];
    }
    t4 = _jsxs("div", {
      className: baseClass,
      children: [_jsxs(FieldDiffLabel, {
        children: [_jsxs("button", {
          "aria-label": isCollapsed ? "Expand" : "Collapse",
          className: `${baseClass}__toggle-button`,
          onClick: t8,
          type: "button",
          children: [_jsx("div", {
            className: `${baseClass}__label`,
            children: Label
          }), _jsx(ChevronIcon, {
            direction: isCollapsed ? "right" : "down",
            size: "small"
          })]
        }), changeCount > 0 && isCollapsed && _jsx("span", {
          className: `${baseClass}__field-change-count`,
          children: t("version:changedFieldsCount", {
            count: changeCount
          })
        })]
      }), _jsx("div", {
        className: contentClassNames,
        children
      })]
    });
    $[0] = Label;
    $[1] = children;
    $[2] = config;
    $[3] = field;
    $[4] = fields;
    $[5] = hideGutter;
    $[6] = isCollapsed;
    $[7] = isIterable;
    $[8] = locales;
    $[9] = parentIsLocalized;
    $[10] = t;
    $[11] = valueFrom;
    $[12] = valueTo;
    $[13] = t4;
  } else {
    t4 = $[13];
  }
  return t4;
};
//# sourceMappingURL=index.js.map