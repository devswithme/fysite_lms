'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { useConfig, useModal, useRouteTransition, useTranslation } from '@payloadcms/ui';
import { formatDate } from '@payloadcms/ui/shared';
import { usePathname, useRouter, useSearchParams } from 'next/navigation.js';
export const VersionDrawerCreatedAtCell = t0 => {
  const $ = _c(14);
  const {
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
    admin: t4
  } = t3;
  const {
    dateFormat
  } = t4;
  const {
    closeAllModals
  } = useModal();
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const {
    startRouteTransition
  } = useRouteTransition();
  const {
    i18n
  } = useTranslation();
  let t5;
  if ($[2] !== closeAllModals || $[3] !== id || $[4] !== pathname || $[5] !== router || $[6] !== searchParams || $[7] !== startRouteTransition) {
    t5 = () => {
      closeAllModals();
      const current = new URLSearchParams(Array.from(searchParams.entries()));
      if (id) {
        current.set("versionFrom", String(id));
      }
      const search = current.toString();
      const query = search ? `?${search}` : "";
      startRouteTransition(() => router.push(`${pathname}${query}`));
    };
    $[2] = closeAllModals;
    $[3] = id;
    $[4] = pathname;
    $[5] = router;
    $[6] = searchParams;
    $[7] = startRouteTransition;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== dateFormat || $[10] !== i18n || $[11] !== t5 || $[12] !== updatedAt) {
    t6 = _jsx("button", {
      className: "created-at-cell",
      onClick: t5,
      type: "button",
      children: formatDate({
        date: updatedAt,
        i18n,
        pattern: dateFormat
      })
    });
    $[9] = dateFormat;
    $[10] = i18n;
    $[11] = t5;
    $[12] = updatedAt;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  return t6;
};
//# sourceMappingURL=CreatedAtCell.js.map