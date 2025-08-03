'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs } from "react/jsx-runtime";
import { getTranslation } from '@payloadcms/translations';
import { tabHasName, toKebabCase } from 'payload/shared';
import React, { useCallback, useEffect, useState } from 'react';
import { useCollapsible } from '../../elements/Collapsible/provider.js';
import { RenderCustomComponent } from '../../elements/RenderCustomComponent/index.js';
import { useFormFields } from '../../forms/Form/index.js';
import { RenderFields } from '../../forms/RenderFields/index.js';
import { useField } from '../../forms/useField/index.js';
import { withCondition } from '../../forms/withCondition/index.js';
import { useDocumentInfo } from '../../providers/DocumentInfo/index.js';
import { usePreferences } from '../../providers/Preferences/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { FieldDescription } from '../FieldDescription/index.js';
import { fieldBaseClass } from '../shared/index.js';
import { TabsProvider } from './provider.js';
import { TabComponent } from './Tab/index.js';
import './index.scss';
const baseClass = 'tabs-field';
export { TabsProvider };
function generateTabPath({
  activeTabConfig,
  path
}) {
  let tabPath = path;
  if (tabHasName(activeTabConfig) && activeTabConfig.name) {
    if (path) {
      tabPath = `${path}.${activeTabConfig.name}`;
    } else {
      tabPath = activeTabConfig.name;
    }
  }
  return tabPath;
}
const TabsFieldComponent = props => {
  const $ = _c(89);
  const {
    field: t0,
    forceRender: t1,
    indexPath: t2,
    parentPath: t3,
    parentSchemaPath: t4,
    path: t5,
    permissions,
    readOnly
  } = props;
  const {
    admin: t6,
    tabs: t7
  } = t0;
  let t8;
  if ($[0] !== t6) {
    t8 = t6 === undefined ? {} : t6;
    $[0] = t6;
    $[1] = t8;
  } else {
    t8 = $[1];
  }
  const {
    className
  } = t8;
  let t9;
  if ($[2] !== t7) {
    t9 = t7 === undefined ? [] : t7;
    $[2] = t7;
    $[3] = t9;
  } else {
    t9 = $[3];
  }
  const tabs = t9;
  const forceRender = t1 === undefined ? false : t1;
  const indexPath = t2 === undefined ? "" : t2;
  const parentPath = t3 === undefined ? "" : t3;
  const parentSchemaPath = t4 === undefined ? "" : t4;
  const path = t5 === undefined ? "" : t5;
  const {
    getPreference,
    setPreference
  } = usePreferences();
  const {
    preferencesKey
  } = useDocumentInfo();
  const {
    i18n
  } = useTranslation();
  const {
    isWithinCollapsible
  } = useCollapsible();
  let t10;
  if ($[4] !== tabs) {
    t10 = t11 => {
      const [fields] = t11;
      return tabs.map((tab, index) => {
        const id = tab?.id;
        return {
          index,
          passesCondition: fields?.[id]?.passesCondition ?? true,
          tab
        };
      });
    };
    $[4] = tabs;
    $[5] = t10;
  } else {
    t10 = $[5];
  }
  const tabStates = useFormFields(t10);
  let t11;
  if ($[6] !== tabStates) {
    t11 = () => tabStates.filter(_temp)?.[0]?.index ?? 0;
    $[6] = tabStates;
    $[7] = t11;
  } else {
    t11 = $[7];
  }
  const [activeTabIndex, setActiveTabIndex] = useState(t11);
  const tabsPrefKey = `tabs-${indexPath}`;
  let t12;
  if ($[8] !== activeTabIndex || $[9] !== parentPath || $[10] !== tabs) {
    t12 = () => generateTabPath({
      activeTabConfig: tabs[activeTabIndex],
      path: parentPath
    });
    $[8] = activeTabIndex;
    $[9] = parentPath;
    $[10] = tabs;
    $[11] = t12;
  } else {
    t12 = $[11];
  }
  const [activeTabPath, setActiveTabPath] = useState(t12);
  let t13;
  if ($[12] !== parentSchemaPath || $[13] !== tabs[0]) {
    t13 = () => generateTabPath({
      activeTabConfig: tabs[0],
      path: parentSchemaPath
    });
    $[12] = parentSchemaPath;
    $[13] = tabs[0];
    $[14] = t13;
  } else {
    t13 = $[14];
  }
  const [activeTabSchemaPath, setActiveTabSchemaPath] = useState(t13);
  let t14;
  if ($[15] !== activeTabIndex || $[16] !== activeTabPath || $[17] !== parentPath || $[18] !== tabs) {
    t14 = tabHasName(tabs[activeTabIndex]) ? activeTabPath : parentPath;
    $[15] = activeTabIndex;
    $[16] = activeTabPath;
    $[17] = parentPath;
    $[18] = tabs;
    $[19] = t14;
  } else {
    t14 = $[19];
  }
  const activePathChildrenPath = t14;
  const activeTabInfo = tabStates[activeTabIndex];
  const activeTabConfig = activeTabInfo?.tab;
  let t15;
  if ($[20] !== activeTabIndex || $[21] !== activeTabSchemaPath || $[22] !== parentSchemaPath || $[23] !== tabs) {
    t15 = tabHasName(tabs[activeTabIndex]) ? activeTabSchemaPath : parentSchemaPath;
    $[20] = activeTabIndex;
    $[21] = activeTabSchemaPath;
    $[22] = parentSchemaPath;
    $[23] = tabs;
    $[24] = t15;
  } else {
    t15 = $[24];
  }
  const activePathSchemaChildrenPath = t15;
  const activeTabDescription = activeTabConfig.admin?.description ?? activeTabConfig.description;
  let t16;
  if ($[25] !== activeTabDescription || $[26] !== i18n) {
    t16 = typeof activeTabDescription === "function" ? activeTabDescription({
      i18n,
      t: i18n.t
    }) : activeTabDescription;
    $[25] = activeTabDescription;
    $[26] = i18n;
    $[27] = t16;
  } else {
    t16 = $[27];
  }
  const activeTabStaticDescription = t16;
  const hasVisibleTabs = tabStates.some(_temp2);
  let t17;
  if ($[28] !== getPreference || $[29] !== parentPath || $[30] !== parentSchemaPath || $[31] !== path || $[32] !== preferencesKey || $[33] !== setPreference || $[34] !== tabs || $[35] !== tabsPrefKey) {
    t17 = async incomingTabIndex => {
      setActiveTabIndex(incomingTabIndex);
      setActiveTabPath(generateTabPath({
        activeTabConfig: tabs[incomingTabIndex],
        path: parentPath
      }));
      setActiveTabSchemaPath(generateTabPath({
        activeTabConfig: tabs[incomingTabIndex],
        path: parentSchemaPath
      }));
      const existingPreferences = await getPreference(preferencesKey);
      if (preferencesKey) {
        setPreference(preferencesKey, {
          ...existingPreferences,
          ...(path ? {
            fields: {
              ...(existingPreferences?.fields || {}),
              [path]: {
                ...existingPreferences?.fields?.[path],
                tabIndex: incomingTabIndex
              }
            }
          } : {
            fields: {
              ...existingPreferences?.fields,
              [tabsPrefKey]: {
                ...existingPreferences?.fields?.[tabsPrefKey],
                tabIndex: incomingTabIndex
              }
            }
          })
        });
      }
    };
    $[28] = getPreference;
    $[29] = parentPath;
    $[30] = parentSchemaPath;
    $[31] = path;
    $[32] = preferencesKey;
    $[33] = setPreference;
    $[34] = tabs;
    $[35] = tabsPrefKey;
    $[36] = t17;
  } else {
    t17 = $[36];
  }
  const handleTabChange = t17;
  let t18;
  let t19;
  if ($[37] !== getPreference || $[38] !== parentPath || $[39] !== parentSchemaPath || $[40] !== path || $[41] !== preferencesKey || $[42] !== tabs || $[43] !== tabsPrefKey) {
    t18 = () => {
      if (preferencesKey) {
        const getInitialPref = async () => {
          const existingPreferences_0 = await getPreference(preferencesKey);
          const initialIndex = path ? existingPreferences_0?.fields?.[path]?.tabIndex : existingPreferences_0?.fields?.[tabsPrefKey]?.tabIndex;
          const newIndex = initialIndex || 0;
          setActiveTabIndex(newIndex);
          setActiveTabPath(generateTabPath({
            activeTabConfig: tabs[newIndex],
            path: parentPath
          }));
          setActiveTabSchemaPath(generateTabPath({
            activeTabConfig: tabs[newIndex],
            path: parentSchemaPath
          }));
        };
        getInitialPref();
      }
    };
    t19 = [path, getPreference, preferencesKey, tabsPrefKey, tabs, parentPath, parentSchemaPath];
    $[37] = getPreference;
    $[38] = parentPath;
    $[39] = parentSchemaPath;
    $[40] = path;
    $[41] = preferencesKey;
    $[42] = tabs;
    $[43] = tabsPrefKey;
    $[44] = t18;
    $[45] = t19;
  } else {
    t18 = $[44];
    t19 = $[45];
  }
  useEffect(t18, t19);
  let t20;
  if ($[46] !== activeTabInfo?.passesCondition || $[47] !== handleTabChange || $[48] !== tabStates) {
    t20 = () => {
      if (activeTabInfo?.passesCondition === false) {
        const nextTab = tabStates.find(_temp3);
        if (nextTab) {
          handleTabChange(nextTab.index);
        }
      }
    };
    $[46] = activeTabInfo?.passesCondition;
    $[47] = handleTabChange;
    $[48] = tabStates;
    $[49] = t20;
  } else {
    t20 = $[49];
  }
  let t21;
  if ($[50] !== activeTabInfo || $[51] !== handleTabChange || $[52] !== tabStates) {
    t21 = [activeTabInfo, tabStates, handleTabChange];
    $[50] = activeTabInfo;
    $[51] = handleTabChange;
    $[52] = tabStates;
    $[53] = t21;
  } else {
    t21 = $[53];
  }
  useEffect(t20, t21);
  const t22 = isWithinCollapsible && `${baseClass}--within-collapsible`;
  const t23 = !hasVisibleTabs && `${baseClass}--hidden`;
  let t24;
  if ($[54] !== className || $[55] !== t22 || $[56] !== t23) {
    t24 = [fieldBaseClass, className, baseClass, t22, t23].filter(Boolean);
    $[54] = className;
    $[55] = t22;
    $[56] = t23;
    $[57] = t24;
  } else {
    t24 = $[57];
  }
  const t25 = t24.join(" ");
  let t26;
  if ($[58] !== activePathChildrenPath || $[59] !== activePathSchemaChildrenPath || $[60] !== activeTabConfig || $[61] !== activeTabIndex || $[62] !== activeTabInfo || $[63] !== activeTabPath || $[64] !== activeTabStaticDescription || $[65] !== forceRender || $[66] !== handleTabChange || $[67] !== indexPath || $[68] !== path || $[69] !== permissions || $[70] !== readOnly || $[71] !== t25 || $[72] !== tabStates) {
    let t27;
    if ($[74] !== activeTabIndex || $[75] !== handleTabChange || $[76] !== path) {
      t27 = t28 => {
        const {
          index: index_0,
          passesCondition: passesCondition_2,
          tab: tab_0
        } = t28;
        return _jsx(TabComponent, {
          hidden: !passesCondition_2,
          isActive: activeTabIndex === index_0,
          parentPath: path,
          setIsActive: () => {
            handleTabChange(index_0);
          },
          tab: tab_0
        }, index_0);
      };
      $[74] = activeTabIndex;
      $[75] = handleTabChange;
      $[76] = path;
      $[77] = t27;
    } else {
      t27 = $[77];
    }
    let t28;
    if ($[78] !== activePathChildrenPath || $[79] !== activePathSchemaChildrenPath || $[80] !== activeTabConfig || $[81] !== activeTabInfo || $[82] !== activeTabPath || $[83] !== activeTabStaticDescription || $[84] !== forceRender || $[85] !== indexPath || $[86] !== permissions || $[87] !== readOnly) {
      t28 = activeTabConfig && _jsx(TabContent, {
        description: activeTabStaticDescription,
        fields: activeTabConfig.fields,
        forceRender,
        hidden: false,
        parentIndexPath: tabHasName(activeTabConfig) ? "" : `${indexPath ? indexPath + "-" : ""}` + String(activeTabInfo.index),
        parentPath: activePathChildrenPath,
        parentSchemaPath: activePathSchemaChildrenPath,
        path: activeTabPath,
        permissions: permissions && typeof permissions === "object" && "name" in activeTabConfig ? permissions[activeTabConfig.name] && typeof permissions[activeTabConfig.name] === "object" && "fields" in permissions[activeTabConfig.name] ? permissions[activeTabConfig.name].fields : permissions[activeTabConfig.name] : permissions,
        readOnly
      });
      $[78] = activePathChildrenPath;
      $[79] = activePathSchemaChildrenPath;
      $[80] = activeTabConfig;
      $[81] = activeTabInfo;
      $[82] = activeTabPath;
      $[83] = activeTabStaticDescription;
      $[84] = forceRender;
      $[85] = indexPath;
      $[86] = permissions;
      $[87] = readOnly;
      $[88] = t28;
    } else {
      t28 = $[88];
    }
    t26 = _jsx("div", {
      className: t25,
      children: _jsxs(TabsProvider, {
        children: [_jsx("div", {
          className: `${baseClass}__tabs-wrap`,
          children: _jsx("div", {
            className: `${baseClass}__tabs`,
            children: tabStates.map(t27)
          })
        }), _jsx("div", {
          className: `${baseClass}__content-wrap`,
          children: t28
        })]
      })
    });
    $[58] = activePathChildrenPath;
    $[59] = activePathSchemaChildrenPath;
    $[60] = activeTabConfig;
    $[61] = activeTabIndex;
    $[62] = activeTabInfo;
    $[63] = activeTabPath;
    $[64] = activeTabStaticDescription;
    $[65] = forceRender;
    $[66] = handleTabChange;
    $[67] = indexPath;
    $[68] = path;
    $[69] = permissions;
    $[70] = readOnly;
    $[71] = t25;
    $[72] = tabStates;
    $[73] = t26;
  } else {
    t26 = $[73];
  }
  return t26;
};
export const TabsField = withCondition(TabsFieldComponent);
function TabContent(t0) {
  const $ = _c(19);
  const {
    description,
    fields,
    forceRender,
    hidden,
    label,
    parentIndexPath,
    parentPath,
    parentSchemaPath,
    permissions,
    readOnly
  } = t0;
  const {
    i18n
  } = useTranslation();
  const {
    customComponents: t1,
    path
  } = useField();
  let t2;
  if ($[0] !== t1) {
    t2 = t1 === undefined ? {} : t1;
    $[0] = t1;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const {
    AfterInput,
    BeforeInput,
    Description,
    Field
  } = t2;
  if (Field) {
    return Field;
  }
  const t3 = hidden && `${baseClass}__tab--hidden`;
  const t4 = label && `${baseClass}__tabConfigLabel-${toKebabCase(getTranslation(label, i18n))}`;
  let t5;
  if ($[2] !== t3 || $[3] !== t4) {
    t5 = [t3, `${baseClass}__tab`, t4].filter(Boolean);
    $[2] = t3;
    $[3] = t4;
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  const t6 = t5.join(" ");
  let t7;
  if ($[5] !== AfterInput || $[6] !== BeforeInput || $[7] !== Description || $[8] !== description || $[9] !== fields || $[10] !== forceRender || $[11] !== parentIndexPath || $[12] !== parentPath || $[13] !== parentSchemaPath || $[14] !== path || $[15] !== permissions || $[16] !== readOnly || $[17] !== t6) {
    t7 = _jsxs("div", {
      className: t6,
      children: [_jsx(RenderCustomComponent, {
        CustomComponent: Description,
        Fallback: _jsx(FieldDescription, {
          description,
          marginPlacement: "bottom",
          path
        })
      }), BeforeInput, _jsx(RenderFields, {
        fields,
        forceRender,
        parentIndexPath,
        parentPath,
        parentSchemaPath,
        permissions,
        readOnly
      }), AfterInput]
    });
    $[5] = AfterInput;
    $[6] = BeforeInput;
    $[7] = Description;
    $[8] = description;
    $[9] = fields;
    $[10] = forceRender;
    $[11] = parentIndexPath;
    $[12] = parentPath;
    $[13] = parentSchemaPath;
    $[14] = path;
    $[15] = permissions;
    $[16] = readOnly;
    $[17] = t6;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  return t7;
}
function _temp(t0) {
  const {
    passesCondition
  } = t0;
  return passesCondition;
}
function _temp2(t0) {
  const {
    passesCondition: passesCondition_0
  } = t0;
  return passesCondition_0;
}
function _temp3(t0) {
  const {
    passesCondition: passesCondition_1
  } = t0;
  return passesCondition_1;
}
//# sourceMappingURL=index.js.map