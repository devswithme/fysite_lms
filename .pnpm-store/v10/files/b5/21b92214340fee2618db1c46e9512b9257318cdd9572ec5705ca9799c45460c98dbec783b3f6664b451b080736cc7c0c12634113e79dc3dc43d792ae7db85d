'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getFieldPermissions } from 'payload/shared';
import React, { Fragment, useCallback, useEffect, useMemo, useState } from 'react';
import { toast } from 'sonner';
import { Button } from '../../../elements/Button/index.js';
import { EmailAndUsernameFields } from '../../../elements/EmailAndUsername/index.js';
import { CheckboxField } from '../../../fields/Checkbox/index.js';
import { ConfirmPasswordField } from '../../../fields/ConfirmPassword/index.js';
import { PasswordField } from '../../../fields/Password/index.js';
import { useFormFields, useFormModified } from '../../../forms/Form/context.js';
import { useAuth } from '../../../providers/Auth/index.js';
import { useConfig } from '../../../providers/Config/index.js';
import { useDocumentInfo } from '../../../providers/DocumentInfo/index.js';
import { useTranslation } from '../../../providers/Translation/index.js';
import { APIKey } from './APIKey.js';
import './index.scss';
const baseClass = 'auth-fields';
export const Auth = props => {
  const $ = _c(34);
  const {
    className,
    collectionSlug,
    disableLocalStrategy,
    email,
    loginWithUsername,
    operation,
    readOnly,
    requirePassword,
    setValidateBeforeSubmit,
    useAPIKey,
    username,
    verify
  } = props;
  const {
    permissions
  } = useAuth();
  const [changingPassword, setChangingPassword] = useState(requirePassword);
  const enableAPIKey = useFormFields(_temp);
  const dispatchFields = useFormFields(_temp2);
  const modified = useFormModified();
  const {
    i18n,
    t
  } = useTranslation();
  const {
    docPermissions,
    isEditing,
    isInitializing,
    isTrashed
  } = useDocumentInfo();
  const {
    config: t0
  } = useConfig();
  const {
    routes: t1,
    serverURL
  } = t0;
  const {
    api
  } = t1;
  let showPasswordFields = true;
  let showUnlock = true;
  const hasPasswordFieldOverride = typeof docPermissions.fields === "object" && "password" in docPermissions.fields;
  const hasLoginFieldOverride = typeof docPermissions.fields === "object" && ("username" in docPermissions.fields || "email" in docPermissions.fields);
  if (hasPasswordFieldOverride) {
    const {
      permissions: passwordPermissions
    } = getFieldPermissions({
      field: {
        name: "password",
        type: "text"
      },
      operation,
      parentName: "",
      permissions: docPermissions?.fields
    });
    if (operation === "create") {
      showPasswordFields = passwordPermissions === true || typeof passwordPermissions === "object" && passwordPermissions.create;
    } else {
      showPasswordFields = passwordPermissions === true || typeof passwordPermissions === "object" && passwordPermissions.update;
    }
  }
  if (hasLoginFieldOverride) {
    const hasEmailAndUsernameFields = loginWithUsername && (loginWithUsername.requireEmail || loginWithUsername.allowEmailLogin);
    const {
      operation: emailPermission
    } = getFieldPermissions({
      field: {
        name: "email",
        type: "text"
      },
      operation: "read",
      parentName: "",
      permissions: docPermissions?.fields
    });
    const {
      operation: usernamePermission
    } = getFieldPermissions({
      field: {
        name: "username",
        type: "text"
      },
      operation: "read",
      parentName: "",
      permissions: docPermissions?.fields
    });
    if (hasEmailAndUsernameFields) {
      showUnlock = usernamePermission || emailPermission;
    } else {
      if (loginWithUsername && !hasEmailAndUsernameFields) {
        showUnlock = usernamePermission;
      } else {
        showUnlock = emailPermission;
      }
    }
  }
  const enableFields = (!disableLocalStrategy || typeof disableLocalStrategy === "object" && disableLocalStrategy.enableFields === true) && (showUnlock || showPasswordFields);
  const disabled = readOnly || isInitializing || isTrashed;
  const apiKeyPermissions = docPermissions?.fields === true ? true : docPermissions?.fields?.enableAPIKey;
  const apiKeyReadOnly = readOnly || apiKeyPermissions === true || apiKeyPermissions && typeof apiKeyPermissions === "object" && !apiKeyPermissions?.update;
  const enableAPIKeyReadOnly = readOnly || apiKeyPermissions !== true && !apiKeyPermissions?.update;
  const canReadApiKey = apiKeyPermissions === true || apiKeyPermissions?.read;
  let t2;
  bb0: {
    const collection = permissions?.collections?.[collectionSlug];
    if (collection) {
      t2 = Boolean("unlock" in collection ? collection.unlock : undefined);
      break bb0;
    }
    t2 = false;
  }
  const hasPermissionToUnlock = t2;
  let t3;
  if ($[0] !== dispatchFields || $[1] !== setValidateBeforeSubmit || $[2] !== t) {
    t3 = changingPassword_0 => {
      if (changingPassword_0) {
        setValidateBeforeSubmit(true);
        dispatchFields({
          type: "UPDATE",
          errorMessage: t("validation:required"),
          path: "password",
          valid: false
        });
        dispatchFields({
          type: "UPDATE",
          errorMessage: t("validation:required"),
          path: "confirm-password",
          valid: false
        });
      } else {
        setValidateBeforeSubmit(false);
        dispatchFields({
          type: "REMOVE",
          path: "password"
        });
        dispatchFields({
          type: "REMOVE",
          path: "confirm-password"
        });
      }
      setChangingPassword(changingPassword_0);
    };
    $[0] = dispatchFields;
    $[1] = setValidateBeforeSubmit;
    $[2] = t;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const handleChangePassword = t3;
  let t4;
  if ($[4] !== api || $[5] !== collectionSlug || $[6] !== email || $[7] !== i18n || $[8] !== loginWithUsername || $[9] !== serverURL || $[10] !== t || $[11] !== username) {
    t4 = async () => {
      const url = `${serverURL}${api}/${collectionSlug}/unlock`;
      const response = await fetch(url, {
        body: loginWithUsername && username ? JSON.stringify({
          username
        }) : JSON.stringify({
          email
        }),
        credentials: "include",
        headers: {
          "Accept-Language": i18n.language,
          "Content-Type": "application/json"
        },
        method: "post"
      });
      if (response.status === 200) {
        toast.success(t("authentication:successfullyUnlocked"));
      } else {
        toast.error(t("authentication:failedToUnlock"));
      }
    };
    $[4] = api;
    $[5] = collectionSlug;
    $[6] = email;
    $[7] = i18n;
    $[8] = loginWithUsername;
    $[9] = serverURL;
    $[10] = t;
    $[11] = username;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  const unlock = t4;
  let t5;
  let t6;
  if ($[13] !== modified) {
    t5 = () => {
      if (!modified) {
        setChangingPassword(false);
      }
    };
    t6 = [modified];
    $[13] = modified;
    $[14] = t5;
    $[15] = t6;
  } else {
    t5 = $[14];
    t6 = $[15];
  }
  useEffect(t5, t6);
  if (disableLocalStrategy && !enableFields && !useAPIKey) {
    return null;
  }
  let t7;
  if ($[16] !== className) {
    t7 = [baseClass, className].filter(Boolean);
    $[16] = className;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  let t8;
  if ($[18] !== apiKeyReadOnly || $[19] !== canReadApiKey || $[20] !== collectionSlug || $[21] !== disabled || $[22] !== enableAPIKey?.value || $[23] !== enableAPIKeyReadOnly || $[24] !== t || $[25] !== useAPIKey) {
    t8 = useAPIKey && _jsx("div", {
      className: `${baseClass}__api-key`,
      children: canReadApiKey && _jsxs(Fragment, {
        children: [_jsx(CheckboxField, {
          field: {
            name: "enableAPIKey",
            admin: {
              disabled,
              readOnly: enableAPIKeyReadOnly
            },
            label: t("authentication:enableAPIKey")
          },
          path: "enableAPIKey",
          schemaPath: `${collectionSlug}.enableAPIKey`
        }), _jsx(APIKey, {
          enabled: !!enableAPIKey?.value,
          readOnly: apiKeyReadOnly
        })]
      })
    });
    $[18] = apiKeyReadOnly;
    $[19] = canReadApiKey;
    $[20] = collectionSlug;
    $[21] = disabled;
    $[22] = enableAPIKey?.value;
    $[23] = enableAPIKeyReadOnly;
    $[24] = t;
    $[25] = useAPIKey;
    $[26] = t8;
  } else {
    t8 = $[26];
  }
  let t9;
  if ($[27] !== collectionSlug || $[28] !== disabled || $[29] !== isEditing || $[30] !== readOnly || $[31] !== t || $[32] !== verify) {
    t9 = verify && isEditing && _jsx(CheckboxField, {
      field: {
        name: "_verified",
        admin: {
          disabled,
          readOnly
        },
        label: t("authentication:verified")
      },
      path: "_verified",
      schemaPath: `${collectionSlug}._verified`
    });
    $[27] = collectionSlug;
    $[28] = disabled;
    $[29] = isEditing;
    $[30] = readOnly;
    $[31] = t;
    $[32] = verify;
    $[33] = t9;
  } else {
    t9 = $[33];
  }
  return _jsxs("div", {
    className: t7.join(" "),
    children: [enableFields && _jsxs(React.Fragment, {
      children: [_jsx(EmailAndUsernameFields, {
        loginWithUsername,
        operation,
        permissions: docPermissions?.fields,
        readOnly: readOnly || isTrashed,
        t
      }), (changingPassword || requirePassword) && (!disableLocalStrategy || !enableFields) && _jsxs("div", {
        className: `${baseClass}__changing-password`,
        children: [_jsx(PasswordField, {
          autoComplete: "new-password",
          field: {
            name: "password",
            label: t("authentication:newPassword"),
            required: true
          },
          indexPath: "",
          parentPath: "",
          parentSchemaPath: "",
          path: "password",
          schemaPath: "password"
        }), _jsx(ConfirmPasswordField, {
          disabled: readOnly || isTrashed
        })]
      }), _jsxs("div", {
        className: `${baseClass}__controls`,
        children: [changingPassword && !requirePassword && _jsx(Button, {
          buttonStyle: "secondary",
          disabled,
          onClick: () => handleChangePassword(false),
          size: "medium",
          children: t("general:cancel")
        }), !changingPassword && !requirePassword && !disableLocalStrategy && showPasswordFields && _jsx(Button, {
          buttonStyle: "secondary",
          disabled,
          id: "change-password",
          onClick: () => handleChangePassword(true),
          size: "medium",
          children: t("authentication:changePassword")
        }), operation === "update" && hasPermissionToUnlock && _jsx(Button, {
          buttonStyle: "secondary",
          disabled: disabled || !showUnlock,
          onClick: () => void unlock(),
          size: "medium",
          children: t("authentication:forceUnlock")
        })]
      })]
    }), t8, t9]
  });
};
function _temp(t0) {
  const [fields] = t0;
  return fields && fields?.enableAPIKey || null;
}
function _temp2(reducer) {
  return reducer[1];
}
//# sourceMappingURL=index.js.map