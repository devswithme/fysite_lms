import { APIError, formatErrors } from 'payload';
import { isNumber } from 'payload/shared';
import { getClientConfig } from './getClientConfig.js';
import { renderFilters, renderTable } from './renderTable.js';
import { upsertPreferences } from './upsertPreferences.js';
export const buildTableStateHandler = async args => {
  const {
    req
  } = args;
  try {
    const res = await buildTableState(args);
    return res;
  } catch (err) {
    req.payload.logger.error({
      err,
      msg: `There was an error building form state`
    });
    if (err.message === 'Could not find field schema for given path') {
      return {
        message: err.message
      };
    }
    if (err.message === 'Unauthorized') {
      return null;
    }
    return formatErrors(err);
  }
};
const buildTableState = async args => {
  const {
    collectionSlug,
    columns,
    data: dataFromArgs,
    enableRowSelections,
    orderableFieldName,
    parent,
    query,
    renderRowTypes,
    req,
    req: {
      i18n,
      payload,
      payload: {
        config
      },
      user
    },
    tableAppearance
  } = args;
  const incomingUserSlug = user?.collection;
  const adminUserSlug = config.admin.user;
  // If we have a user slug, test it against the functions
  if (incomingUserSlug) {
    const adminAccessFunction = payload.collections[incomingUserSlug].config.access?.admin;
    // Run the admin access function from the config if it exists
    if (adminAccessFunction) {
      const canAccessAdmin = await adminAccessFunction({
        req
      });
      if (!canAccessAdmin) {
        throw new Error('Unauthorized');
      }
      // Match the user collection to the global admin config
    } else if (adminUserSlug !== incomingUserSlug) {
      throw new Error('Unauthorized');
    }
  } else {
    const hasUsers = await payload.find({
      collection: adminUserSlug,
      depth: 0,
      limit: 1,
      pagination: false
    });
    // If there are users, we should not allow access because of /create-first-user
    if (hasUsers.docs.length) {
      throw new Error('Unauthorized');
    }
  }
  const clientConfig = getClientConfig({
    config,
    i18n,
    importMap: payload.importMap
  });
  let collectionConfig;
  let clientCollectionConfig;
  if (!Array.isArray(collectionSlug)) {
    if (req.payload.collections[collectionSlug]) {
      collectionConfig = req.payload.collections[collectionSlug].config;
      clientCollectionConfig = clientConfig.collections.find(collection => collection.slug === collectionSlug);
    }
  }
  const collectionPreferences = await upsertPreferences({
    key: Array.isArray(collectionSlug) ? `${parent.collectionSlug}-${parent.joinPath}` : `collection-${collectionSlug}`,
    req,
    value: {
      columns,
      limit: isNumber(query?.limit) ? Number(query.limit) : undefined,
      sort: query?.sort
    }
  });
  let data = dataFromArgs;
  // lookup docs, if desired, i.e. within `join` field which initialize with `depth: 0`
  if (!data?.docs || query) {
    if (Array.isArray(collectionSlug)) {
      if (!parent) {
        throw new APIError('Unexpected array of collectionSlug, parent must be provided');
      }
      const select = {};
      let currentSelectRef = select;
      const segments = parent.joinPath.split('.');
      for (let i = 0; i < segments.length; i++) {
        currentSelectRef[segments[i]] = i === segments.length - 1 ? true : {};
        currentSelectRef = currentSelectRef[segments[i]];
      }
      const joinQuery = {
        sort: query?.sort,
        where: query?.where
      };
      if (query) {
        if (!Number.isNaN(Number(query.limit))) {
          joinQuery.limit = Number(query.limit);
        }
        if (!Number.isNaN(Number(query.page))) {
          joinQuery.limit = Number(query.limit);
        }
      }
      let parentDoc = await payload.findByID({
        id: parent.id,
        collection: parent.collectionSlug,
        depth: 1,
        joins: {
          [parent.joinPath]: joinQuery
        },
        overrideAccess: false,
        select,
        user: req.user
      });
      for (let i = 0; i < segments.length; i++) {
        if (i === segments.length - 1) {
          data = parentDoc[segments[i]];
        } else {
          parentDoc = parentDoc[segments[i]];
        }
      }
    } else {
      data = await payload.find({
        collection: collectionSlug,
        depth: 0,
        draft: true,
        limit: query?.limit,
        locale: req.locale,
        overrideAccess: false,
        page: query?.page,
        sort: query?.sort,
        user: req.user,
        where: query?.where
      });
    }
  }
  const {
    columnState,
    Table
  } = renderTable({
    clientCollectionConfig,
    clientConfig,
    collectionConfig,
    collections: Array.isArray(collectionSlug) ? collectionSlug : undefined,
    columns,
    data,
    enableRowSelections,
    i18n: req.i18n,
    orderableFieldName,
    payload,
    query,
    renderRowTypes,
    tableAppearance,
    useAsTitle: Array.isArray(collectionSlug) ? payload.collections[collectionSlug[0]]?.config?.admin?.useAsTitle : collectionConfig?.admin?.useAsTitle
  });
  let renderedFilters;
  if (collectionConfig) {
    renderedFilters = renderFilters(collectionConfig.fields, req.payload.importMap);
  }
  return {
    data,
    preferences: collectionPreferences,
    renderedFilters,
    state: columnState,
    Table
  };
};
//# sourceMappingURL=buildTableState.js.map