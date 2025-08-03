import { findOperation, isolateObjectProperty } from 'payload';
export function findResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = isolateObjectProperty(req, [
            'locale',
            'fallbackLocale',
            'transactionID'
        ]);
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        if (!req.query) {
            req.query = {};
        }
        const draft = args.draft ?? req.query?.draft === 'false' ? false : req.query?.draft === 'true' ? true : undefined;
        if (typeof draft === 'boolean') {
            req.query.draft = String(draft);
        }
        context.req = req;
        const options = {
            collection,
            depth: 0,
            draft: args.draft,
            limit: args.limit,
            page: args.page,
            pagination: args.pagination,
            req,
            sort: args.sort,
            trash: args.trash,
            where: args.where
        };
        const results = await findOperation(options);
        return results;
    };
}

//# sourceMappingURL=find.js.map