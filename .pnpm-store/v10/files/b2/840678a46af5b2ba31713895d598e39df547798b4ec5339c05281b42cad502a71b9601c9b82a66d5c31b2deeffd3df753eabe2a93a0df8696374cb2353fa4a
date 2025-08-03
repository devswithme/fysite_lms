import type { LivePreviewConfig } from 'payload';
import type { fieldSchemaToJSON } from 'payload/shared';
import type { Dispatch } from 'react';
import type React from 'react';
import type { usePopupWindow } from '../../hooks/usePopupWindow.js';
import type { SizeReducerAction } from './sizeReducer.js';
export interface LivePreviewContextType {
    appIsReady: boolean;
    breakpoint: LivePreviewConfig['breakpoints'][number]['name'];
    breakpoints: LivePreviewConfig['breakpoints'];
    fieldSchemaJSON?: ReturnType<typeof fieldSchemaToJSON>;
    iframeHasLoaded: boolean;
    iframeRef: React.RefObject<HTMLIFrameElement | null>;
    isLivePreviewEnabled: boolean;
    isLivePreviewing: boolean;
    isPopupOpen: boolean;
    listeningForMessages?: boolean;
    measuredDeviceSize: {
        height: number;
        width: number;
    };
    openPopupWindow: ReturnType<typeof usePopupWindow>['openPopupWindow'];
    popupRef?: React.RefObject<null | Window>;
    previewWindowType: 'iframe' | 'popup';
    setAppIsReady: (appIsReady: boolean) => void;
    setBreakpoint: (breakpoint: LivePreviewConfig['breakpoints'][number]['name']) => void;
    setHeight: (height: number) => void;
    setIframeHasLoaded: (loaded: boolean) => void;
    setIsLivePreviewing: (isLivePreviewing: boolean) => void;
    setMeasuredDeviceSize: (size: {
        height: number;
        width: number;
    }) => void;
    setPreviewWindowType: (previewWindowType: 'iframe' | 'popup') => void;
    setSize: Dispatch<SizeReducerAction>;
    setToolbarPosition: (position: {
        x: number;
        y: number;
    }) => void;
    setWidth: (width: number) => void;
    setZoom: (zoom: number) => void;
    size: {
        height: number;
        width: number;
    };
    toolbarPosition: {
        x: number;
        y: number;
    };
    url: string | undefined;
    zoom: number;
}
export declare const LivePreviewContext: React.Context<LivePreviewContextType>;
export declare const useLivePreviewContext: () => LivePreviewContextType;
//# sourceMappingURL=context.d.ts.map