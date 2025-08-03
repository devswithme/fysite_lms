import type { AdminViewServerProps, CollectionSlug, DocumentSubViewTypes, ImportMap, PayloadComponent, SanitizedConfig, ServerPropsFromView, ViewTypes } from 'payload';
import type React from 'react';
import type { initPage } from '../../utilities/initPage/index.js';
export type ViewFromConfig = {
    Component?: React.FC<AdminViewServerProps>;
    payloadComponent?: PayloadComponent<AdminViewServerProps>;
};
type GetRouteDataArgs = {
    adminRoute: string;
    config: SanitizedConfig;
    currentRoute: string;
    importMap: ImportMap;
    searchParams: {
        [key: string]: string | string[];
    };
    segments: string[];
};
type GetRouteDataResult = {
    browseByFolderSlugs: CollectionSlug[];
    DefaultView: ViewFromConfig;
    documentSubViewType?: DocumentSubViewTypes;
    folderID?: string;
    initPageOptions: Parameters<typeof initPage>[0];
    serverProps: ServerPropsFromView;
    templateClassName: string;
    templateType: 'default' | 'minimal';
    viewType?: ViewTypes;
};
export declare const getRouteData: ({ adminRoute, config, currentRoute, importMap, searchParams, segments, }: GetRouteDataArgs) => GetRouteDataResult;
export {};
//# sourceMappingURL=getRouteData.d.ts.map