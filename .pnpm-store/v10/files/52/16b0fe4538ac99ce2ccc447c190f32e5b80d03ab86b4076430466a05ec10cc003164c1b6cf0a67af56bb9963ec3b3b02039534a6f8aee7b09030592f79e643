'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { Button } from '@payloadcms/ui';
import { useParams, usePathname, useSearchParams } from 'next/navigation.js';
import { formatAdminURL } from 'payload/shared';
import React from 'react';
export const DocumentTabLink = t0 => {
  const $ = _c(19);
  const {
    adminRoute,
    ariaLabel,
    baseClass,
    children,
    href: hrefFromProps,
    isActive: isActiveFromProps,
    newTab
  } = t0;
  const pathname = usePathname();
  const params = useParams();
  const searchParams = useSearchParams();
  const locale = searchParams.get("locale");
  const [entityType, entitySlug, segmentThree, segmentFour] = params.segments || [];
  const isCollection = entityType === "collections";
  const t1 = `/${isCollection ? "collections" : "globals"}/${entitySlug}`;
  let t2;
  if ($[0] !== adminRoute || $[1] !== t1) {
    t2 = formatAdminURL({
      adminRoute,
      path: t1
    });
    $[0] = adminRoute;
    $[1] = t1;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let docPath = t2;
  if (isCollection) {
    if (segmentThree === "trash" && segmentFour) {
      docPath = docPath + `/trash/${segmentFour}`;
    } else {
      if (segmentThree) {
        docPath = docPath + `/${segmentThree}`;
      }
    }
  }
  const href = `${docPath}${hrefFromProps}`;
  const hrefWithLocale = `${href}${locale ? `?locale=${locale}` : ""}`;
  let t3;
  if ($[3] !== docPath || $[4] !== href || $[5] !== isActiveFromProps || $[6] !== pathname) {
    t3 = href === docPath && pathname === docPath || href !== docPath && pathname.startsWith(href) || isActiveFromProps;
    $[3] = docPath;
    $[4] = href;
    $[5] = isActiveFromProps;
    $[6] = pathname;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const isActive = t3;
  const t4 = isActive && `${baseClass}--active`;
  let t5;
  if ($[8] !== baseClass || $[9] !== t4) {
    t5 = [baseClass, t4].filter(Boolean);
    $[8] = baseClass;
    $[9] = t4;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  const t6 = t5.join(" ");
  const t7 = !isActive || href !== pathname ? "link" : "div";
  const t8 = !isActive || href !== pathname ? hrefWithLocale : undefined;
  let t9;
  if ($[11] !== ariaLabel || $[12] !== children || $[13] !== isActive || $[14] !== newTab || $[15] !== t6 || $[16] !== t7 || $[17] !== t8) {
    t9 = _jsx(Button, {
      "aria-label": ariaLabel,
      buttonStyle: "tab",
      className: t6,
      disabled: isActive,
      el: t7,
      margin: false,
      newTab,
      size: "medium",
      to: t8,
      children
    });
    $[11] = ariaLabel;
    $[12] = children;
    $[13] = isActive;
    $[14] = newTab;
    $[15] = t6;
    $[16] = t7;
    $[17] = t8;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  return t9;
};
//# sourceMappingURL=TabLink.js.map