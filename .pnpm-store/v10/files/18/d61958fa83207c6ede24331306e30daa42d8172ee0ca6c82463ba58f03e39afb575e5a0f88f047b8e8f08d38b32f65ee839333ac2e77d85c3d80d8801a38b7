'use client';

import { c as _c } from "react/compiler-runtime";
import { jsx as _jsx, jsxs as _jsxs, Fragment as _Fragment } from "react/jsx-runtime";
import { useDndMonitor } from '@dnd-kit/core';
import { getTranslation } from '@payloadcms/translations';
import { useRouter } from 'next/navigation.js';
import React, { Fragment } from 'react';
import { DroppableBreadcrumb } from '../../elements/FolderView/Breadcrumbs/index.js';
import { ColoredFolderIcon } from '../../elements/FolderView/ColoredFolderIcon/index.js';
import { CurrentFolderActions } from '../../elements/FolderView/CurrentFolderActions/index.js';
import { DragOverlaySelection } from '../../elements/FolderView/DragOverlaySelection/index.js';
import { FilterFolderTypePill } from '../../elements/FolderView/FilterFolderTypePill/index.js';
import { FolderFileTable } from '../../elements/FolderView/FolderFileTable/index.js';
import { ItemCardGrid } from '../../elements/FolderView/ItemCardGrid/index.js';
import { SortByPill } from '../../elements/FolderView/SortByPill/index.js';
import { ToggleViewButtons } from '../../elements/FolderView/ToggleViewButtons/index.js';
import { Gutter } from '../../elements/Gutter/index.js';
import { ListHeader } from '../../elements/ListHeader/index.js';
import { ListCreateNewDocInFolderButton } from '../../elements/ListHeader/TitleActions/index.js';
import { NoListResults } from '../../elements/NoListResults/index.js';
import { SearchBar } from '../../elements/SearchBar/index.js';
import { useStepNav } from '../../elements/StepNav/index.js';
import { useConfig } from '../../providers/Config/index.js';
import { useEditDepth } from '../../providers/EditDepth/index.js';
import { FolderProvider, useFolder } from '../../providers/Folders/index.js';
import { usePreferences } from '../../providers/Preferences/index.js';
import { useRouteCache } from '../../providers/RouteCache/index.js';
import { useRouteTransition } from '../../providers/RouteTransition/index.js';
import { useTranslation } from '../../providers/Translation/index.js';
import { useWindowInfo } from '../../providers/WindowInfo/index.js';
import { ListSelection } from '../CollectionFolder/ListSelection/index.js';
import './index.scss';
const baseClass = 'folder-list';
export function DefaultBrowseByFolderView({
  activeCollectionFolderSlugs,
  allCollectionFolderSlugs,
  allowCreateCollectionSlugs,
  baseFolderPath,
  breadcrumbs,
  documents,
  folderFieldName,
  folderID,
  FolderResultsComponent,
  search,
  subfolders,
  ...restOfProps
}) {
  return /*#__PURE__*/_jsx(FolderProvider, {
    activeCollectionFolderSlugs: activeCollectionFolderSlugs,
    allCollectionFolderSlugs: allCollectionFolderSlugs,
    allowCreateCollectionSlugs: allowCreateCollectionSlugs,
    baseFolderPath: baseFolderPath,
    breadcrumbs: breadcrumbs,
    documents: documents,
    folderFieldName: folderFieldName,
    folderID: folderID,
    FolderResultsComponent: FolderResultsComponent,
    search: search,
    subfolders: subfolders,
    children: /*#__PURE__*/_jsx(BrowseByFolderViewInContext, {
      ...restOfProps
    })
  });
}
function BrowseByFolderViewInContext(props) {
  const $ = _c(30);
  const {
    AfterFolderList,
    AfterFolderListTable,
    BeforeFolderList,
    BeforeFolderListTable,
    Description,
    disableBulkDelete,
    disableBulkEdit,
    folderAssignedCollections,
    viewPreference
  } = props;
  const router = useRouter();
  const {
    getEntityConfig
  } = useConfig();
  const {
    i18n,
    t
  } = useTranslation();
  const drawerDepth = useEditDepth();
  const {
    setStepNav
  } = useStepNav();
  const {
    startRouteTransition
  } = useRouteTransition();
  const {
    clearRouteCache
  } = useRouteCache();
  const {
    breakpoints: t0
  } = useWindowInfo();
  const {
    s: smallBreak
  } = t0;
  const {
    setPreference
  } = usePreferences();
  const {
    activeCollectionFolderSlugs: visibleCollectionSlugs,
    allowCreateCollectionSlugs,
    breadcrumbs,
    documents,
    dragOverlayItem,
    folderCollectionConfig,
    folderID,
    folderType,
    getFolderRoute,
    getSelectedItems,
    moveToFolder,
    refineFolderData,
    search,
    selectedItemKeys,
    setIsDragging,
    subfolders
  } = useFolder();
  const [activeView, setActiveView] = React.useState(viewPreference || "grid");
  let t1;
  if ($[0] !== breadcrumbs || $[1] !== folderCollectionConfig || $[2] !== i18n || $[3] !== t) {
    t1 = () => {
      const locationLabel = breadcrumbs.length === 0 ? getTranslation(folderCollectionConfig.labels?.plural, i18n) : breadcrumbs[breadcrumbs.length - 1].name;
      return t("folder:searchByNameInFolder", {
        folderName: locationLabel
      });
    };
    $[0] = breadcrumbs;
    $[1] = folderCollectionConfig;
    $[2] = i18n;
    $[3] = t;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  const [searchPlaceholder] = React.useState(t1);
  let t2;
  if ($[5] !== clearRouteCache || $[6] !== getSelectedItems || $[7] !== moveToFolder) {
    t2 = async event => {
      if (!event.over) {
        return;
      }
      if (event.over.data.current.type === "folder" && "id" in event.over.data.current) {
        await moveToFolder({
          itemsToMove: getSelectedItems(),
          toFolderID: event.over.data.current.id || null
        });
        clearRouteCache();
      }
    };
    $[5] = clearRouteCache;
    $[6] = getSelectedItems;
    $[7] = moveToFolder;
    $[8] = t2;
  } else {
    t2 = $[8];
  }
  const onDragEnd = t2;
  const totalDocsAndSubfolders = documents.length + subfolders.length;
  let t3;
  if ($[9] !== breadcrumbs || $[10] !== t) {
    t3 = !breadcrumbs.length ? t("folder:browseByFolder") : breadcrumbs[breadcrumbs.length - 1].name;
    $[9] = breadcrumbs;
    $[10] = t;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  const listHeaderTitle = t3;
  let t4;
  if ($[12] !== getEntityConfig || $[13] !== i18n || $[14] !== t) {
    t4 = (acc, slug, index, array) => {
      const collectionConfig = getEntityConfig({
        collectionSlug: slug
      });
      if (index === 0) {
        return getTranslation(collectionConfig.labels?.plural, i18n);
      }
      if (index === array.length - 1) {
        return `${acc} ${t("general:or").toLowerCase()} ${getTranslation(collectionConfig.labels?.plural, i18n)}`;
      }
      return `${acc}, ${getTranslation(collectionConfig.labels?.plural, i18n)}`;
    };
    $[12] = getEntityConfig;
    $[13] = i18n;
    $[14] = t;
    $[15] = t4;
  } else {
    t4 = $[15];
  }
  const noResultsLabel = visibleCollectionSlugs.reduce(t4, "");
  const handleSetViewType = view => {
    setPreference("browse-by-folder", {
      viewPreference: view
    });
    setActiveView(view);
  };
  let t5;
  let t6;
  if ($[16] !== breadcrumbs || $[17] !== drawerDepth || $[18] !== getFolderRoute || $[19] !== router || $[20] !== setStepNav || $[21] !== startRouteTransition || $[22] !== t) {
    t5 = () => {
      if (!drawerDepth) {
        setStepNav([!breadcrumbs.length ? {
          label: _jsxs("div", {
            className: `${baseClass}__step-nav-icon-label`,
            children: [_jsx(ColoredFolderIcon, {}), t("folder:browseByFolder")]
          }, "root")
        } : {
          label: _jsxs(DroppableBreadcrumb, {
            className: [`${baseClass}__step-nav-droppable`, `${baseClass}__step-nav-icon-label`].filter(Boolean).join(" "),
            id: null,
            onClick: () => {
              startRouteTransition(() => {
                router.push(getFolderRoute(null));
              });
            },
            children: [_jsx(ColoredFolderIcon, {}), t("folder:browseByFolder")]
          }, "root")
        }, ...breadcrumbs.map((crumb, crumbIndex) => ({
          label: crumbIndex === breadcrumbs.length - 1 ? crumb.name : _jsx(DroppableBreadcrumb, {
            className: `${baseClass}__step-nav-droppable`,
            id: crumb.id,
            onClick: () => {
              startRouteTransition(() => {
                router.push(getFolderRoute(crumb.id));
              });
            },
            children: crumb.name
          }, crumb.id)
        }))]);
      }
    };
    t6 = [breadcrumbs, drawerDepth, getFolderRoute, router, setStepNav, startRouteTransition, t];
    $[16] = breadcrumbs;
    $[17] = drawerDepth;
    $[18] = getFolderRoute;
    $[19] = router;
    $[20] = setStepNav;
    $[21] = startRouteTransition;
    $[22] = t;
    $[23] = t5;
    $[24] = t6;
  } else {
    t5 = $[23];
    t6 = $[24];
  }
  React.useEffect(t5, t6);
  const nonFolderCollectionSlugs = allowCreateCollectionSlugs.filter(slug_0 => slug_0 !== folderCollectionConfig.slug);
  let t7;
  if ($[25] !== refineFolderData) {
    t7 = search_0 => refineFolderData({
      query: {
        search: search_0
      },
      updateURL: true
    });
    $[25] = refineFolderData;
    $[26] = t7;
  } else {
    t7 = $[26];
  }
  let t8;
  if ($[27] !== dragOverlayItem || $[28] !== selectedItemKeys.size) {
    t8 = selectedItemKeys.size > 0 && dragOverlayItem && _jsx(DragOverlaySelection, {
      item: dragOverlayItem,
      selectedCount: selectedItemKeys.size
    });
    $[27] = dragOverlayItem;
    $[28] = selectedItemKeys.size;
    $[29] = t8;
  } else {
    t8 = $[29];
  }
  return _jsxs(Fragment, {
    children: [_jsx(DndEventListener, {
      onDragEnd,
      setIsDragging
    }), _jsxs("div", {
      className: `${baseClass} ${baseClass}--folders`,
      children: [BeforeFolderList, _jsxs(Gutter, {
        className: `${baseClass}__wrap`,
        children: [_jsx(ListHeader, {
          Actions: [!smallBreak && _jsx(ListSelection, {
            disableBulkDelete,
            disableBulkEdit,
            folderAssignedCollections
          }, "list-selection")].filter(Boolean),
          AfterListHeaderContent: Description,
          title: listHeaderTitle,
          TitleActions: [allowCreateCollectionSlugs.length && _jsx(ListCreateNewDocInFolderButton, {
            buttonLabel: t("general:createNew"),
            collectionSlugs: allowCreateCollectionSlugs,
            folderAssignedCollections: Array.isArray(folderType) ? folderType : [],
            onCreateSuccess: clearRouteCache,
            slugPrefix: "create-document--header-pill"
          }, "create-new-button")].filter(Boolean)
        }), _jsx(SearchBar, {
          Actions: [_jsx(SortByPill, {}, "sort-by-pill"), folderID && _jsx(FilterFolderTypePill, {}, "collection-type"), _jsx(ToggleViewButtons, {
            activeView,
            setActiveView: handleSetViewType
          }, "toggle-view-buttons"), _jsx(CurrentFolderActions, {}, "current-folder-actions")].filter(Boolean),
          label: searchPlaceholder,
          onSearchChange: t7,
          searchQueryParam: search
        }), BeforeFolderListTable, totalDocsAndSubfolders > 0 && _jsx(_Fragment, {
          children: activeView === "grid" ? _jsxs("div", {
            children: [subfolders.length ? _jsx(_Fragment, {
              children: _jsx(ItemCardGrid, {
                items: subfolders,
                title: "Folders",
                type: "folder"
              })
            }) : null, documents.length ? _jsx(_Fragment, {
              children: _jsx(ItemCardGrid, {
                items: documents,
                subfolderCount: subfolders.length,
                title: "Documents",
                type: "file"
              })
            }) : null]
          }) : _jsx(FolderFileTable, {})
        }), totalDocsAndSubfolders === 0 && _jsx(NoListResults, {
          Actions: [allowCreateCollectionSlugs.includes(folderCollectionConfig.slug) && _jsx(ListCreateNewDocInFolderButton, {
            buttonLabel: `${t("general:create")} ${getTranslation(folderCollectionConfig.labels?.singular, i18n).toLowerCase()}`,
            collectionSlugs: [folderCollectionConfig.slug],
            folderAssignedCollections: Array.isArray(folderType) ? folderType : [],
            onCreateSuccess: clearRouteCache,
            slugPrefix: "create-folder--no-results"
          }, "create-folder"), folderID && nonFolderCollectionSlugs.length > 0 && _jsx(ListCreateNewDocInFolderButton, {
            buttonLabel: `${t("general:create")} ${t("general:document").toLowerCase()}`,
            collectionSlugs: nonFolderCollectionSlugs,
            folderAssignedCollections: Array.isArray(folderType) ? folderType : [],
            onCreateSuccess: clearRouteCache,
            slugPrefix: "create-document--no-results"
          }, "create-document")].filter(Boolean),
          Message: _jsx("p", {
            children: i18n.t("general:noResults", {
              label: noResultsLabel
            })
          })
        }), AfterFolderListTable]
      }), AfterFolderList]
    }), t8]
  });
}
function DndEventListener(t0) {
  const $ = _c(3);
  const {
    onDragEnd,
    setIsDragging
  } = t0;
  let t1;
  if ($[0] !== onDragEnd || $[1] !== setIsDragging) {
    t1 = {
      onDragCancel() {
        setIsDragging(false);
      },
      onDragEnd(event) {
        setIsDragging(false);
        onDragEnd(event);
      },
      onDragStart() {
        setIsDragging(true);
      }
    };
    $[0] = onDragEnd;
    $[1] = setIsDragging;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  useDndMonitor(t1);
  return null;
}
//# sourceMappingURL=index.js.map