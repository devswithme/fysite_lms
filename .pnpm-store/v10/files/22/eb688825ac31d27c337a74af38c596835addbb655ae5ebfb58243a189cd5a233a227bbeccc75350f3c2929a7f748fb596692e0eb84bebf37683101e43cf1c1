import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { isNumber } from 'payload/shared';
import React, { Fragment } from 'react';
import { Pagination } from '../../elements/Pagination/index.js';
import { PerPage } from '../../elements/PerPage/index.js';
import { useListQuery } from '../../providers/ListQuery/context.js';
import { useTranslation } from '../../providers/Translation/index.js';
import './index.scss';
const baseClass = 'page-controls';
export const PageControlsComponent = ({
  AfterPageControls,
  collectionConfig,
  data,
  handlePageChange,
  handlePerPageChange,
  limit
}) => {
  const {
    i18n
  } = useTranslation();
  return /*#__PURE__*/_jsxs("div", {
    className: baseClass,
    children: [/*#__PURE__*/_jsx(Pagination, {
      hasNextPage: data.hasNextPage,
      hasPrevPage: data.hasPrevPage,
      limit: data.limit,
      nextPage: data.nextPage,
      numberOfNeighbors: 1,
      onChange: handlePageChange,
      page: data.page,
      prevPage: data.prevPage,
      totalPages: data.totalPages
    }), data.totalDocs > 0 && /*#__PURE__*/_jsxs(Fragment, {
      children: [/*#__PURE__*/_jsxs("div", {
        className: `${baseClass}__page-info`,
        children: [data.page * data.limit - (data.limit - 1), "-", data.totalPages > 1 && data.totalPages !== data.page ? data.limit * data.page : data.totalDocs, ' ', i18n.t('general:of'), " ", data.totalDocs]
      }), /*#__PURE__*/_jsx(PerPage, {
        handleChange: handlePerPageChange,
        limit: limit,
        limits: collectionConfig?.admin?.pagination?.limits,
        resetPage: data.totalDocs <= data.pagingCounter
      }), AfterPageControls]
    })]
  });
};
/*
 * These page controls are controlled by the global ListQuery state.
 * To override thi behavior, build your own wrapper around PageControlsComponent.
 */
export const PageControls = ({
  AfterPageControls,
  collectionConfig
}) => {
  const {
    data,
    defaultLimit: initialLimit,
    handlePageChange,
    handlePerPageChange,
    query
  } = useListQuery();
  return /*#__PURE__*/_jsx(PageControlsComponent, {
    AfterPageControls: AfterPageControls,
    collectionConfig: collectionConfig,
    data: data,
    handlePageChange: handlePageChange,
    handlePerPageChange: handlePerPageChange,
    limit: isNumber(query.limit) ? query.limit : initialLimit
  });
};
//# sourceMappingURL=index.js.map