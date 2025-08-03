import { getRouteWithoutAdmin, isAdminRoute } from './shared.js';
export function getRouteInfo({
  adminRoute,
  config,
  defaultIDType,
  payload,
  route
}) {
  if (isAdminRoute({
    adminRoute,
    config,
    route
  })) {
    const routeWithoutAdmin = getRouteWithoutAdmin({
      adminRoute,
      route
    });
    const routeSegments = routeWithoutAdmin.split('/').filter(Boolean);
    const [entityType, entitySlug, segment3, segment4] = routeSegments;
    const collectionSlug = entityType === 'collections' ? entitySlug : undefined;
    const globalSlug = entityType === 'globals' ? entitySlug : undefined;
    let collectionConfig;
    let globalConfig;
    let idType = defaultIDType;
    if (collectionSlug) {
      collectionConfig = payload.collections?.[collectionSlug]?.config;
    }
    if (globalSlug) {
      globalConfig = config.globals.find(global => global.slug === globalSlug);
    }
    // If the collection is using a custom ID, we need to determine its type
    if (collectionConfig && payload) {
      if (payload.collections?.[collectionSlug]?.customIDType) {
        idType = payload.collections?.[collectionSlug].customIDType;
      }
    }
    let docID;
    if (collectionSlug) {
      if (segment3 === 'trash' && segment4) {
        // /collections/:slug/trash/:id
        docID = idType === 'number' ? Number(segment4) : segment4;
      } else if (segment3 && segment3 !== 'create') {
        // /collections/:slug/:id
        docID = idType === 'number' ? Number(segment3) : segment3;
      }
    }
    return {
      collectionConfig,
      collectionSlug,
      docID,
      globalConfig,
      globalSlug
    };
  }
  return {};
}
//# sourceMappingURL=handleAdminPage.js.map