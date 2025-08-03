'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import React, { useEffect, useMemo, useState } from 'react';
import { useIntersect } from '../../../../../hooks/useIntersect.js';
import { useConfig } from '../../../../../providers/Config/index.js';
import { useTranslation } from '../../../../../providers/Translation/index.js';
import { canUseDOM } from '../../../../../utilities/canUseDOM.js';
import { formatDocTitle } from '../../../../../utilities/formatDocTitle/index.js';
import { useListRelationships } from '../../../RelationshipProvider/index.js';
import { FileCell } from '../File/index.js';
import './index.scss';
const baseClass = 'relationship-cell';
const totalToShow = 3;
export const RelationshipCell = t0 => {
  const $ = _c(40);
  const {
    cellData: cellDataFromProps,
    customCellProps: customCellContext,
    field,
    field: t1
  } = t0;
  const {
    label
  } = t1;
  const relationTo = "relationTo" in field && field.relationTo || "collection" in field && field.collection;
  let t2;
  t2 = "collection" in field ? cellDataFromProps?.docs : cellDataFromProps;
  const cellData = t2;
  const {
    config,
    getEntityConfig
  } = useConfig();
  const {
    collections,
    routes
  } = config;
  const [intersectionRef, entry] = useIntersect();
  let t3;
  if ($[0] === Symbol.for("react.memo_cache_sentinel")) {
    t3 = [];
    $[0] = t3;
  } else {
    t3 = $[0];
  }
  const [values, setValues] = useState(t3);
  const {
    documents,
    getRelationships
  } = useListRelationships();
  const [hasRequested, setHasRequested] = useState(false);
  const {
    i18n,
    t
  } = useTranslation();
  const isAboveViewport = canUseDOM ? entry?.boundingClientRect?.top < window.innerHeight : false;
  let t4;
  if ($[1] !== cellData || $[2] !== getRelationships || $[3] !== hasRequested || $[4] !== isAboveViewport || $[5] !== relationTo) {
    t4 = () => {
      if ((cellData || typeof cellData === "number") && isAboveViewport && !hasRequested) {
        const formattedValues = [];
        const arrayCellData = Array.isArray(cellData) ? cellData : [cellData];
        arrayCellData.slice(0, arrayCellData.length < totalToShow ? arrayCellData.length : totalToShow).forEach(cell => {
          if (typeof cell === "object" && "relationTo" in cell && "value" in cell) {
            formattedValues.push(cell);
          }
          if ((typeof cell === "number" || typeof cell === "string") && typeof relationTo === "string") {
            formattedValues.push({
              relationTo,
              value: cell
            });
          }
        });
        getRelationships(formattedValues);
        setHasRequested(true);
        setValues(formattedValues);
      }
    };
    $[1] = cellData;
    $[2] = getRelationships;
    $[3] = hasRequested;
    $[4] = isAboveViewport;
    $[5] = relationTo;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== cellData || $[8] !== collections || $[9] !== getRelationships || $[10] !== hasRequested || $[11] !== isAboveViewport || $[12] !== relationTo || $[13] !== routes.api) {
    t5 = [cellData, relationTo, collections, isAboveViewport, routes.api, hasRequested, getRelationships];
    $[7] = cellData;
    $[8] = collections;
    $[9] = getRelationships;
    $[10] = hasRequested;
    $[11] = isAboveViewport;
    $[12] = relationTo;
    $[13] = routes.api;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  useEffect(t4, t5);
  let t6;
  if ($[15] !== hasRequested) {
    t6 = () => {
      if (hasRequested) {
        setHasRequested(false);
      }
    };
    $[15] = hasRequested;
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  let t7;
  if ($[17] !== cellData) {
    t7 = [cellData];
    $[17] = cellData;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  useEffect(t6, t7);
  let t8;
  if ($[19] !== cellData || $[20] !== config.admin || $[21] !== customCellContext || $[22] !== documents || $[23] !== field || $[24] !== getEntityConfig || $[25] !== i18n || $[26] !== intersectionRef || $[27] !== label || $[28] !== t || $[29] !== values) {
    let t9;
    if ($[31] !== config.admin || $[32] !== customCellContext || $[33] !== documents || $[34] !== field || $[35] !== getEntityConfig || $[36] !== i18n || $[37] !== t || $[38] !== values.length) {
      t9 = (t10, i) => {
        const {
          relationTo: relationTo_0,
          value
        } = t10;
        const document = documents[relationTo_0][value];
        const relatedCollection = getEntityConfig({
          collectionSlug: relationTo_0
        });
        const label_0 = formatDocTitle({
          collectionConfig: relatedCollection,
          data: document || null,
          dateFormat: config.admin.dateFormat,
          fallback: `${t("general:untitled")} - ID: ${value}`,
          i18n
        });
        let fileField = null;
        if (field.type === "upload") {
          const fieldPreviewAllowed = "displayPreview" in field ? field.displayPreview : undefined;
          const previewAllowed = fieldPreviewAllowed ?? relatedCollection.upload?.displayPreview ?? true;
          if (previewAllowed && document) {
            fileField = _jsx(FileCell, {
              cellData: label_0,
              collectionConfig: relatedCollection,
              collectionSlug: relatedCollection.slug,
              customCellProps: customCellContext,
              field,
              rowData: document
            });
          }
        }
        return _jsxs(React.Fragment, {
          children: [document === false && `${t("general:untitled")} - ID: ${value}`, document === null && `${t("general:loading")}...`, document ? fileField || label_0 : null, values.length > i + 1 && ", "]
        }, i);
      };
      $[31] = config.admin;
      $[32] = customCellContext;
      $[33] = documents;
      $[34] = field;
      $[35] = getEntityConfig;
      $[36] = i18n;
      $[37] = t;
      $[38] = values.length;
      $[39] = t9;
    } else {
      t9 = $[39];
    }
    t8 = _jsxs("div", {
      className: baseClass,
      ref: intersectionRef,
      children: [values.map(t9), Array.isArray(cellData) && cellData.length > totalToShow && t("fields:itemsAndMore", {
        count: cellData.length - totalToShow,
        items: ""
      }), values.length === 0 && t("general:noLabel", {
        label: getTranslation(label || "", i18n)
      })]
    });
    $[19] = cellData;
    $[20] = config.admin;
    $[21] = customCellContext;
    $[22] = documents;
    $[23] = field;
    $[24] = getEntityConfig;
    $[25] = i18n;
    $[26] = intersectionRef;
    $[27] = label;
    $[28] = t;
    $[29] = values;
    $[30] = t8;
  } else {
    t8 = $[30];
  }
  return t8;
};
//# sourceMappingURL=index.js.map