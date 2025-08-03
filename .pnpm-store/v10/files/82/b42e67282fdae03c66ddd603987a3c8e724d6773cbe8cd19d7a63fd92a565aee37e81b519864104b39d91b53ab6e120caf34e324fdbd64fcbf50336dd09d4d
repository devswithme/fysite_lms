'use client';

import { jsx as _jsx } from "react/jsx-runtime";
import React, { useMemo } from 'react';
import { BulkUploadProvider } from '../../elements/BulkUpload/index.js';
import { useField } from '../../forms/useField/index.js';
import { withCondition } from '../../forms/withCondition/index.js';
import { useConfig } from '../../providers/Config/index.js';
import { mergeFieldStyles } from '../mergeFieldStyles.js';
import { UploadInput } from './Input.js';
import './index.scss';
export { UploadInput } from './Input.js';
export const baseClass = 'upload';
export function UploadComponent(props) {
  const {
    field,
    field: {
      admin: {
        allowCreate,
        className,
        description,
        isSortable
      } = {},
      hasMany,
      label,
      localized,
      maxRows,
      relationTo,
      required
    },
    path: pathFromProps,
    readOnly,
    validate
  } = props;
  const {
    config
  } = useConfig();
  const displayPreview = field.displayPreview;
  const memoizedValidate = React.useCallback((value, options) => {
    if (typeof validate === 'function') {
      return validate(value, {
        ...options,
        required
      });
    }
  }, [validate, required]);
  const {
    customComponents: {
      AfterInput,
      BeforeInput,
      Description,
      Error,
      Label
    } = {},
    disabled,
    filterOptions,
    path,
    setValue,
    showError,
    value: value_0
  } = useField({
    potentiallyStalePath: pathFromProps,
    validate: memoizedValidate
  });
  const styles = useMemo(() => mergeFieldStyles(field), [field]);
  return /*#__PURE__*/_jsx(BulkUploadProvider, {
    drawerSlugPrefix: pathFromProps,
    children: /*#__PURE__*/_jsx(UploadInput, {
      AfterInput: AfterInput,
      allowCreate: allowCreate !== false,
      api: config.routes.api,
      BeforeInput: BeforeInput,
      className: className,
      Description: Description,
      description: description,
      displayPreview: displayPreview,
      Error: Error,
      filterOptions: filterOptions,
      hasMany: hasMany,
      isSortable: isSortable,
      label: label,
      Label: Label,
      localized: localized,
      maxRows: maxRows,
      onChange: setValue,
      path: path,
      readOnly: readOnly || disabled,
      relationTo: relationTo,
      required: required,
      serverURL: config.serverURL,
      showError: showError,
      style: styles,
      value: value_0
    })
  });
}
export const UploadField = withCondition(UploadComponent);
//# sourceMappingURL=index.js.map