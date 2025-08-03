'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { useModal } from '@faceless-ui/modal';
import { useWindowInfo } from '@faceless-ui/window-info';
import { isImage } from 'payload/shared';
import React from 'react';
import { ChevronIcon } from '../../../icons/Chevron/index.js';
import { XIcon } from '../../../icons/X/index.js';
import { useTranslation } from '../../../providers/Translation/index.js';
import { AnimateHeight } from '../../AnimateHeight/index.js';
import { Button } from '../../Button/index.js';
import { Drawer } from '../../Drawer/index.js';
import { ErrorPill } from '../../ErrorPill/index.js';
import { Pill } from '../../Pill/index.js';
import { ShimmerEffect } from '../../ShimmerEffect/index.js';
import { createThumbnail } from '../../Thumbnail/createThumbnail.js';
import { Thumbnail } from '../../Thumbnail/index.js';
import { Actions } from '../ActionsBar/index.js';
import { AddFilesView } from '../AddFilesView/index.js';
import { useFormsManager } from '../FormsManager/index.js';
import { useBulkUpload } from '../index.js';
import './index.scss';
const addMoreFilesDrawerSlug = 'bulk-upload-drawer--add-more-files';
const baseClass = 'file-selections';
export function FileSidebar() {
  const $ = _c(34);
  const {
    activeIndex,
    addFiles,
    forms,
    isInitializing,
    removeFile,
    setActiveIndex,
    totalErrorCount
  } = useFormsManager();
  const {
    initialFiles,
    maxFiles
  } = useBulkUpload();
  const {
    i18n,
    t
  } = useTranslation();
  const {
    closeModal,
    openModal
  } = useModal();
  const [showFiles, setShowFiles] = React.useState(false);
  const {
    breakpoints
  } = useWindowInfo();
  let t0;
  if ($[0] !== removeFile) {
    t0 = indexToRemove => {
      removeFile(indexToRemove);
    };
    $[0] = removeFile;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const handleRemoveFile = t0;
  let t1;
  if ($[2] !== addFiles || $[3] !== closeModal) {
    t1 = filelist => {
      addFiles(filelist);
      closeModal(addMoreFilesDrawerSlug);
    };
    $[2] = addFiles;
    $[3] = closeModal;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  const handleAddFiles = t1;
  const getFileSize = _temp;
  const totalFileCount = isInitializing ? initialFiles.length : forms.length;
  const t2 = showFiles && `${baseClass}__showingFiles`;
  let t3;
  if ($[5] !== t2) {
    t3 = [baseClass, t2].filter(Boolean);
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  const t4 = t3.join(" ");
  let t5;
  if ($[7] !== activeIndex || $[8] !== breakpoints.m || $[9] !== closeModal || $[10] !== forms || $[11] !== handleAddFiles || $[12] !== handleRemoveFile || $[13] !== i18n || $[14] !== initialFiles || $[15] !== isInitializing || $[16] !== maxFiles || $[17] !== openModal || $[18] !== setActiveIndex || $[19] !== showFiles || $[20] !== t || $[21] !== t4 || $[22] !== totalErrorCount || $[23] !== totalFileCount) {
    let t6;
    if ($[25] === Symbol.for("react.memo_cache_sentinel")) {
      t6 = () => setShowFiles(_temp2);
      $[25] = t6;
    } else {
      t6 = $[25];
    }
    let t7;
    if ($[26] !== closeModal) {
      t7 = () => closeModal(addMoreFilesDrawerSlug);
      $[26] = closeModal;
      $[27] = t7;
    } else {
      t7 = $[27];
    }
    let t8;
    if ($[28] !== activeIndex || $[29] !== handleRemoveFile || $[30] !== i18n || $[31] !== setActiveIndex || $[32] !== t) {
      t8 = (t9, index_0) => {
        const {
          errorCount,
          formID,
          formState
        } = t9;
        const currentFile = formState?.file?.value || {};
        return _jsxs("div", {
          className: [`${baseClass}__fileRowContainer`, index_0 === activeIndex && `${baseClass}__fileRowContainer--active`, errorCount && errorCount > 0 && `${baseClass}__fileRowContainer--error`].filter(Boolean).join(" "),
          children: [_jsxs("button", {
            className: `${baseClass}__fileRow`,
            onClick: () => setActiveIndex(index_0),
            type: "button",
            children: [_jsx(SidebarThumbnail, {
              file: currentFile,
              formID
            }), _jsx("div", {
              className: `${baseClass}__fileDetails`,
              children: _jsx("p", {
                className: `${baseClass}__fileName`,
                title: currentFile.name,
                children: currentFile.name || t("upload:noFile")
              })
            }), currentFile instanceof File ? _jsx("p", {
              className: `${baseClass}__fileSize`,
              children: getFileSize(currentFile)
            }) : null, _jsx("div", {
              className: `${baseClass}__remove ${baseClass}__remove--underlay`,
              children: _jsx(XIcon, {})
            }), errorCount ? _jsx(ErrorPill, {
              className: `${baseClass}__errorCount`,
              count: errorCount,
              i18n
            }) : null]
          }), _jsx("button", {
            "aria-label": t("general:remove"),
            className: `${baseClass}__remove ${baseClass}__remove--overlay`,
            onClick: () => handleRemoveFile(index_0),
            type: "button",
            children: _jsx(XIcon, {})
          })]
        }, formID);
      };
      $[28] = activeIndex;
      $[29] = handleRemoveFile;
      $[30] = i18n;
      $[31] = setActiveIndex;
      $[32] = t;
      $[33] = t8;
    } else {
      t8 = $[33];
    }
    t5 = _jsxs("div", {
      className: t4,
      children: [breakpoints.m && showFiles ? _jsx("div", {
        className: `${baseClass}__mobileBlur`
      }) : null, _jsxs("div", {
        className: `${baseClass}__header`,
        children: [_jsxs("div", {
          className: `${baseClass}__headerTopRow`,
          children: [_jsxs("div", {
            className: `${baseClass}__header__text`,
            children: [_jsx(ErrorPill, {
              count: totalErrorCount,
              i18n,
              withMessage: true
            }), _jsx("p", {
              children: _jsxs("strong", {
                title: `${totalFileCount} ${t(totalFileCount > 1 ? "upload:filesToUpload" : "upload:fileToUpload")}`,
                children: [totalFileCount, " ", t(totalFileCount > 1 ? "upload:filesToUpload" : "upload:fileToUpload")]
              })
            })]
          }), _jsxs("div", {
            className: `${baseClass}__header__actions`,
            children: [(typeof maxFiles === "number" ? totalFileCount < maxFiles : true) ? _jsx(Pill, {
              className: `${baseClass}__header__addFile`,
              onClick: () => openModal(addMoreFilesDrawerSlug),
              size: "small",
              children: t("upload:addFile")
            }) : null, _jsxs(Button, {
              buttonStyle: "transparent",
              className: `${baseClass}__toggler`,
              onClick: t6,
              children: [_jsx("span", {
                className: `${baseClass}__toggler__label`,
                children: _jsxs("strong", {
                  title: `${totalFileCount} ${t(totalFileCount > 1 ? "upload:filesToUpload" : "upload:fileToUpload")}`,
                  children: [totalFileCount, " ", t(totalFileCount > 1 ? "upload:filesToUpload" : "upload:fileToUpload")]
                })
              }), _jsx(ChevronIcon, {
                direction: showFiles ? "down" : "up"
              })]
            }), _jsx(Drawer, {
              gutter: false,
              Header: null,
              slug: addMoreFilesDrawerSlug,
              children: _jsx(AddFilesView, {
                onCancel: t7,
                onDrop: handleAddFiles
              })
            })]
          })]
        }), _jsx("div", {
          className: `${baseClass}__header__mobileDocActions`,
          children: _jsx(Actions, {})
        })]
      }), _jsx("div", {
        className: `${baseClass}__animateWrapper`,
        children: _jsx(AnimateHeight, {
          height: !breakpoints.m || showFiles ? "auto" : 0,
          children: _jsxs("div", {
            className: `${baseClass}__filesContainer`,
            children: [isInitializing && forms.length === 0 && initialFiles.length > 0 ? Array.from(initialFiles).map(_temp3) : null, forms.map(t8)]
          })
        })
      })]
    });
    $[7] = activeIndex;
    $[8] = breakpoints.m;
    $[9] = closeModal;
    $[10] = forms;
    $[11] = handleAddFiles;
    $[12] = handleRemoveFile;
    $[13] = i18n;
    $[14] = initialFiles;
    $[15] = isInitializing;
    $[16] = maxFiles;
    $[17] = openModal;
    $[18] = setActiveIndex;
    $[19] = showFiles;
    $[20] = t;
    $[21] = t4;
    $[22] = totalErrorCount;
    $[23] = totalFileCount;
    $[24] = t5;
  } else {
    t5 = $[24];
  }
  return t5;
}
function _temp3(file_0, index) {
  return _jsx(ShimmerEffect, {
    animationDelay: `calc(${index} * ${60}ms)`,
    height: "35px"
  }, index);
}
function _temp2(prev) {
  return !prev;
}
function _temp(file) {
  const size = file.size;
  const i = size === 0 ? 0 : Math.floor(Math.log(size) / Math.log(1024));
  const decimals = i > 1 ? 1 : 0;
  const formattedSize = (size / Math.pow(1024, i)).toFixed(decimals) + " " + ["B", "kB", "MB", "GB", "TB"][i];
  return formattedSize;
}
function SidebarThumbnail({
  file,
  formID
}) {
  const [thumbnailURL, setThumbnailURL] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(true);
  React.useEffect(() => {
    let isCancelled = false;
    async function generateThumbnail() {
      setIsLoading(true);
      setThumbnailURL(null);
      try {
        if (isImage(file.type)) {
          const url = await createThumbnail(file);
          if (!isCancelled) {
            setThumbnailURL(url);
          }
        } else {
          setThumbnailURL(null);
        }
      } catch (_) {
        if (!isCancelled) {
          setThumbnailURL(null);
        }
      } finally {
        if (!isCancelled) {
          setIsLoading(false);
        }
      }
    }
    void generateThumbnail();
    return () => {
      isCancelled = true;
    };
  }, [file]);
  if (isLoading) {
    return /*#__PURE__*/_jsx(ShimmerEffect, {
      className: `${baseClass}__thumbnail-shimmer`,
      disableInlineStyles: true
    });
  }
  return /*#__PURE__*/_jsx(Thumbnail, {
    className: `${baseClass}__thumbnail`,
    fileSrc: thumbnailURL
  }, `${formID}-${thumbnailURL || 'placeholder'}`);
}
//# sourceMappingURL=index.js.map