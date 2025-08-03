'use client';

import { fieldAffectsData, flattenTopLevelFields } from 'payload/shared';
export const getTextFieldsToBeSearched = (listSearchableFields, fields, i18n) => {
  if (listSearchableFields) {
    const flattenedFields = flattenTopLevelFields(fields, {
      i18n,
      moveSubFieldsToTop: true
    });
    return flattenedFields.filter(field => fieldAffectsData(field) && listSearchableFields.includes(field.name));
  }
  return null;
};
//# sourceMappingURL=getTextFieldsToBeSearched.js.map