import { jsx as _jsx } from "react/jsx-runtime";
import { formatAdminURL } from 'payload/shared';
import React from 'react';
import { DefaultTemplate } from '../../templates/Default/index.js';
import { getNextRequestI18n } from '../../utilities/getNextRequestI18n.js';
import { initPage } from '../../utilities/initPage/index.js';
import { NotFoundClient } from './index.client.js';
export const generateNotFoundViewMetadata = async ({
  config: configPromise
}) => {
  const config = await configPromise;
  const i18n = await getNextRequestI18n({
    config
  });
  return {
    title: i18n.t('general:notFound')
  };
};
export const NotFoundPage = async ({
  config: configPromise,
  importMap,
  params: paramsPromise,
  searchParams: searchParamsPromise
}) => {
  const config = await configPromise;
  const {
    routes: {
      admin: adminRoute
    } = {}
  } = config;
  const searchParams = await searchParamsPromise;
  const initPageResult = await initPage({
    config,
    importMap,
    redirectUnauthenticatedUser: true,
    route: formatAdminURL({
      adminRoute,
      path: '/not-found'
    }),
    searchParams,
    useLayoutReq: true
  });
  const params = await paramsPromise;
  if (!initPageResult.req.user || !initPageResult.permissions.canAccessAdmin) {
    return /*#__PURE__*/_jsx(NotFoundClient, {});
  }
  return /*#__PURE__*/_jsx(DefaultTemplate, {
    i18n: initPageResult.req.i18n,
    locale: initPageResult.locale,
    params: params,
    payload: initPageResult.req.payload,
    permissions: initPageResult.permissions,
    searchParams: searchParams,
    user: initPageResult.req.user,
    visibleEntities: initPageResult.visibleEntities,
    children: /*#__PURE__*/_jsx(NotFoundClient, {})
  });
};
export function NotFoundView(props) {
  return /*#__PURE__*/_jsx(NotFoundClient, {
    marginTop: "large"
  });
}
//# sourceMappingURL=index.js.map