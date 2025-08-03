'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { Gutter } from '../../../elements/Gutter/index.js';
import { useModal } from '../../../elements/Modal/index.js';
import { RenderTitle } from '../../../elements/RenderTitle/index.js';
import { XIcon } from '../../../icons/X/index.js';
import { useDocumentInfo } from '../../../providers/DocumentInfo/index.js';
import { useDocumentTitle } from '../../../providers/DocumentTitle/index.js';
import { useTranslation } from '../../../providers/Translation/index.js';
import { IDLabel } from '../../IDLabel/index.js';
import { documentDrawerBaseClass } from '../index.js';
import './index.scss';
export const DocumentDrawerHeader = t0 => {
  const $ = _c(10);
  const {
    drawerSlug,
    showDocumentID: t1
  } = t0;
  const showDocumentID = t1 === undefined ? true : t1;
  const {
    closeModal
  } = useModal();
  const {
    t
  } = useTranslation();
  let t2;
  if ($[0] !== closeModal || $[1] !== drawerSlug || $[2] !== showDocumentID || $[3] !== t) {
    let t3;
    if ($[5] !== closeModal || $[6] !== drawerSlug) {
      t3 = () => closeModal(drawerSlug);
      $[5] = closeModal;
      $[6] = drawerSlug;
      $[7] = t3;
    } else {
      t3 = $[7];
    }
    let t4;
    if ($[8] !== showDocumentID) {
      t4 = showDocumentID && _jsx(DocumentID, {});
      $[8] = showDocumentID;
      $[9] = t4;
    } else {
      t4 = $[9];
    }
    t2 = _jsxs(Gutter, {
      className: `${documentDrawerBaseClass}__header`,
      children: [_jsxs("div", {
        className: `${documentDrawerBaseClass}__header-content`,
        children: [_jsx("h2", {
          className: `${documentDrawerBaseClass}__header-text`,
          children: _jsx(RenderTitle, {
            element: "span"
          })
        }), _jsx("button", {
          "aria-label": t("general:close"),
          className: `${documentDrawerBaseClass}__header-close`,
          onClick: t3,
          type: "button",
          children: _jsx(XIcon, {})
        })]
      }), t4]
    });
    $[0] = closeModal;
    $[1] = drawerSlug;
    $[2] = showDocumentID;
    $[3] = t;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  return t2;
};
const DocumentID = () => {
  const $ = _c(3);
  const {
    id
  } = useDocumentInfo();
  const {
    title
  } = useDocumentTitle();
  let t0;
  if ($[0] !== id || $[1] !== title) {
    t0 = id && id !== title ? _jsx(IDLabel, {
      id: id.toString()
    }) : null;
    $[0] = id;
    $[1] = title;
    $[2] = t0;
  } else {
    t0 = $[2];
  }
  return t0;
};
//# sourceMappingURL=index.js.map