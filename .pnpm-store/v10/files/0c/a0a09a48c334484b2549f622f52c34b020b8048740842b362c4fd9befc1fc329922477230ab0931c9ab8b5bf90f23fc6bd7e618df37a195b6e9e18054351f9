'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useCallback } from 'react';
import { toast } from 'sonner';
import { MoreIcon } from '../../icons/More/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { Popup, PopupList } from '../Popup/index.js';
import { ClipboardActionLabel } from './ClipboardActionLabel.js';
import { clipboardCopy, clipboardPaste } from './clipboardUtilities.js';
const baseClass = 'clipboard-action';
/**
 * Menu actions for copying and pasting fields. Currently, this is only used in Arrays and Blocks.
 * @note This component doesn't use the Clipboard API, but localStorage. See rationale in #11513
 */
export const ClipboardAction = t0 => {
  const $ = _c(40);
  let allowCopy;
  let allowPaste;
  let className;
  let copyClassName;
  let disabled;
  let isRow;
  let onPaste;
  let pasteClassName;
  let path;
  let rest;
  if ($[0] !== t0) {
    ({
      allowCopy,
      allowPaste,
      className,
      copyClassName,
      disabled,
      isRow,
      onPaste,
      pasteClassName,
      path,
      ...rest
    } = t0);
    $[0] = t0;
    $[1] = allowCopy;
    $[2] = allowPaste;
    $[3] = className;
    $[4] = copyClassName;
    $[5] = disabled;
    $[6] = isRow;
    $[7] = onPaste;
    $[8] = pasteClassName;
    $[9] = path;
    $[10] = rest;
  } else {
    allowCopy = $[1];
    allowPaste = $[2];
    className = $[3];
    copyClassName = $[4];
    disabled = $[5];
    isRow = $[6];
    onPaste = $[7];
    pasteClassName = $[8];
    path = $[9];
    rest = $[10];
  }
  const {
    t
  } = useTranslation();
  let t1;
  if ($[11] !== className) {
    t1 = [`${baseClass}__popup`, className].filter(Boolean);
    $[11] = className;
    $[12] = t1;
  } else {
    t1 = $[12];
  }
  const classes = t1.join(" ");
  let t2;
  if ($[13] !== path || $[14] !== rest || $[15] !== t) {
    t2 = () => {
      const clipboardResult = clipboardCopy({
        path,
        t,
        ...rest
      });
      if (typeof clipboardResult === "string") {
        toast.error(clipboardResult);
      } else {
        toast.success(t("general:copied"));
      }
    };
    $[13] = path;
    $[14] = rest;
    $[15] = t;
    $[16] = t2;
  } else {
    t2 = $[16];
  }
  const handleCopy = t2;
  let t3;
  if ($[17] !== onPaste || $[18] !== path || $[19] !== rest || $[20] !== t) {
    t3 = () => {
      const clipboardResult_0 = clipboardPaste(rest.type === "array" ? {
        onPaste,
        path,
        schemaFields: rest.fields,
        t
      } : {
        onPaste,
        path,
        schemaBlocks: rest.blocks,
        t
      });
      if (typeof clipboardResult_0 === "string") {
        toast.error(clipboardResult_0);
      }
    };
    $[17] = onPaste;
    $[18] = path;
    $[19] = rest;
    $[20] = t;
    $[21] = t3;
  } else {
    t3 = $[21];
  }
  const handlePaste = t3;
  if (!allowPaste && !allowCopy) {
    return null;
  }
  let t4;
  if ($[22] !== allowCopy || $[23] !== allowPaste || $[24] !== classes || $[25] !== copyClassName || $[26] !== disabled || $[27] !== handleCopy || $[28] !== handlePaste || $[29] !== isRow || $[30] !== pasteClassName) {
    let t5;
    if ($[32] !== allowCopy || $[33] !== allowPaste || $[34] !== copyClassName || $[35] !== handleCopy || $[36] !== handlePaste || $[37] !== isRow || $[38] !== pasteClassName) {
      t5 = t6 => {
        const {
          close
        } = t6;
        return _jsxs(PopupList.ButtonGroup, {
          children: [_jsx(PopupList.Button, {
            className: copyClassName,
            disabled: !allowCopy,
            onClick: () => {
              handleCopy();
              close();
            },
            children: _jsx(ClipboardActionLabel, {
              isRow
            })
          }), _jsx(PopupList.Button, {
            className: pasteClassName,
            disabled: !allowPaste,
            onClick: () => {
              handlePaste();
              close();
            },
            children: _jsx(ClipboardActionLabel, {
              isPaste: true,
              isRow
            })
          })]
        });
      };
      $[32] = allowCopy;
      $[33] = allowPaste;
      $[34] = copyClassName;
      $[35] = handleCopy;
      $[36] = handlePaste;
      $[37] = isRow;
      $[38] = pasteClassName;
      $[39] = t5;
    } else {
      t5 = $[39];
    }
    t4 = _jsx(Popup, {
      button: _jsx(MoreIcon, {}),
      className: classes,
      disabled,
      horizontalAlign: "center",
      render: t5,
      size: "large",
      verticalAlign: "bottom"
    });
    $[22] = allowCopy;
    $[23] = allowPaste;
    $[24] = classes;
    $[25] = copyClassName;
    $[26] = disabled;
    $[27] = handleCopy;
    $[28] = handlePaste;
    $[29] = isRow;
    $[30] = pasteClassName;
    $[31] = t4;
  } else {
    t4 = $[31];
  }
  return t4;
};
//# sourceMappingURL=index.js.map