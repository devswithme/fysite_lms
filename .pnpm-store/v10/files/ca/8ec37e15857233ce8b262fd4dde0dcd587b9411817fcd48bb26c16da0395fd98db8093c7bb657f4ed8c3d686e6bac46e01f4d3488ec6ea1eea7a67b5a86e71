'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { CheckboxInput } from '../../fields/Checkbox/Input.js';
import { useAuth } from '../../providers/Auth/index.js';
import { useSelection } from '../../providers/Selection/index.js';
import { Locked } from '../Locked/index.js';
import './index.scss';
const baseClass = 'select-row';
export const SelectRow = t0 => {
  const $ = _c(14);
  const {
    rowData
  } = t0;
  const {
    user
  } = useAuth();
  const {
    selected,
    setSelection
  } = useSelection();
  let t1;
  if ($[0] !== rowData) {
    t1 = rowData || {};
    $[0] = rowData;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const {
    _isLocked,
    _userEditing
  } = t1;
  const documentIsLocked = _isLocked && _userEditing;
  if (documentIsLocked && _userEditing.id !== user?.id) {
    let t2;
    if ($[2] !== _userEditing) {
      t2 = _jsx(Locked, {
        user: _userEditing
      });
      $[2] = _userEditing;
      $[3] = t2;
    } else {
      t2 = $[3];
    }
    return t2;
  }
  let t2;
  if ($[4] !== rowData.id || $[5] !== selected) {
    t2 = selected.get(rowData.id);
    $[4] = rowData.id;
    $[5] = selected;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  const t3 = Boolean(t2);
  let t4;
  if ($[7] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = [baseClass, `${baseClass}__checkbox`];
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== rowData.id || $[9] !== setSelection) {
    t5 = () => setSelection(rowData.id);
    $[8] = rowData.id;
    $[9] = setSelection;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== t3 || $[12] !== t5) {
    t6 = _jsx(CheckboxInput, {
      checked: t3,
      className: t4.join(" "),
      onToggle: t5
    });
    $[11] = t3;
    $[12] = t5;
    $[13] = t6;
  } else {
    t6 = $[13];
  }
  return t6;
};
//# sourceMappingURL=index.js.map