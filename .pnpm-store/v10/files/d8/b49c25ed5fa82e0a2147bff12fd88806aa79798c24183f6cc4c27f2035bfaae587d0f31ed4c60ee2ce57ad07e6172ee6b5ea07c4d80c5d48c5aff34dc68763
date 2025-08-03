import { findVersionByIDOperationGlobal, isolateObjectProperty } from 'payload';
export function findVersionByID(globalConfig) {
    return async function resolver(_, args, context) {
        if (args.locale) {
            context.req.locale = args.locale;
        }
        if (args.fallbackLocale) {
            context.req.fallbackLocale = args.fallbackLocale;
        }
        const options = {
            id: args.id,
            depth: 0,
            draft: args.draft,
            globalConfig,
            req: isolateObjectProperty(context.req, 'transactionID')
        };
        const result = await findVersionByIDOperationGlobal(options);
        return result;
    };
}

//# sourceMappingURL=findVersionByID.js.map