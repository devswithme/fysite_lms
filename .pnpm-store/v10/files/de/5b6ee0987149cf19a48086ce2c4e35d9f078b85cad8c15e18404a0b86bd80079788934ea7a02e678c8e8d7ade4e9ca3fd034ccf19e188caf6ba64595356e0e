'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Pill, useTranslation } from '@payloadcms/ui';
import React from 'react';
import { VersionPillLabel } from '../../../Version/VersionPillLabel/VersionPillLabel.js';
const baseClass = 'autosave-cell';
export const AutosaveCell = t0 => {
  const $ = _c(8);
  const {
    currentlyPublishedVersion,
    latestDraftVersion,
    rowData
  } = t0;
  const {
    t
  } = useTranslation();
  let t1;
  if ($[0] !== rowData?.autosave || $[1] !== t) {
    t1 = rowData?.autosave && _jsx(Pill, {
      size: "small",
      children: t("version:autosave")
    });
    $[0] = rowData?.autosave;
    $[1] = t;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  if ($[3] !== currentlyPublishedVersion || $[4] !== latestDraftVersion || $[5] !== rowData || $[6] !== t1) {
    t2 = _jsxs("div", {
      className: `${baseClass}__items`,
      children: [t1, _jsx(VersionPillLabel, {
        currentlyPublishedVersion,
        disableDate: true,
        doc: rowData,
        labelFirst: false,
        labelStyle: "pill",
        latestDraftVersion
      })]
    });
    $[3] = currentlyPublishedVersion;
    $[4] = latestDraftVersion;
    $[5] = rowData;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
};
//# sourceMappingURL=index.js.map