'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import React, { useEffect } from 'react';
import { useRouteTransition } from '../../providers/RouteTransition/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { isClientUserObject } from '../../utilities/isClientUserObject.js';
import { Button } from '../Button/index.js';
import { Modal, useModal } from '../Modal/index.js';
import './index.scss';
const modalSlug = 'document-locked';
const baseClass = 'document-locked';
const formatDate = date => {
  if (!date) {
    return '';
  }
  return new Intl.DateTimeFormat('en-US', {
    day: 'numeric',
    hour: 'numeric',
    hour12: true,
    minute: 'numeric',
    month: 'short',
    year: 'numeric'
  }).format(date);
};
export const DocumentLocked = t0 => {
  const $ = _c(30);
  const {
    handleGoBack,
    isActive,
    onReadOnly,
    onTakeOver,
    updatedAt,
    user
  } = t0;
  const {
    closeModal,
    openModal
  } = useModal();
  const {
    t
  } = useTranslation();
  const {
    startRouteTransition
  } = useRouteTransition();
  let t1;
  let t2;
  if ($[0] !== closeModal || $[1] !== isActive || $[2] !== openModal) {
    t1 = () => {
      if (isActive) {
        openModal(modalSlug);
      } else {
        closeModal(modalSlug);
      }
    };
    t2 = [isActive, openModal, closeModal];
    $[0] = closeModal;
    $[1] = isActive;
    $[2] = openModal;
    $[3] = t1;
    $[4] = t2;
  } else {
    t1 = $[3];
    t2 = $[4];
  }
  useEffect(t1, t2);
  let t3;
  if ($[5] !== handleGoBack || $[6] !== startRouteTransition) {
    t3 = () => {
      startRouteTransition(() => handleGoBack());
    };
    $[5] = handleGoBack;
    $[6] = startRouteTransition;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== closeModal || $[9] !== handleGoBack || $[10] !== onReadOnly || $[11] !== onTakeOver || $[12] !== startRouteTransition || $[13] !== t || $[14] !== t3 || $[15] !== updatedAt || $[16] !== user) {
    let t5;
    if ($[18] !== t || $[19] !== user) {
      t5 = isClientUserObject(user) ? user.email ?? user.id : `${t("general:user")}: ${user}`;
      $[18] = t;
      $[19] = user;
      $[20] = t5;
    } else {
      t5 = $[20];
    }
    let t6;
    if ($[21] !== handleGoBack || $[22] !== startRouteTransition) {
      t6 = () => {
        startRouteTransition(() => handleGoBack());
      };
      $[21] = handleGoBack;
      $[22] = startRouteTransition;
      $[23] = t6;
    } else {
      t6 = $[23];
    }
    let t7;
    if ($[24] !== closeModal || $[25] !== onReadOnly) {
      t7 = () => {
        onReadOnly();
        closeModal(modalSlug);
      };
      $[24] = closeModal;
      $[25] = onReadOnly;
      $[26] = t7;
    } else {
      t7 = $[26];
    }
    let t8;
    if ($[27] !== closeModal || $[28] !== onTakeOver) {
      t8 = () => {
        onTakeOver();
        closeModal(modalSlug);
      };
      $[27] = closeModal;
      $[28] = onTakeOver;
      $[29] = t8;
    } else {
      t8 = $[29];
    }
    t4 = _jsx(Modal, {
      className: baseClass,
      onClose: t3,
      slug: modalSlug,
      children: _jsxs("div", {
        className: `${baseClass}__wrapper`,
        children: [_jsxs("div", {
          className: `${baseClass}__content`,
          children: [_jsx("h1", {
            children: t("general:documentLocked")
          }), _jsxs("p", {
            children: [_jsx("strong", {
              children: t5
            }), " ", t("general:currentlyEditing")]
          }), _jsxs("p", {
            children: [t("general:editedSince"), " ", _jsx("strong", {
              children: formatDate(updatedAt)
            })]
          })]
        }), _jsxs("div", {
          className: `${baseClass}__controls`,
          children: [_jsx(Button, {
            buttonStyle: "secondary",
            id: `${modalSlug}-go-back`,
            onClick: t6,
            size: "large",
            children: t("general:goBack")
          }), _jsx(Button, {
            buttonStyle: "secondary",
            id: `${modalSlug}-view-read-only`,
            onClick: t7,
            size: "large",
            children: t("general:viewReadOnly")
          }), _jsx(Button, {
            buttonStyle: "primary",
            id: `${modalSlug}-take-over`,
            onClick: t8,
            size: "large",
            children: t("general:takeOver")
          })]
        })]
      })
    });
    $[8] = closeModal;
    $[9] = handleGoBack;
    $[10] = onReadOnly;
    $[11] = onTakeOver;
    $[12] = startRouteTransition;
    $[13] = t;
    $[14] = t3;
    $[15] = updatedAt;
    $[16] = user;
    $[17] = t4;
  } else {
    t4 = $[17];
  }
  return t4;
};
//# sourceMappingURL=index.js.map