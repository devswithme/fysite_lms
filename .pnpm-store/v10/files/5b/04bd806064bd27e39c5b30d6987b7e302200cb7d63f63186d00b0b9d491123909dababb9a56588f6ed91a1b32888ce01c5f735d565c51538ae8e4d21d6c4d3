'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { formatAdminURL } from 'payload/shared';
import { useConfig } from '../../providers/Config/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { Button } from '../Button/index.js';
import './index.scss';
const baseClass = 'list-pills';
export function DefaultListPill(t0) {
  const $ = _c(11);
  const {
    collectionConfig,
    viewType
  } = t0;
  const {
    i18n,
    t
  } = useTranslation();
  const {
    config
  } = useConfig();
  const buttonLabel = `${t("general:all")} ${getTranslation(collectionConfig?.labels?.plural, i18n)}`;
  let t1;
  if ($[0] !== buttonLabel || $[1] !== collectionConfig.labels?.plural || $[2] !== collectionConfig.slug || $[3] !== config.routes.admin || $[4] !== config.serverURL || $[5] !== i18n || $[6] !== t || $[7] !== viewType) {
    const buttonId = buttonLabel.toLowerCase().replace(/\s+/g, "-");
    const t2 = viewType === "list" && `${baseClass}__button--active`;
    let t3;
    if ($[9] !== t2) {
      t3 = [`${baseClass}__button`, t2].filter(Boolean);
      $[9] = t2;
      $[10] = t3;
    } else {
      t3 = $[10];
    }
    t1 = _jsx("div", {
      className: baseClass,
      children: _jsxs(Button, {
        buttonStyle: "tab",
        className: t3.join(" "),
        disabled: viewType === "list",
        el: viewType === "folders" || viewType === "trash" ? "link" : "div",
        id: buttonId,
        to: formatAdminURL({
          adminRoute: config.routes.admin,
          path: `/collections/${collectionConfig.slug}`,
          serverURL: config.serverURL
        }),
        children: [t("general:all"), " ", getTranslation(collectionConfig?.labels?.plural, i18n)]
      })
    });
    $[0] = buttonLabel;
    $[1] = collectionConfig.labels?.plural;
    $[2] = collectionConfig.slug;
    $[3] = config.routes.admin;
    $[4] = config.serverURL;
    $[5] = i18n;
    $[6] = t;
    $[7] = viewType;
    $[8] = t1;
  } else {
    t1 = $[8];
  }
  return t1;
}
//# sourceMappingURL=DefaultListPill.js.map