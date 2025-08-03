import { resolveFilterOptions } from '@payloadcms/ui/rsc';
import { fieldHasSubFields, fieldIsHiddenOrDisabled } from 'payload/shared';
export const resolveAllFilterOptions = async ({
  fields,
  req,
  result
}) => {
  const resolvedFilterOptions = !result ? new Map() : result;
  await Promise.all(fields.map(async field => {
    if (fieldIsHiddenOrDisabled(field)) {
      return;
    }
    if ((field.type === 'relationship' || field.type === 'upload') && 'filterOptions' in field && field.filterOptions) {
      const options = await resolveFilterOptions(field.filterOptions, {
        id: undefined,
        blockData: undefined,
        data: {},
        relationTo: field.relationTo,
        req,
        siblingData: {},
        user: req.user
      });
      resolvedFilterOptions.set(field.name, options);
    }
    if (fieldHasSubFields(field)) {
      await resolveAllFilterOptions({
        fields: field.fields,
        req,
        result: resolvedFilterOptions
      });
    }
    if (field.type === 'tabs') {
      await Promise.all(field.tabs.map(tab => resolveAllFilterOptions({
        fields: tab.fields,
        req,
        result: resolvedFilterOptions
      })));
    }
  }));
  return resolvedFilterOptions;
};
//# sourceMappingURL=resolveAllFilterOptions.js.map