'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { formatAdminURL } from 'payload/shared';
import { useConfig } from '../../providers/Config/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { Button } from '../Button/index.js';
import './index.scss';
const baseClass = 'list-pills';
export function ByFolderPill(t0) {
  const $ = _c(10);
  const {
    collectionConfig,
    folderCollectionSlug,
    viewType
  } = t0;
  const {
    t
  } = useTranslation();
  const {
    config
  } = useConfig();
  if (!folderCollectionSlug) {
    return null;
  }
  const t1 = viewType === "folders" && `${baseClass}__button--active`;
  let t2;
  if ($[0] !== t1) {
    t2 = [`${baseClass}__button`, t1].filter(Boolean);
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const t3 = t2.join(" ");
  const t4 = viewType === "folders";
  const t5 = viewType === "list" || viewType === "trash" ? "link" : "div";
  const t6 = `/collections/${collectionConfig.slug}/${folderCollectionSlug}`;
  let t7;
  if ($[2] !== config.routes.admin || $[3] !== config.serverURL || $[4] !== t || $[5] !== t3 || $[6] !== t4 || $[7] !== t5 || $[8] !== t6) {
    t7 = _jsx("div", {
      className: baseClass,
      children: _jsx(Button, {
        buttonStyle: "tab",
        className: t3,
        disabled: t4,
        el: t5,
        to: formatAdminURL({
          adminRoute: config.routes.admin,
          path: t6,
          serverURL: config.serverURL
        }),
        children: t("folder:byFolder")
      })
    });
    $[2] = config.routes.admin;
    $[3] = config.serverURL;
    $[4] = t;
    $[5] = t3;
    $[6] = t4;
    $[7] = t5;
    $[8] = t6;
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  return t7;
}
//# sourceMappingURL=ByFolderPill.js.map