import type { Collection, CollectionSlug, DataFromCollectionSlug, PayloadRequest } from 'payload';
export type Resolver<TData> = (_: unknown, args: {
    draft: boolean;
    fallbackLocale?: string;
    id: string;
    locale?: string;
    trash?: boolean;
}, context: {
    req: PayloadRequest;
}) => Promise<TData>;
export declare function findByIDResolver<TSlug extends CollectionSlug>(collection: Collection): Resolver<DataFromCollectionSlug<TSlug>>;
//# sourceMappingURL=findByID.d.ts.map