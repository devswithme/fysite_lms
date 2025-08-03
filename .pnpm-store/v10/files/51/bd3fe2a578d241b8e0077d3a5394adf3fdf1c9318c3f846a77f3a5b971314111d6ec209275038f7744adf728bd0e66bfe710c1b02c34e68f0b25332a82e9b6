'use client';

import { c as _c } from "react/compiler-runtime";
import { useCallback, useMemo, useRef } from 'react';
import { useThrottledEffect } from '../../hooks/useThrottledEffect.js';
import { useAuth } from '../../providers/Auth/index.js';
import { useConfig } from '../../providers/Config/index.js';
import { useDocumentInfo } from '../../providers/DocumentInfo/index.js';
import { useOperation } from '../../providers/Operation/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { useDocumentForm, useForm, useFormFields, useFormInitializing, useFormProcessing, useFormSubmitted } from '../Form/context.js';
import { useFieldPath } from '../RenderFields/context.js';
/**
 * Get and set the value of a form field.
 *
 * @see https://payloadcms.com/docs/admin/react-hooks#usefield
 */
export const useField = options => {
  const $ = _c(64);
  let t0;
  if ($[0] !== options) {
    t0 = options || {};
    $[0] = options;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const {
    disableFormData: t1,
    hasRows,
    path: pathFromOptions,
    potentiallyStalePath,
    validate
  } = t0;
  const disableFormData = t1 === undefined ? false : t1;
  const pathFromContext = useFieldPath();
  const path = pathFromOptions || pathFromContext || potentiallyStalePath;
  const submitted = useFormSubmitted();
  const processing = useFormProcessing();
  const initializing = useFormInitializing();
  const {
    user
  } = useAuth();
  const {
    id,
    collectionSlug
  } = useDocumentInfo();
  const operation = useOperation();
  const dispatchField = useFormFields(_temp);
  let t2;
  if ($[2] !== path) {
    t2 = t3 => {
      const [fields] = t3;
      return fields && fields?.[path] || null;
    };
    $[2] = path;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const field = useFormFields(t2);
  const {
    t
  } = useTranslation();
  const {
    config
  } = useConfig();
  const {
    getData,
    getDataByPath,
    getSiblingData,
    setModified
  } = useForm();
  const documentForm = useDocumentForm();
  const filterOptions = field?.filterOptions;
  const value = field?.value;
  const initialValue = field?.initialValue;
  const valid = typeof field?.valid === "boolean" ? field.valid : true;
  const showError = valid === false && submitted;
  const prevValid = useRef(valid);
  const prevErrorMessage = useRef(field?.errorMessage);
  let t3;
  if ($[4] !== path) {
    t3 = path ? path.split(".") : [];
    $[4] = path;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const pathSegments = t3;
  let t4;
  if ($[6] !== disableFormData || $[7] !== dispatchField || $[8] !== hasRows || $[9] !== path || $[10] !== setModified) {
    t4 = (e, t5) => {
      const disableModifyingForm = t5 === undefined ? false : t5;
      const isEvent = e && typeof e === "object" && typeof e.preventDefault === "function" && typeof e.stopPropagation === "function";
      const val = isEvent ? e.target.value : e;
      dispatchField({
        type: "UPDATE",
        disableFormData: disableFormData || hasRows && val > 0,
        path,
        value: val
      });
      if (!disableModifyingForm) {
        setModified(true);
      }
    };
    $[6] = disableFormData;
    $[7] = dispatchField;
    $[8] = hasRows;
    $[9] = path;
    $[10] = setModified;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  const setValue = t4;
  let t5;
  const t6 = field?.customComponents;
  const t7 = processing || initializing;
  const t8 = field?.errorMessage;
  let t9;
  if ($[12] !== field?.errorPaths) {
    t9 = field?.errorPaths || [];
    $[12] = field?.errorPaths;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  const t10 = field?.rows;
  const t11 = field?.selectFilterOptions;
  const t12 = field?.valid;
  let t13;
  if ($[14] !== filterOptions || $[15] !== initialValue || $[16] !== initializing || $[17] !== path || $[18] !== processing || $[19] !== setValue || $[20] !== showError || $[21] !== submitted || $[22] !== t10 || $[23] !== t11 || $[24] !== t12 || $[25] !== t6 || $[26] !== t7 || $[27] !== t8 || $[28] !== t9 || $[29] !== value) {
    t13 = {
      customComponents: t6,
      disabled: t7,
      errorMessage: t8,
      errorPaths: t9,
      filterOptions,
      formInitializing: initializing,
      formProcessing: processing,
      formSubmitted: submitted,
      initialValue,
      path,
      rows: t10,
      selectFilterOptions: t11,
      setValue,
      showError,
      valid: t12,
      value
    };
    $[14] = filterOptions;
    $[15] = initialValue;
    $[16] = initializing;
    $[17] = path;
    $[18] = processing;
    $[19] = setValue;
    $[20] = showError;
    $[21] = submitted;
    $[22] = t10;
    $[23] = t11;
    $[24] = t12;
    $[25] = t6;
    $[26] = t7;
    $[27] = t8;
    $[28] = t9;
    $[29] = value;
    $[30] = t13;
  } else {
    t13 = $[30];
  }
  t5 = t13;
  const result = t5;
  let t14;
  if ($[31] !== collectionSlug || $[32] !== config || $[33] !== disableFormData || $[34] !== dispatchField || $[35] !== documentForm || $[36] !== field || $[37] !== getData || $[38] !== getDataByPath || $[39] !== getSiblingData || $[40] !== hasRows || $[41] !== id || $[42] !== operation || $[43] !== path || $[44] !== pathSegments || $[45] !== t || $[46] !== user || $[47] !== validate || $[48] !== value) {
    t14 = () => {
      const validateField = async () => {
        let valueToValidate = value;
        if (field?.rows && Array.isArray(field.rows)) {
          valueToValidate = getDataByPath(path);
        }
        let errorMessage = prevErrorMessage.current;
        let valid_0 = prevValid.current;
        const data = getData();
        const isValid = typeof validate === "function" ? await validate(valueToValidate, {
          id,
          blockData: undefined,
          collectionSlug,
          data: documentForm?.getData ? documentForm.getData() : data,
          event: "onChange",
          operation,
          path: pathSegments,
          preferences: {},
          req: {
            payload: {
              config
            },
            t,
            user
          },
          siblingData: getSiblingData(path)
        }) : typeof prevErrorMessage.current === "string" ? prevErrorMessage.current : prevValid.current;
        if (typeof isValid === "string") {
          valid_0 = false;
          errorMessage = isValid;
        } else {
          if (typeof isValid === "boolean") {
            valid_0 = isValid;
            errorMessage = undefined;
          }
        }
        if (valid_0 !== prevValid.current || errorMessage !== prevErrorMessage.current) {
          prevValid.current = valid_0;
          prevErrorMessage.current = errorMessage;
          const update = {
            type: "UPDATE",
            errorMessage,
            path,
            rows: field?.rows,
            valid: valid_0,
            validate,
            value
          };
          if (disableFormData || (hasRows ? typeof value === "number" && value > 0 : false)) {
            update.disableFormData = true;
          }
          if (typeof dispatchField === "function") {
            dispatchField(update);
          }
        }
      };
      validateField();
    };
    $[31] = collectionSlug;
    $[32] = config;
    $[33] = disableFormData;
    $[34] = dispatchField;
    $[35] = documentForm;
    $[36] = field;
    $[37] = getData;
    $[38] = getDataByPath;
    $[39] = getSiblingData;
    $[40] = hasRows;
    $[41] = id;
    $[42] = operation;
    $[43] = path;
    $[44] = pathSegments;
    $[45] = t;
    $[46] = user;
    $[47] = validate;
    $[48] = value;
    $[49] = t14;
  } else {
    t14 = $[49];
  }
  const t15 = field?.rows;
  let t16;
  if ($[50] !== collectionSlug || $[51] !== disableFormData || $[52] !== dispatchField || $[53] !== getData || $[54] !== getDataByPath || $[55] !== getSiblingData || $[56] !== id || $[57] !== operation || $[58] !== path || $[59] !== t15 || $[60] !== user || $[61] !== validate || $[62] !== value) {
    t16 = [value, disableFormData, dispatchField, getData, getSiblingData, getDataByPath, id, operation, path, user, validate, t15, collectionSlug];
    $[50] = collectionSlug;
    $[51] = disableFormData;
    $[52] = dispatchField;
    $[53] = getData;
    $[54] = getDataByPath;
    $[55] = getSiblingData;
    $[56] = id;
    $[57] = operation;
    $[58] = path;
    $[59] = t15;
    $[60] = user;
    $[61] = validate;
    $[62] = value;
    $[63] = t16;
  } else {
    t16 = $[63];
  }
  useThrottledEffect(t14, 150, t16);
  return result;
};
function _temp(t0) {
  const [, dispatch] = t0;
  return dispatch;
}
//# sourceMappingURL=index.js.map