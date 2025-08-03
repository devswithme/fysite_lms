'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { formatAdminURL } from 'payload/shared';
import { useConfig } from '../../providers/Config/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { Button } from '../Button/index.js';
export function TrashPill(t0) {
  const $ = _c(7);
  const {
    collectionConfig,
    viewType
  } = t0;
  const {
    t
  } = useTranslation();
  const {
    config
  } = useConfig();
  if (!collectionConfig.trash) {
    return null;
  }
  const t1 = viewType === "trash";
  const t2 = viewType === "list" || viewType === "folders" ? "link" : "div";
  const t3 = `/collections/${collectionConfig.slug}/trash`;
  let t4;
  if ($[0] !== config.routes.admin || $[1] !== config.serverURL || $[2] !== t || $[3] !== t1 || $[4] !== t2 || $[5] !== t3) {
    t4 = _jsx(Button, {
      buttonStyle: "tab",
      disabled: t1,
      el: t2,
      id: "trash-view-pill",
      to: formatAdminURL({
        adminRoute: config.routes.admin,
        path: t3,
        serverURL: config.serverURL
      }),
      children: t("general:trash")
    }, "trash-view-pill");
    $[0] = config.routes.admin;
    $[1] = config.serverURL;
    $[2] = t;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  return t4;
}
//# sourceMappingURL=TrashPill.js.map