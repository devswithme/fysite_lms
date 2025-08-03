import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { FieldDiffContainer, File, getHTMLDiffComponents } from '@payloadcms/ui/rsc';
import React from 'react';
const baseClass = 'upload-diff';
export const Upload = args => {
  const {
    comparisonValue: valueFrom,
    field,
    i18n,
    locale,
    nestingLevel,
    req,
    versionValue: valueTo
  } = args;
  if ('hasMany' in field && field.hasMany && Array.isArray(valueTo)) {
    return /*#__PURE__*/_jsx(HasManyUploadDiff, {
      field: field,
      i18n: i18n,
      locale: locale,
      nestingLevel: nestingLevel,
      req: req,
      valueFrom: valueFrom,
      valueTo: valueTo
    });
  }
  return /*#__PURE__*/_jsx(SingleUploadDiff, {
    field: field,
    i18n: i18n,
    locale: locale,
    nestingLevel: nestingLevel,
    req: req,
    valueFrom: valueFrom,
    valueTo: valueTo
  });
};
export const HasManyUploadDiff = async args => {
  const {
    field,
    i18n,
    locale,
    nestingLevel,
    req,
    valueFrom,
    valueTo
  } = args;
  const ReactDOMServer = (await import('react-dom/server')).default;
  let From = '';
  let To = '';
  const showCollectionSlug = Array.isArray(field.relationTo);
  const FromComponents = valueFrom ? valueFrom.map(uploadDoc => /*#__PURE__*/_jsx(UploadDocumentDiff, {
    i18n: i18n,
    relationTo: field.relationTo,
    req: req,
    showCollectionSlug: showCollectionSlug,
    uploadDoc: uploadDoc
  }, uploadDoc.id)) : null;
  const ToComponents = valueTo ? valueTo.map(uploadDoc => /*#__PURE__*/_jsx(UploadDocumentDiff, {
    i18n: i18n,
    relationTo: field.relationTo,
    req: req,
    showCollectionSlug: showCollectionSlug,
    uploadDoc: uploadDoc
  }, uploadDoc.id)) : null;
  const diffResult = getHTMLDiffComponents({
    fromHTML: `<div class="${baseClass}-hasMany">` + (FromComponents ? FromComponents.map(component => `<div>${ReactDOMServer.renderToStaticMarkup(component)}</div>`).join('') : '') + '</div>',
    toHTML: `<div class="${baseClass}-hasMany">` + (ToComponents ? ToComponents.map(component => `<div>${ReactDOMServer.renderToStaticMarkup(component)}</div>`).join('') : '') + '</div>',
    tokenizeByCharacter: false
  });
  From = diffResult.From;
  To = diffResult.To;
  return /*#__PURE__*/_jsx(FieldDiffContainer, {
    className: `${baseClass}-container ${baseClass}-container--hasMany`,
    From: From,
    i18n: i18n,
    label: {
      label: field.label,
      locale
    },
    nestingLevel: nestingLevel,
    To: To
  });
};
export const SingleUploadDiff = async args => {
  const {
    field,
    i18n,
    locale,
    nestingLevel,
    req,
    valueFrom,
    valueTo
  } = args;
  const ReactDOMServer = (await import('react-dom/server')).default;
  let From = '';
  let To = '';
  const showCollectionSlug = Array.isArray(field.relationTo);
  const FromComponent = valueFrom ? /*#__PURE__*/_jsx(UploadDocumentDiff, {
    i18n: i18n,
    relationTo: field.relationTo,
    req: req,
    showCollectionSlug: showCollectionSlug,
    uploadDoc: valueFrom
  }) : null;
  const ToComponent = valueTo ? /*#__PURE__*/_jsx(UploadDocumentDiff, {
    i18n: i18n,
    relationTo: field.relationTo,
    req: req,
    showCollectionSlug: showCollectionSlug,
    uploadDoc: valueTo
  }) : null;
  const fromHtml = FromComponent ? ReactDOMServer.renderToStaticMarkup(FromComponent) : '<p>' + '' + '</p>';
  const toHtml = ToComponent ? ReactDOMServer.renderToStaticMarkup(ToComponent) : '<p>' + '' + '</p>';
  const diffResult = getHTMLDiffComponents({
    fromHTML: fromHtml,
    toHTML: toHtml,
    tokenizeByCharacter: false
  });
  From = diffResult.From;
  To = diffResult.To;
  return /*#__PURE__*/_jsx(FieldDiffContainer, {
    className: `${baseClass}-container ${baseClass}-container--hasOne`,
    From: From,
    i18n: i18n,
    label: {
      label: field.label,
      locale
    },
    nestingLevel: nestingLevel,
    To: To
  });
};
const UploadDocumentDiff = args => {
  const {
    i18n,
    relationTo,
    req,
    showCollectionSlug,
    uploadDoc
  } = args;
  const thumbnailSRC = 'thumbnailURL' in uploadDoc && uploadDoc?.thumbnailURL || uploadDoc?.url || '';
  let pillLabel = null;
  if (showCollectionSlug) {
    const uploadConfig = req.payload.collections[relationTo].config;
    pillLabel = uploadConfig.labels?.singular ? getTranslation(uploadConfig.labels.singular, i18n) : uploadConfig.slug;
  }
  return /*#__PURE__*/_jsx("div", {
    className: `${baseClass}`,
    "data-enable-match": "true",
    "data-id": uploadDoc?.id,
    "data-relation-to": relationTo,
    children: /*#__PURE__*/_jsxs("div", {
      className: `${baseClass}__card`,
      children: [/*#__PURE__*/_jsx("div", {
        className: `${baseClass}__thumbnail`,
        children: thumbnailSRC?.length ? /*#__PURE__*/_jsx("img", {
          alt: uploadDoc?.filename,
          src: thumbnailSRC
        }) : /*#__PURE__*/_jsx(File, {})
      }), pillLabel && /*#__PURE__*/_jsx("div", {
        className: `${baseClass}__pill`,
        "data-enable-match": "false",
        children: /*#__PURE__*/_jsx("span", {
          children: pillLabel
        })
      }), /*#__PURE__*/_jsx("div", {
        className: `${baseClass}__info`,
        "data-enable-match": "false",
        children: /*#__PURE__*/_jsx("strong", {
          children: uploadDoc?.filename
        })
      })]
    })
  });
};
//# sourceMappingURL=index.js.map