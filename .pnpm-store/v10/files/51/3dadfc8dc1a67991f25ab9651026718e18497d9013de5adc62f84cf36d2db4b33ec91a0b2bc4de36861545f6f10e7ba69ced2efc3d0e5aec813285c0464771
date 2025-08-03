'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React from 'react';
import './index.scss';
const baseClass = 'thumbnail';
import { File } from '../../graphics/File/index.js';
import { ShimmerEffect } from '../ShimmerEffect/index.js';
export const Thumbnail = props => {
  const $ = _c(17);
  const {
    className: t0,
    doc: t1,
    fileSrc,
    imageCacheTag,
    size
  } = props;
  const className = t0 === undefined ? "" : t0;
  let t2;
  if ($[0] !== t1) {
    t2 = t1 === undefined ? {} : t1;
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const {
    filename
  } = t2;
  const [fileExists, setFileExists] = React.useState(undefined);
  const t3 = `${baseClass}--size-${size || "medium"}`;
  let t4;
  if ($[2] !== className || $[3] !== t3) {
    t4 = [baseClass, t3, className];
    $[2] = className;
    $[3] = t3;
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  const classNames = t4.join(" ");
  let t5;
  let t6;
  if ($[5] !== fileSrc) {
    t5 = () => {
      if (!fileSrc) {
        setFileExists(false);
        return;
      }
      setFileExists(undefined);
      const img = new Image();
      img.src = fileSrc;
      img.onload = () => {
        setFileExists(true);
      };
      img.onerror = () => {
        setFileExists(false);
      };
    };
    t6 = [fileSrc];
    $[5] = fileSrc;
    $[6] = t5;
    $[7] = t6;
  } else {
    t5 = $[6];
    t6 = $[7];
  }
  React.useEffect(t5, t6);
  let src = null;
  if (fileSrc) {
    const queryChar = fileSrc?.includes("?") ? "&" : "?";
    src = imageCacheTag ? `${fileSrc}${queryChar}${encodeURIComponent(imageCacheTag)}` : fileSrc;
  }
  let t7;
  if ($[8] !== classNames || $[9] !== fileExists || $[10] !== filename || $[11] !== src) {
    let t8;
    if ($[13] !== fileExists || $[14] !== filename || $[15] !== src) {
      t8 = fileExists && _jsx("img", {
        alt: filename,
        src
      });
      $[13] = fileExists;
      $[14] = filename;
      $[15] = src;
      $[16] = t8;
    } else {
      t8 = $[16];
    }
    t7 = _jsxs("div", {
      className: classNames,
      children: [fileExists === undefined && _jsx(ShimmerEffect, {
        height: "100%"
      }), t8, fileExists === false && _jsx(File, {})]
    });
    $[8] = classNames;
    $[9] = fileExists;
    $[10] = filename;
    $[11] = src;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  return t7;
};
export function ThumbnailComponent(props) {
  const $ = _c(17);
  const {
    alt,
    className: t0,
    filename,
    fileSrc,
    imageCacheTag,
    size
  } = props;
  const className = t0 === undefined ? "" : t0;
  const [fileExists, setFileExists] = React.useState(undefined);
  const t1 = `${baseClass}--size-${size || "medium"}`;
  let t2;
  if ($[0] !== className || $[1] !== t1) {
    t2 = [baseClass, t1, className];
    $[0] = className;
    $[1] = t1;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const classNames = t2.join(" ");
  let t3;
  let t4;
  if ($[3] !== fileSrc) {
    t3 = () => {
      if (!fileSrc) {
        setFileExists(false);
        return;
      }
      setFileExists(undefined);
      const img = new Image();
      img.src = fileSrc;
      img.onload = () => {
        setFileExists(true);
      };
      img.onerror = () => {
        setFileExists(false);
      };
    };
    t4 = [fileSrc];
    $[3] = fileSrc;
    $[4] = t3;
    $[5] = t4;
  } else {
    t3 = $[4];
    t4 = $[5];
  }
  React.useEffect(t3, t4);
  let src = "";
  if (fileSrc) {
    const queryChar = fileSrc?.includes("?") ? "&" : "?";
    src = imageCacheTag ? `${fileSrc}${queryChar}${encodeURIComponent(imageCacheTag)}` : fileSrc;
  }
  let t5;
  if ($[6] !== alt || $[7] !== classNames || $[8] !== fileExists || $[9] !== filename || $[10] !== src) {
    let t6;
    if ($[12] !== alt || $[13] !== fileExists || $[14] !== filename || $[15] !== src) {
      t6 = fileExists && _jsx("img", {
        alt: alt || filename,
        src
      });
      $[12] = alt;
      $[13] = fileExists;
      $[14] = filename;
      $[15] = src;
      $[16] = t6;
    } else {
      t6 = $[16];
    }
    t5 = _jsxs("div", {
      className: classNames,
      children: [fileExists === undefined && _jsx(ShimmerEffect, {
        height: "100%"
      }), t6, fileExists === false && _jsx(File, {})]
    });
    $[6] = alt;
    $[7] = classNames;
    $[8] = fileExists;
    $[9] = filename;
    $[10] = src;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  return t5;
}
//# sourceMappingURL=index.js.map