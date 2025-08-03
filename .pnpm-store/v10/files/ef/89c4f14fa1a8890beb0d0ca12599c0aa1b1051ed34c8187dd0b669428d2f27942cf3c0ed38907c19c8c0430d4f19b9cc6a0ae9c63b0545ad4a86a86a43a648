'use client';

import { jsx as _jsx } from "react/jsx-runtime";
import React from 'react';
import { PlusIcon } from '../../icons/Plus/index.js';
import { XIcon } from '../../icons/X/index.js';
import { DraggableSortable } from '../DraggableSortable/index.js';
import { Pill } from '../Pill/index.js';
import './index.scss';
const baseClass = 'pill-selector';
/**
 * Displays a wrappable list of pills that can be selected or deselected.
 * If `draggable` is true, the pills can be reordered by dragging.
 */
export const PillSelector = ({
  draggable,
  onClick,
  pills
}) => {
  const Wrapper = React.useMemo(() => {
    if (draggable) {
      return ({
        children
      }) => /*#__PURE__*/_jsx(DraggableSortable, {
        className: baseClass,
        ids: pills.map(pill => pill.name),
        onDragEnd: ({
          moveFromIndex,
          moveToIndex
        }) => {
          draggable.onDragEnd({
            moveFromIndex,
            moveToIndex
          });
        },
        children: children
      });
    } else {
      return ({
        children: children_0
      }) => /*#__PURE__*/_jsx("div", {
        className: baseClass,
        children: children_0
      });
    }
  }, [draggable, pills]);
  return /*#__PURE__*/_jsx(Wrapper, {
    children: pills.map((pill_0, i) => {
      return /*#__PURE__*/_jsx(Pill, {
        alignIcon: "left",
        "aria-checked": pill_0.selected,
        className: [`${baseClass}__pill`, pill_0.selected && `${baseClass}__pill--selected`].filter(Boolean).join(' '),
        draggable: Boolean(draggable),
        icon: pill_0.selected ? /*#__PURE__*/_jsx(XIcon, {}) : /*#__PURE__*/_jsx(PlusIcon, {}),
        id: pill_0.name,
        onClick: () => {
          if (onClick) {
            void onClick({
              pill: pill_0
            });
          }
        },
        size: "small",
        children: pill_0.Label ?? /*#__PURE__*/_jsx("span", {
          className: `${baseClass}__pill-label`,
          children: pill_0.name
        })
      }, pill_0.key ?? `${pill_0.name}-${i}`);
    })
  });
};
//# sourceMappingURL=index.js.map