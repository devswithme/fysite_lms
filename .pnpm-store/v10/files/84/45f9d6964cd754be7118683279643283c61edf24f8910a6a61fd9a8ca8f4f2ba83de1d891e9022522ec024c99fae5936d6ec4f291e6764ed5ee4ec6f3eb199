import type { ClientCollectionConfig, ClientConfig, ClientGlobalConfig, CollectionSlug, GlobalSlug, UnsanitizedClientConfig } from 'payload';
import React from 'react';
type GetEntityConfigFn = {
    (args: {
        collectionSlug: {} | CollectionSlug;
        globalSlug?: never;
    }): ClientCollectionConfig;
    (args: {
        collectionSlug?: never;
        globalSlug: {} | GlobalSlug;
    }): ClientGlobalConfig;
    (args: {
        collectionSlug?: {} | CollectionSlug;
        globalSlug?: {} | GlobalSlug;
    }): ClientCollectionConfig | ClientGlobalConfig | null;
};
export type ClientConfigContext = {
    config: ClientConfig;
    /**
     * Get a collection or global config by its slug. This is preferred over
     * using `config.collections.find` or `config.globals.find`, because
     * getEntityConfig uses a lookup map for O(1) lookups.
     */
    getEntityConfig: GetEntityConfigFn;
    setConfig: (config: ClientConfig) => void;
};
export declare const ConfigProvider: React.FC<{
    readonly children: React.ReactNode;
    readonly config: ClientConfig | UnsanitizedClientConfig;
}>;
export declare const useConfig: () => ClientConfigContext;
export {};
//# sourceMappingURL=index.d.ts.map