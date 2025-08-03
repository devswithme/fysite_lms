'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx } from "react/jsx-runtime";
import React, { useCallback } from 'react';
import { useForm, useFormModified } from '../../forms/Form/index.js';
import { useAuth } from '../../providers/Auth/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { ConfirmationModal } from '../ConfirmationModal/index.js';
import { useModal } from '../Modal/index.js';
import { usePreventLeave } from './usePreventLeave.js';
const modalSlug = 'leave-without-saving';
export const LeaveWithoutSaving = t0 => {
  const $ = _c(18);
  const {
    onConfirm,
    onPrevent
  } = t0;
  const {
    closeModal,
    openModal
  } = useModal();
  const modified = useFormModified();
  const {
    isValid
  } = useForm();
  const {
    user
  } = useAuth();
  const [hasAccepted, setHasAccepted] = React.useState(false);
  const {
    t
  } = useTranslation();
  const prevent = Boolean((modified || !isValid) && user);
  let t1;
  if ($[0] !== onPrevent || $[1] !== openModal) {
    t1 = () => {
      const activeHref = document.activeElement?.href || null;
      if (onPrevent) {
        onPrevent(activeHref);
      }
      openModal(modalSlug);
    };
    $[0] = onPrevent;
    $[1] = openModal;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handlePrevent = t1;
  let t2;
  if ($[3] !== closeModal) {
    t2 = () => {
      closeModal(modalSlug);
    };
    $[3] = closeModal;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const handleAccept = t2;
  let t3;
  if ($[5] !== handleAccept || $[6] !== handlePrevent || $[7] !== hasAccepted || $[8] !== prevent) {
    t3 = {
      hasAccepted,
      onAccept: handleAccept,
      onPrevent: handlePrevent,
      prevent
    };
    $[5] = handleAccept;
    $[6] = handlePrevent;
    $[7] = hasAccepted;
    $[8] = prevent;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  usePreventLeave(t3);
  let t4;
  if ($[10] !== closeModal) {
    t4 = () => {
      closeModal(modalSlug);
    };
    $[10] = closeModal;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  const onCancel = t4;
  let t5;
  if ($[12] !== onConfirm) {
    t5 = async () => {
      if (onConfirm) {
        ;
        try {
          await onConfirm();
        } catch (t6) {
          const err = t6;
          console.error("Error in LeaveWithoutSaving onConfirm:", err);
        }
      }
      setHasAccepted(true);
    };
    $[12] = onConfirm;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  const handleConfirm = t5;
  let t6;
  if ($[14] !== handleConfirm || $[15] !== onCancel || $[16] !== t) {
    t6 = _jsx(ConfirmationModal, {
      body: t("general:changesNotSaved"),
      cancelLabel: t("general:stayOnThisPage"),
      confirmLabel: t("general:leaveAnyway"),
      heading: t("general:leaveWithoutSaving"),
      modalSlug,
      onCancel,
      onConfirm: handleConfirm
    });
    $[14] = handleConfirm;
    $[15] = onCancel;
    $[16] = t;
    $[17] = t6;
  } else {
    t6 = $[17];
  }
  return t6;
};
//# sourceMappingURL=index.js.map