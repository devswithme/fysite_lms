/**
 * Returns current db transaction instance from req or adapter.drizzle itself
 */ export const getTransaction = async (adapter, req)=>{
    if (!req?.transactionID) {
        return adapter.drizzle;
    }
    return adapter.sessions[await req.transactionID]?.db || adapter.drizzle;
};

//# sourceMappingURL=getTransaction.js.map