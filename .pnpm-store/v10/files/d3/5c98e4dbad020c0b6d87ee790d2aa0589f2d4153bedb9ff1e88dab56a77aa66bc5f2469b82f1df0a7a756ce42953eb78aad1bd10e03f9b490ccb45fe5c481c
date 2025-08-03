export const buildIndexName = ({ name, adapter, number = 0 })=>{
    const indexName = `${name}${number ? `_${number}` : ''}_idx`;
    if (!adapter.indexes.has(indexName)) {
        adapter.indexes.add(indexName);
        return indexName;
    }
    return buildIndexName({
        name,
        adapter,
        number: number + 1
    });
};

//# sourceMappingURL=buildIndexName.js.map