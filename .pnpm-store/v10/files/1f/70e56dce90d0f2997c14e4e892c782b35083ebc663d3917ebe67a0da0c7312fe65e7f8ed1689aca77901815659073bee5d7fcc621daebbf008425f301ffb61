'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useModal } from '@faceless-ui/modal';
import { getTranslation } from '@payloadcms/translations';
import { useRouter } from 'next/navigation.js';
import { formatAdminURL } from 'payload/shared';
import React, { useCallback } from 'react';
import { toast } from 'sonner';
import { CheckboxField } from '../../fields/Checkbox/index.js';
import { SelectInput } from '../../fields/Select/index.js';
import { useFormModified } from '../../forms/Form/context.js';
import { useConfig } from '../../providers/Config/index.js';
import { useDocumentInfo } from '../../providers/DocumentInfo/index.js';
import { useLocale } from '../../providers/Locale/index.js';
import { useRouteTransition } from '../../providers/RouteTransition/index.js';
import { useServerFunctions } from '../../providers/ServerFunctions/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { DrawerHeader } from '../BulkUpload/Header/index.js';
import { Button } from '../Button/index.js';
import { Drawer } from '../Drawer/index.js';
import { PopupList } from '../Popup/index.js';
import './index.scss';
const baseClass = 'copy-locale-data';
const drawerSlug = 'copy-locale';
export const CopyLocaleData = () => {
  const $ = _c(38);
  const {
    config: t0
  } = useConfig();
  const {
    localization,
    routes: t1,
    serverURL
  } = t0;
  const {
    admin
  } = t1;
  const {
    code
  } = useLocale();
  const {
    id,
    collectionSlug,
    globalSlug
  } = useDocumentInfo();
  const {
    i18n,
    t
  } = useTranslation();
  const modified = useFormModified();
  const {
    toggleModal
  } = useModal();
  const {
    copyDataFromLocale
  } = useServerFunctions();
  const router = useRouter();
  const {
    startRouteTransition
  } = useRouteTransition();
  let t2;
  if ($[0] !== localization) {
    t2 = localization && localization.locales.map(_temp) || [];
    $[0] = localization;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const localeOptions = t2;
  let t3;
  if ($[2] !== code) {
    t3 = locale_0 => locale_0.value !== code;
    $[2] = code;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const localeOptionsWithoutCurrent = localeOptions.filter(t3);
  let t4;
  if ($[4] !== i18n || $[5] !== localization) {
    t4 = code_0 => {
      const locale_1 = localization && localization.locales.find(l => l.code === code_0);
      return locale_1 && locale_1.label ? getTranslation(locale_1.label, i18n) : code_0;
    };
    $[4] = i18n;
    $[5] = localization;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const getLocaleLabel = t4;
  const [copying, setCopying] = React.useState(false);
  const [toLocale, setToLocale] = React.useState(null);
  const [fromLocale, setFromLocale] = React.useState(code);
  const [overwriteExisting, setOverwriteExisting] = React.useState(false);
  let t5;
  let t6;
  if ($[7] !== code || $[8] !== fromLocale) {
    t5 = () => {
      if (fromLocale !== code) {
        setFromLocale(code);
      }
    };
    t6 = [code, fromLocale];
    $[7] = code;
    $[8] = fromLocale;
    $[9] = t5;
    $[10] = t6;
  } else {
    t5 = $[9];
    t6 = $[10];
  }
  React.useEffect(t5, t6);
  let t7;
  if ($[11] !== admin || $[12] !== collectionSlug || $[13] !== copyDataFromLocale || $[14] !== globalSlug || $[15] !== id || $[16] !== overwriteExisting || $[17] !== router || $[18] !== serverURL || $[19] !== startRouteTransition || $[20] !== toggleModal) {
    t7 = async t8 => {
      const {
        from,
        to
      } = t8;
      setCopying(true);
      ;
      try {
        await copyDataFromLocale({
          collectionSlug,
          docID: id,
          fromLocale: from,
          globalSlug,
          overrideData: overwriteExisting,
          toLocale: to
        });
        setCopying(false);
        startRouteTransition(() => router.push(formatAdminURL({
          adminRoute: admin,
          path: `/${collectionSlug ? `collections/${collectionSlug}/${id}` : `globals/${globalSlug}`}`,
          serverURL
        }) + `?locale=${to}`));
        toggleModal(drawerSlug);
      } catch (t9) {
        const error = t9;
        toast.error(error.message);
      }
    };
    $[11] = admin;
    $[12] = collectionSlug;
    $[13] = copyDataFromLocale;
    $[14] = globalSlug;
    $[15] = id;
    $[16] = overwriteExisting;
    $[17] = router;
    $[18] = serverURL;
    $[19] = startRouteTransition;
    $[20] = toggleModal;
    $[21] = t7;
  } else {
    t7 = $[21];
  }
  const copyLocaleData = t7;
  if (!id && !globalSlug) {
    return null;
  }
  let t8;
  if ($[22] !== modified || $[23] !== t || $[24] !== toggleModal) {
    t8 = () => {
      if (modified) {
        toast.info(t("general:unsavedChanges"));
      } else {
        toggleModal(drawerSlug);
      }
    };
    $[22] = modified;
    $[23] = t;
    $[24] = toggleModal;
    $[25] = t8;
  } else {
    t8 = $[25];
  }
  let t9;
  if ($[26] !== toggleModal) {
    t9 = () => {
      toggleModal(drawerSlug);
    };
    $[26] = toggleModal;
    $[27] = t9;
  } else {
    t9 = $[27];
  }
  let t10;
  if ($[28] !== copyLocaleData || $[29] !== copying || $[30] !== fromLocale || $[31] !== t || $[32] !== toLocale) {
    t10 = async () => {
      if (fromLocale === toLocale) {
        toast.error(t("localization:cannotCopySameLocale"));
        return;
      }
      if (!copying) {
        await copyLocaleData({
          from: fromLocale,
          to: toLocale
        });
      }
    };
    $[28] = copyLocaleData;
    $[29] = copying;
    $[30] = fromLocale;
    $[31] = t;
    $[32] = toLocale;
    $[33] = t10;
  } else {
    t10 = $[33];
  }
  let t11;
  if ($[34] === Symbol.for("react.memo_cache_sentinel")) {
    t11 = selectedOption => {
      if (selectedOption?.value) {
        setFromLocale(selectedOption.value);
      }
    };
    $[34] = t11;
  } else {
    t11 = $[34];
  }
  let t12;
  if ($[35] === Symbol.for("react.memo_cache_sentinel")) {
    t12 = selectedOption_0 => {
      if (selectedOption_0?.value) {
        setToLocale(selectedOption_0.value);
      }
    };
    $[35] = t12;
  } else {
    t12 = $[35];
  }
  let t13;
  if ($[36] !== overwriteExisting) {
    t13 = () => setOverwriteExisting(!overwriteExisting);
    $[36] = overwriteExisting;
    $[37] = t13;
  } else {
    t13 = $[37];
  }
  return _jsxs(React.Fragment, {
    children: [_jsx(PopupList.Button, {
      id: `${baseClass}__button`,
      onClick: t8,
      children: t("localization:copyToLocale")
    }), _jsxs(Drawer, {
      className: baseClass,
      gutter: false,
      Header: _jsx(DrawerHeader, {
        onClose: t9,
        title: t("localization:copyToLocale")
      }),
      slug: drawerSlug,
      children: [_jsxs("div", {
        className: `${baseClass}__sub-header`,
        children: [_jsx("span", {
          children: fromLocale && toLocale ? _jsx("div", {
            children: t("localization:copyFromTo", {
              from: getLocaleLabel(fromLocale),
              to: getLocaleLabel(toLocale)
            })
          }) : t("localization:selectLocaleToCopy")
        }), _jsx(Button, {
          buttonStyle: "primary",
          disabled: !fromLocale || !toLocale,
          iconPosition: "left",
          onClick: t10,
          size: "medium",
          children: copying ? t("general:copying") + "..." : t("general:copy")
        })]
      }), _jsxs("div", {
        className: `${baseClass}__content`,
        children: [_jsx(SelectInput, {
          label: t("localization:copyFrom"),
          name: "fromLocale",
          onChange: t11,
          options: localeOptions,
          path: "fromLocale",
          readOnly: true,
          value: fromLocale
        }), _jsx(SelectInput, {
          label: t("localization:copyTo"),
          name: "toLocale",
          onChange: t12,
          options: localeOptionsWithoutCurrent,
          path: "toLocale",
          value: toLocale
        }), _jsx(CheckboxField, {
          checked: overwriteExisting,
          field: {
            name: "overwriteExisting",
            label: t("general:overwriteExistingData")
          },
          onChange: t13,
          path: "overwriteExisting"
        })]
      })]
    })]
  });
};
function _temp(locale) {
  return {
    label: locale.label,
    value: locale.code
  };
}
//# sourceMappingURL=index.js.map