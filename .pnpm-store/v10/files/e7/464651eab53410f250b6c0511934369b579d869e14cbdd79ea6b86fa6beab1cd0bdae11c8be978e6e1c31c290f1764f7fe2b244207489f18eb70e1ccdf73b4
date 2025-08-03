'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { PeopleIcon } from '../../../icons/People/index.js';
import { XIcon } from '../../../icons/X/index.js';
import { useConfig } from '../../../providers/Config/index.js';
import { useTranslation } from '../../../providers/Translation/index.js';
import { Pill } from '../../Pill/index.js';
import './index.scss';
const baseClass = 'active-query-preset';
export function ActiveQueryPreset(t0) {
  const $ = _c(44);
  const {
    activePreset,
    openPresetListDrawer,
    resetPreset
  } = t0;
  const {
    i18n,
    t
  } = useTranslation();
  const {
    getEntityConfig
  } = useConfig();
  let t1;
  let t10;
  let t11;
  let t12;
  let t13;
  let t14;
  let t15;
  let t2;
  let t3;
  let t4;
  let t5;
  let t6;
  let t7;
  let t8;
  let t9;
  if ($[0] !== activePreset || $[1] !== getEntityConfig || $[2] !== i18n || $[3] !== openPresetListDrawer || $[4] !== t) {
    const presetsConfig = getEntityConfig({
      collectionSlug: "payload-query-presets"
    });
    t14 = _jsxs;
    t15 = Pill;
    const t16 = activePreset && `${baseClass}--active`;
    let t17;
    if ($[20] !== t16) {
      t17 = [baseClass, t16].filter(Boolean);
      $[20] = t16;
      $[21] = t17;
    } else {
      t17 = $[21];
    }
    t9 = t17.join(" ");
    t10 = "select-preset";
    if ($[22] !== openPresetListDrawer) {
      t11 = () => {
        openPresetListDrawer();
      };
      $[22] = openPresetListDrawer;
      $[23] = t11;
    } else {
      t11 = $[23];
    }
    t12 = activePreset ? "always-white" : "light";
    t13 = "small";
    if ($[24] !== activePreset?.isShared) {
      t8 = activePreset?.isShared && _jsx(PeopleIcon, {
        className: `${baseClass}__shared`
      });
      $[24] = activePreset?.isShared;
      $[25] = t8;
    } else {
      t8 = $[25];
    }
    t6 = _jsx;
    t7 = "div";
    t5 = `${baseClass}__label-text-max-width`;
    t3 = _jsx;
    t4 = "div";
    t1 = `${baseClass}__label-text`;
    t2 = activePreset?.title || t("general:selectLabel", {
      label: getTranslation(presetsConfig.labels.singular, i18n)
    });
    $[0] = activePreset;
    $[1] = getEntityConfig;
    $[2] = i18n;
    $[3] = openPresetListDrawer;
    $[4] = t;
    $[5] = t1;
    $[6] = t10;
    $[7] = t11;
    $[8] = t12;
    $[9] = t13;
    $[10] = t14;
    $[11] = t15;
    $[12] = t2;
    $[13] = t3;
    $[14] = t4;
    $[15] = t5;
    $[16] = t6;
    $[17] = t7;
    $[18] = t8;
    $[19] = t9;
  } else {
    t1 = $[5];
    t10 = $[6];
    t11 = $[7];
    t12 = $[8];
    t13 = $[9];
    t14 = $[10];
    t15 = $[11];
    t2 = $[12];
    t3 = $[13];
    t4 = $[14];
    t5 = $[15];
    t6 = $[16];
    t7 = $[17];
    t8 = $[18];
    t9 = $[19];
  }
  let t16;
  if ($[26] !== activePreset || $[27] !== resetPreset || $[28] !== t1 || $[29] !== t10 || $[30] !== t11 || $[31] !== t12 || $[32] !== t13 || $[33] !== t14 || $[34] !== t15 || $[35] !== t2 || $[36] !== t3 || $[37] !== t4 || $[38] !== t5 || $[39] !== t6 || $[40] !== t7 || $[41] !== t8 || $[42] !== t9) {
    t16 = t14(t15, {
      className: t9,
      id: t10,
      onClick: t11,
      pillStyle: t12,
      size: t13,
      children: [t8, t6(t7, {
        className: t5,
        children: t3(t4, {
          className: t1,
          children: t2
        })
      }), activePreset ? _jsx("div", {
        className: `${baseClass}__clear`,
        id: "clear-preset",
        onClick: async e => {
          e.stopPropagation();
          await resetPreset();
        },
        onKeyDown: async e_0 => {
          if (e_0.key === "Enter" || e_0.key === " ") {
            e_0.stopPropagation();
            await resetPreset();
          }
        },
        role: "button",
        tabIndex: 0,
        children: _jsx(XIcon, {})
      }) : null]
    });
    $[26] = activePreset;
    $[27] = resetPreset;
    $[28] = t1;
    $[29] = t10;
    $[30] = t11;
    $[31] = t12;
    $[32] = t13;
    $[33] = t14;
    $[34] = t15;
    $[35] = t2;
    $[36] = t3;
    $[37] = t4;
    $[38] = t5;
    $[39] = t6;
    $[40] = t7;
    $[41] = t8;
    $[42] = t9;
    $[43] = t16;
  } else {
    t16 = $[43];
  }
  return t16;
}
//# sourceMappingURL=index.js.map