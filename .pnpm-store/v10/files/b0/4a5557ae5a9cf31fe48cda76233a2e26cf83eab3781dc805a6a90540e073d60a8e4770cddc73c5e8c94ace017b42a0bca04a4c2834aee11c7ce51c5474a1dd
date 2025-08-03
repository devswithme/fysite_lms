import type { Collection, PaginatedDocs, PayloadRequest, Where } from 'payload';
export type Resolver = (_: unknown, args: {
    data: Record<string, unknown>;
    draft: boolean;
    fallbackLocale?: string;
    limit?: number;
    locale?: string;
    page?: number;
    pagination?: boolean;
    sort?: string;
    trash?: boolean;
    where?: Where;
}, context: {
    req: PayloadRequest;
}) => Promise<PaginatedDocs<any>>;
export declare function findResolver(collection: Collection): Resolver;
//# sourceMappingURL=find.d.ts.map