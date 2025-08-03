import { findVersionByIDOperation, isolateObjectProperty } from 'payload';
export function findVersionByIDResolver(collection) {
    return async function resolver(_, args, context) {
        let { req } = context;
        const locale = req.locale;
        const fallbackLocale = req.fallbackLocale;
        req = isolateObjectProperty(req, 'locale');
        req = isolateObjectProperty(req, 'fallbackLocale');
        req.locale = args.locale || locale;
        req.fallbackLocale = args.fallbackLocale || fallbackLocale;
        context.req = req;
        const options = {
            id: args.id,
            collection,
            depth: 0,
            req: isolateObjectProperty(req, 'transactionID'),
            trash: args.trash
        };
        const result = await findVersionByIDOperation(options);
        return result;
    };
}

//# sourceMappingURL=findVersionByID.js.map