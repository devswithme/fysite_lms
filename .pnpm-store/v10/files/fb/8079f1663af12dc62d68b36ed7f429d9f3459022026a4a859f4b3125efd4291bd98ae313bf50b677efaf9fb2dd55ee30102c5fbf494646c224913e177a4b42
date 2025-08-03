'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import React from 'react';
import { useTranslation } from '../../../../providers/Translation/index.js';
import { ReactSelect } from '../../../ReactSelect/index.js';
import { formatOptions } from './formatOptions.js';
export const Select = t0 => {
  const $ = _c(26);
  const {
    disabled,
    field: t1,
    isClearable,
    onChange,
    operator,
    options: optionsFromProps,
    value
  } = t0;
  const {
    admin: t2
  } = t1;
  const {
    placeholder
  } = t2;
  const {
    i18n
  } = useTranslation();
  let t3;
  if ($[0] !== optionsFromProps) {
    t3 = formatOptions(optionsFromProps);
    $[0] = optionsFromProps;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  const [options, setOptions] = React.useState(t3);
  let t4;
  if ($[2] === Symbol.for("react.memo_cache_sentinel")) {
    t4 = ["in", "not_in"];
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  const isMulti = t4.includes(operator);
  let valueToRender;
  if (isMulti && Array.isArray(value)) {
    let t5;
    if ($[3] !== i18n || $[4] !== options) {
      t5 = val => {
        const matchingOption = options.find(option => option.value === val);
        return {
          label: matchingOption ? getTranslation(matchingOption.label, i18n) : val,
          value: matchingOption?.value ?? val
        };
      };
      $[3] = i18n;
      $[4] = options;
      $[5] = t5;
    } else {
      t5 = $[5];
    }
    valueToRender = value.map(t5);
  } else {
    if (value) {
      let matchingOption_0;
      let t5;
      if ($[6] !== i18n || $[7] !== options || $[8] !== value) {
        let t6;
        if ($[11] !== value) {
          t6 = option_0 => option_0.value === value;
          $[11] = value;
          $[12] = t6;
        } else {
          t6 = $[12];
        }
        matchingOption_0 = options.find(t6);
        t5 = matchingOption_0 ? getTranslation(matchingOption_0.label, i18n) : value;
        $[6] = i18n;
        $[7] = options;
        $[8] = value;
        $[9] = matchingOption_0;
        $[10] = t5;
      } else {
        matchingOption_0 = $[9];
        t5 = $[10];
      }
      valueToRender = {
        label: t5,
        value: matchingOption_0?.value ?? value
      };
    }
  }
  let t5;
  if ($[13] !== isMulti || $[14] !== onChange) {
    t5 = selectedOption => {
      let newValue;
      if (!selectedOption) {
        newValue = null;
      } else {
        if (isMulti) {
          if (Array.isArray(selectedOption)) {
            newValue = selectedOption.map(_temp);
          } else {
            newValue = [];
          }
        } else {
          newValue = selectedOption.value;
        }
      }
      onChange(newValue);
    };
    $[13] = isMulti;
    $[14] = onChange;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  const onSelect = t5;
  let t6;
  let t7;
  if ($[16] !== optionsFromProps) {
    t6 = () => {
      setOptions(formatOptions(optionsFromProps));
    };
    t7 = [optionsFromProps];
    $[16] = optionsFromProps;
    $[17] = t6;
    $[18] = t7;
  } else {
    t6 = $[17];
    t7 = $[18];
  }
  React.useEffect(t6, t7);
  let t8;
  let t9;
  if ($[19] !== isMulti || $[20] !== onChange || $[21] !== value) {
    t8 = () => {
      if (!isMulti && Array.isArray(value)) {
        onChange(value[0]);
      }
    };
    t9 = [isMulti, onChange, value];
    $[19] = isMulti;
    $[20] = onChange;
    $[21] = value;
    $[22] = t8;
    $[23] = t9;
  } else {
    t8 = $[22];
    t9 = $[23];
  }
  React.useEffect(t8, t9);
  let t10;
  if ($[24] !== i18n) {
    t10 = option_2 => ({
      ...option_2,
      label: getTranslation(option_2.label, i18n)
    });
    $[24] = i18n;
    $[25] = t10;
  } else {
    t10 = $[25];
  }
  return _jsx(ReactSelect, {
    disabled,
    isClearable,
    isMulti,
    onChange: onSelect,
    options: options.map(t10),
    placeholder,
    value: valueToRender
  });
};
function _temp(option_1) {
  return option_1.value;
}
//# sourceMappingURL=index.js.map