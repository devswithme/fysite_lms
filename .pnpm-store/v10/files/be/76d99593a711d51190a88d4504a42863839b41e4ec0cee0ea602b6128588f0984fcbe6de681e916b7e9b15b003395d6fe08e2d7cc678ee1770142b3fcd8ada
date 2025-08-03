import { findOneOperation, isolateObjectProperty } from 'payload';
export function findOne(globalConfig) {
    return async function resolver(_, args, context) {
        if (args.locale) {
            context.req.locale = args.locale;
        }
        if (args.fallbackLocale) {
            context.req.fallbackLocale = args.fallbackLocale;
        }
        const { slug } = globalConfig;
        const options = {
            slug,
            depth: 0,
            draft: args.draft,
            globalConfig,
            req: isolateObjectProperty(context.req, 'transactionID')
        };
        const result = await findOneOperation(options);
        return result;
    };
}

//# sourceMappingURL=findOne.js.map