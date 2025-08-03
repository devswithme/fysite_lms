'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { BrowseByFolderButton, Link, NavGroup, useConfig, useTranslation } from '@payloadcms/ui';
import { EntityType } from '@payloadcms/ui/shared';
import { usePathname } from 'next/navigation.js';
import { formatAdminURL } from 'payload/shared';
import React, { Fragment } from 'react';
const baseClass = 'nav';
export const DefaultNavClient = t0 => {
  const $ = _c(21);
  const {
    groups,
    navPreferences
  } = t0;
  const pathname = usePathname();
  const {
    config: t1
  } = useConfig();
  const {
    admin: t2,
    folders,
    routes: t3
  } = t1;
  const {
    routes: t4
  } = t2;
  const {
    browseByFolder: foldersRoute
  } = t4;
  const {
    admin: adminRoute
  } = t3;
  const {
    i18n
  } = useTranslation();
  let t5;
  let t6;
  let t7;
  if ($[0] !== adminRoute || $[1] !== folders || $[2] !== foldersRoute || $[3] !== pathname) {
    const folderURL = formatAdminURL({
      adminRoute,
      path: foldersRoute
    });
    const viewingRootFolderView = pathname.startsWith(folderURL);
    t6 = _jsxs;
    t7 = Fragment;
    t5 = folders && folders.browseByFolder && _jsx(BrowseByFolderButton, {
      active: viewingRootFolderView
    });
    $[0] = adminRoute;
    $[1] = folders;
    $[2] = foldersRoute;
    $[3] = pathname;
    $[4] = t5;
    $[5] = t6;
    $[6] = t7;
  } else {
    t5 = $[4];
    t6 = $[5];
    t7 = $[6];
  }
  let t8;
  if ($[7] !== adminRoute || $[8] !== groups || $[9] !== i18n || $[10] !== navPreferences?.groups || $[11] !== pathname || $[12] !== t5 || $[13] !== t6 || $[14] !== t7) {
    let t9;
    if ($[16] !== adminRoute || $[17] !== i18n || $[18] !== navPreferences?.groups || $[19] !== pathname) {
      t9 = (t10, key) => {
        const {
          entities,
          label
        } = t10;
        return _jsx(NavGroup, {
          isOpen: navPreferences?.groups?.[label]?.open,
          label,
          children: entities.map((t11, i) => {
            const {
              slug,
              type,
              label: label_0
            } = t11;
            let href;
            let id;
            if (type === EntityType.collection) {
              href = formatAdminURL({
                adminRoute,
                path: `/collections/${slug}`
              });
              id = `nav-${slug}`;
            }
            if (type === EntityType.global) {
              href = formatAdminURL({
                adminRoute,
                path: `/globals/${slug}`
              });
              id = `nav-global-${slug}`;
            }
            const isActive = pathname.startsWith(href) && ["/", undefined].includes(pathname[href.length]);
            const Label = _jsxs(_Fragment, {
              children: [isActive && _jsx("div", {
                className: `${baseClass}__link-indicator`
              }), _jsx("span", {
                className: `${baseClass}__link-label`,
                children: getTranslation(label_0, i18n)
              })]
            });
            if (pathname === href) {
              return _jsx("div", {
                className: `${baseClass}__link`,
                id,
                children: Label
              }, i);
            }
            return _jsx(Link, {
              className: `${baseClass}__link`,
              href,
              id,
              prefetch: false,
              children: Label
            }, i);
          })
        }, key);
      };
      $[16] = adminRoute;
      $[17] = i18n;
      $[18] = navPreferences?.groups;
      $[19] = pathname;
      $[20] = t9;
    } else {
      t9 = $[20];
    }
    t8 = t6(t7, {
      children: [t5, groups.map(t9)]
    });
    $[7] = adminRoute;
    $[8] = groups;
    $[9] = i18n;
    $[10] = navPreferences?.groups;
    $[11] = pathname;
    $[12] = t5;
    $[13] = t6;
    $[14] = t7;
    $[15] = t8;
  } else {
    t8 = $[15];
  }
  return t8;
};
//# sourceMappingURL=index.client.js.map