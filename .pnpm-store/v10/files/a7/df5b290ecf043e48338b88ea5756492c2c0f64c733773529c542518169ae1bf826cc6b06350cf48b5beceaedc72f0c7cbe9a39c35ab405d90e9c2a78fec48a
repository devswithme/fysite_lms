import type { Collection, PayloadRequest, TypeWithID, TypeWithVersion } from 'payload';
export type Resolver<T extends TypeWithID = any> = (_: unknown, args: {
    fallbackLocale?: string;
    id: number | string;
    locale?: string;
    trash?: boolean;
}, context: {
    req: PayloadRequest;
}) => Promise<TypeWithVersion<T>>;
export declare function findVersionByIDResolver(collection: Collection): Resolver;
//# sourceMappingURL=findVersionByID.d.ts.map