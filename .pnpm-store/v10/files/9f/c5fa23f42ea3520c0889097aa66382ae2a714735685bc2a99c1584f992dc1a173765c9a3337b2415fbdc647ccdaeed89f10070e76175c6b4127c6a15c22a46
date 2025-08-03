'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { Tooltip } from '../../elements/Tooltip/index.js';
import { useFormFields, useFormSubmitted } from '../../forms/Form/context.js';
import './index.scss';
const baseClass = 'field-error';
export const FieldError = props => {
  const $ = _c(7);
  const {
    alignCaret: t0,
    message: messageFromProps,
    path,
    showError: showErrorFromProps
  } = props;
  const alignCaret = t0 === undefined ? "right" : t0;
  const hasSubmitted = useFormSubmitted();
  let t1;
  if ($[0] !== path) {
    t1 = t2 => {
      const [fields] = t2;
      return fields && fields?.[path] || null;
    };
    $[0] = path;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const field = useFormFields(t1);
  let t2;
  if ($[2] !== field) {
    t2 = field || {};
    $[2] = field;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const {
    errorMessage,
    valid
  } = t2;
  const message = messageFromProps || errorMessage;
  const showMessage = showErrorFromProps || hasSubmitted && valid === false;
  if (showMessage && message?.length) {
    let t3;
    if ($[4] !== alignCaret || $[5] !== message) {
      t3 = _jsx(Tooltip, {
        alignCaret,
        className: baseClass,
        delay: 0,
        staticPositioning: true,
        children: message
      });
      $[4] = alignCaret;
      $[5] = message;
      $[6] = t3;
    } else {
      t3 = $[6];
    }
    return t3;
  }
  return null;
};
//# sourceMappingURL=index.js.map