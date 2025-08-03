'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { formatFilesize } from 'payload/shared';
import React from 'react';
import { Button } from '../../../elements/Button/index.js';
import { useDocumentDrawer } from '../../../elements/DocumentDrawer/index.js';
import { ThumbnailComponent } from '../../../elements/Thumbnail/index.js';
import { useConfig } from '../../../providers/Config/index.js';
import './index.scss';
const baseClass = 'upload-relationship-details';
export function RelationshipContent(props) {
  const $ = _c(34);
  const {
    id,
    allowEdit,
    allowRemove,
    alt,
    byteSize,
    className,
    collectionSlug,
    displayPreview,
    filename,
    mimeType,
    onRemove,
    reloadDoc,
    src,
    thumbnailSrc,
    withMeta: t0,
    x,
    y
  } = props;
  const withMeta = t0 === undefined ? true : t0;
  const {
    config
  } = useConfig();
  let t1;
  if ($[0] !== collectionSlug || $[1] !== config) {
    t1 = "collections" in config ? config.collections.find(collection => collection.slug === collectionSlug) : undefined;
    $[0] = collectionSlug;
    $[1] = config;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const collectionConfig = t1;
  const t2 = src ? id : undefined;
  let t3;
  if ($[3] !== collectionSlug || $[4] !== t2) {
    t3 = {
      id: t2,
      collectionSlug
    };
    $[3] = collectionSlug;
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const [DocumentDrawer,, t4] = useDocumentDrawer(t3);
  const {
    openDrawer
  } = t4;
  let t5;
  if ($[6] !== collectionSlug || $[7] !== reloadDoc) {
    t5 = async t6 => {
      const {
        doc
      } = t6;
      return reloadDoc(doc.id, collectionSlug);
    };
    $[6] = collectionSlug;
    $[7] = reloadDoc;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  const onSave = t5;
  let t6;
  if ($[9] !== x || $[10] !== y) {
    t6 = function generateMetaText(mimeType_0, size) {
      const sections = [];
      if (size) {
        sections.push(formatFilesize(size));
      }
      if (x && y) {
        sections.push(`${x}x${y}`);
      }
      if (mimeType_0) {
        sections.push(mimeType_0);
      }
      return sections.join(" \u2014 ");
    };
    $[9] = x;
    $[10] = y;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  const generateMetaText = t6;
  const metaText = withMeta ? generateMetaText(mimeType, byteSize) : "";
  const previewAllowed = displayPreview ?? collectionConfig.upload?.displayPreview ?? true;
  let t7;
  if ($[12] !== className) {
    t7 = [baseClass, className].filter(Boolean);
    $[12] = className;
    $[13] = t7;
  } else {
    t7 = $[13];
  }
  const t8 = t7.join(" ");
  let t9;
  if ($[14] !== alt || $[15] !== filename || $[16] !== previewAllowed || $[17] !== thumbnailSrc) {
    t9 = previewAllowed && _jsx(ThumbnailComponent, {
      alt,
      className: `${baseClass}__thumbnail`,
      filename,
      fileSrc: thumbnailSrc,
      size: "small"
    });
    $[14] = alt;
    $[15] = filename;
    $[16] = previewAllowed;
    $[17] = thumbnailSrc;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  let t10;
  if ($[19] !== filename || $[20] !== src) {
    t10 = src ? _jsx("a", {
      href: src,
      target: "_blank",
      children: filename
    }) : filename;
    $[19] = filename;
    $[20] = src;
    $[21] = t10;
  } else {
    t10 = $[21];
  }
  let t11;
  if ($[22] !== DocumentDrawer || $[23] !== allowEdit || $[24] !== allowRemove || $[25] !== metaText || $[26] !== onRemove || $[27] !== onSave || $[28] !== openDrawer || $[29] !== t10 || $[30] !== t8 || $[31] !== t9 || $[32] !== withMeta) {
    t11 = _jsxs("div", {
      className: t8,
      children: [_jsxs("div", {
        className: `${baseClass}__imageAndDetails`,
        children: [t9, _jsxs("div", {
          className: `${baseClass}__details`,
          children: [_jsx("p", {
            className: `${baseClass}__filename`,
            children: t10
          }), withMeta ? _jsx("p", {
            className: `${baseClass}__meta`,
            children: metaText
          }) : null]
        })]
      }), allowEdit !== false || allowRemove !== false ? _jsxs("div", {
        className: `${baseClass}__actions`,
        children: [allowEdit !== false ? _jsx(Button, {
          buttonStyle: "icon-label",
          className: `${baseClass}__edit`,
          icon: "edit",
          iconStyle: "none",
          onClick: openDrawer
        }) : null, allowRemove !== false ? _jsx(Button, {
          buttonStyle: "icon-label",
          className: `${baseClass}__remove`,
          icon: "x",
          iconStyle: "none",
          onClick: () => onRemove()
        }) : null, _jsx(DocumentDrawer, {
          onSave
        })]
      }) : null]
    });
    $[22] = DocumentDrawer;
    $[23] = allowEdit;
    $[24] = allowRemove;
    $[25] = metaText;
    $[26] = onRemove;
    $[27] = onSave;
    $[28] = openDrawer;
    $[29] = t10;
    $[30] = t8;
    $[31] = t9;
    $[32] = withMeta;
    $[33] = t11;
  } else {
    t11 = $[33];
  }
  return t11;
}
//# sourceMappingURL=index.js.map