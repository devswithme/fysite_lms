'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { reduceFieldsToValues } from 'payload/shared';
import React, { useEffect } from 'react';
import { useAllFormFields } from '../../../forms/Form/context.js';
import { useDocumentEvents } from '../../../providers/DocumentEvents/index.js';
import { useLivePreviewContext } from '../../../providers/LivePreview/context.js';
import { useLocale } from '../../../providers/Locale/index.js';
import { ShimmerEffect } from '../../ShimmerEffect/index.js';
import { DeviceContainer } from '../Device/index.js';
import { IFrame } from '../IFrame/index.js';
import { LivePreviewToolbar } from '../Toolbar/index.js';
import './index.scss';
const baseClass = 'live-preview-window';
export const LivePreviewWindow = props => {
  const $ = _c(46);
  const {
    appIsReady,
    breakpoint,
    fieldSchemaJSON,
    iframeHasLoaded,
    iframeRef,
    isLivePreviewing,
    popupRef,
    previewWindowType,
    setIframeHasLoaded,
    url
  } = useLivePreviewContext();
  const locale = useLocale();
  const {
    mostRecentUpdate
  } = useDocumentEvents();
  const prevWindowType = React.useRef(undefined);
  const [formState] = useAllFormFields();
  let t0;
  if ($[0] !== appIsReady || $[1] !== fieldSchemaJSON || $[2] !== formState || $[3] !== iframeRef || $[4] !== isLivePreviewing || $[5] !== locale || $[6] !== mostRecentUpdate || $[7] !== popupRef || $[8] !== previewWindowType || $[9] !== url) {
    t0 = () => {
      if (!isLivePreviewing) {
        return;
      }
      if (formState && window && "postMessage" in window && appIsReady) {
        const values = reduceFieldsToValues(formState, true);
        const shouldSendSchema = !prevWindowType.current || prevWindowType.current !== previewWindowType;
        prevWindowType.current = previewWindowType;
        const message = {
          type: "payload-live-preview",
          data: values,
          externallyUpdatedRelationship: mostRecentUpdate,
          fieldSchemaJSON: shouldSendSchema ? fieldSchemaJSON : undefined,
          locale: locale.code
        };
        if (previewWindowType === "popup" && popupRef.current) {
          popupRef.current.postMessage(message, url);
        }
        if (previewWindowType === "iframe" && iframeRef.current) {
          iframeRef.current.contentWindow?.postMessage(message, url);
        }
      }
    };
    $[0] = appIsReady;
    $[1] = fieldSchemaJSON;
    $[2] = formState;
    $[3] = iframeRef;
    $[4] = isLivePreviewing;
    $[5] = locale;
    $[6] = mostRecentUpdate;
    $[7] = popupRef;
    $[8] = previewWindowType;
    $[9] = url;
    $[10] = t0;
  } else {
    t0 = $[10];
  }
  let t1;
  if ($[11] !== appIsReady || $[12] !== fieldSchemaJSON || $[13] !== formState || $[14] !== iframeHasLoaded || $[15] !== iframeRef || $[16] !== isLivePreviewing || $[17] !== locale || $[18] !== mostRecentUpdate || $[19] !== popupRef || $[20] !== previewWindowType || $[21] !== setIframeHasLoaded || $[22] !== url) {
    t1 = [formState, url, iframeHasLoaded, previewWindowType, popupRef, appIsReady, iframeRef, setIframeHasLoaded, fieldSchemaJSON, mostRecentUpdate, locale, isLivePreviewing];
    $[11] = appIsReady;
    $[12] = fieldSchemaJSON;
    $[13] = formState;
    $[14] = iframeHasLoaded;
    $[15] = iframeRef;
    $[16] = isLivePreviewing;
    $[17] = locale;
    $[18] = mostRecentUpdate;
    $[19] = popupRef;
    $[20] = previewWindowType;
    $[21] = setIframeHasLoaded;
    $[22] = url;
    $[23] = t1;
  } else {
    t1 = $[23];
  }
  useEffect(t0, t1);
  let t2;
  if ($[24] !== iframeRef || $[25] !== isLivePreviewing || $[26] !== popupRef || $[27] !== previewWindowType || $[28] !== url) {
    t2 = () => {
      if (!isLivePreviewing) {
        return;
      }
      const message_0 = {
        type: "payload-document-event"
      };
      if (previewWindowType === "popup" && popupRef.current) {
        popupRef.current.postMessage(message_0, url);
      }
      if (previewWindowType === "iframe" && iframeRef.current) {
        iframeRef.current.contentWindow?.postMessage(message_0, url);
      }
    };
    $[24] = iframeRef;
    $[25] = isLivePreviewing;
    $[26] = popupRef;
    $[27] = previewWindowType;
    $[28] = url;
    $[29] = t2;
  } else {
    t2 = $[29];
  }
  let t3;
  if ($[30] !== iframeRef || $[31] !== isLivePreviewing || $[32] !== mostRecentUpdate || $[33] !== popupRef || $[34] !== previewWindowType || $[35] !== url) {
    t3 = [mostRecentUpdate, iframeRef, popupRef, previewWindowType, url, isLivePreviewing];
    $[30] = iframeRef;
    $[31] = isLivePreviewing;
    $[32] = mostRecentUpdate;
    $[33] = popupRef;
    $[34] = previewWindowType;
    $[35] = url;
    $[36] = t3;
  } else {
    t3 = $[36];
  }
  useEffect(t2, t3);
  if (previewWindowType === "iframe") {
    const t4 = isLivePreviewing && `${baseClass}--is-live-previewing`;
    const t5 = breakpoint && breakpoint !== "responsive" && `${baseClass}--has-breakpoint`;
    let t6;
    if ($[37] !== t4 || $[38] !== t5) {
      t6 = [baseClass, t4, t5].filter(Boolean);
      $[37] = t4;
      $[38] = t5;
      $[39] = t6;
    } else {
      t6 = $[39];
    }
    const t7 = t6.join(" ");
    let t8;
    if ($[40] !== iframeRef || $[41] !== props || $[42] !== setIframeHasLoaded || $[43] !== t7 || $[44] !== url) {
      t8 = _jsx("div", {
        className: t7,
        children: _jsxs("div", {
          className: `${baseClass}__wrapper`,
          children: [_jsx(LivePreviewToolbar, {
            ...props
          }), _jsx("div", {
            className: `${baseClass}__main`,
            children: _jsx(DeviceContainer, {
              children: url ? _jsx(IFrame, {
                ref: iframeRef,
                setIframeHasLoaded,
                url
              }) : _jsx(ShimmerEffect, {
                height: "100%"
              })
            })
          })]
        })
      });
      $[40] = iframeRef;
      $[41] = props;
      $[42] = setIframeHasLoaded;
      $[43] = t7;
      $[44] = url;
      $[45] = t8;
    } else {
      t8 = $[45];
    }
    return t8;
  }
};
//# sourceMappingURL=index.js.map