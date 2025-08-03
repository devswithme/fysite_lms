'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { Link, useConfig, useTranslation } from '@payloadcms/ui';
import { formatDate } from '@payloadcms/ui/shared';
import { formatAdminURL } from 'payload/shared';
import React from 'react';
export const CreatedAtCell = t0 => {
  const $ = _c(12);
  const {
    collectionSlug,
    docID,
    globalSlug,
    isTrashed,
    rowData: t1
  } = t0;
  let t2;
  if ($[0] !== t1) {
    t2 = t1 === undefined ? {} : t1;
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const {
    id,
    updatedAt
  } = t2;
  const {
    config: t3
  } = useConfig();
  const {
    admin: t4,
    routes: t5
  } = t3;
  const {
    dateFormat
  } = t4;
  const {
    admin: adminRoute
  } = t5;
  const {
    i18n
  } = useTranslation();
  const trashedDocPrefix = isTrashed ? "trash/" : "";
  let t6;
  if ($[2] !== adminRoute || $[3] !== collectionSlug || $[4] !== dateFormat || $[5] !== docID || $[6] !== globalSlug || $[7] !== i18n || $[8] !== id || $[9] !== trashedDocPrefix || $[10] !== updatedAt) {
    let to;
    if (collectionSlug) {
      to = formatAdminURL({
        adminRoute,
        path: `/collections/${collectionSlug}/${trashedDocPrefix}${docID}/versions/${id}`
      });
    }
    if (globalSlug) {
      to = formatAdminURL({
        adminRoute,
        path: `/globals/${globalSlug}/versions/${id}`
      });
    }
    t6 = _jsx(Link, {
      href: to,
      prefetch: false,
      children: formatDate({
        date: updatedAt,
        i18n,
        pattern: dateFormat
      })
    });
    $[2] = adminRoute;
    $[3] = collectionSlug;
    $[4] = dateFormat;
    $[5] = docID;
    $[6] = globalSlug;
    $[7] = i18n;
    $[8] = id;
    $[9] = trashedDocPrefix;
    $[10] = updatedAt;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  return t6;
};
//# sourceMappingURL=index.js.map