import type { Collection, PaginatedDocs, PayloadRequest, Where } from 'payload';
export type Resolver = (_: unknown, args: {
    draft?: boolean;
    fallbackLocale?: string;
    limit?: number;
    locale?: string;
    page?: number;
    pagination?: boolean;
    sort?: string;
    trash?: boolean;
    where: Where;
}, context: {
    req: PayloadRequest;
}) => Promise<PaginatedDocs<any>>;
export declare function findVersionsResolver(collection: Collection): Resolver;
//# sourceMappingURL=findVersions.d.ts.map