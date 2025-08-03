import { findVersionsOperationGlobal, isolateObjectProperty } from 'payload';
export function findVersions(globalConfig) {
    return async function resolver(_, args, context) {
        const options = {
            depth: 0,
            globalConfig,
            limit: args.limit,
            page: args.page,
            pagination: args.pagination,
            req: isolateObjectProperty(context.req, 'transactionID'),
            sort: args.sort,
            where: args.where
        };
        const result = await findVersionsOperationGlobal(options);
        return result;
    };
}

//# sourceMappingURL=findVersions.js.map