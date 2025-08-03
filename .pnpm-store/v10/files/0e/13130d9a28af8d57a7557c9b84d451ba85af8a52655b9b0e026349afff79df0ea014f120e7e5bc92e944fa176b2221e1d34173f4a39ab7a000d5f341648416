import type { ArrayFieldClient, BaseVersionField, BlocksFieldClient, ClientConfig, ClientField, VersionField } from 'payload';
/**
 * Get the fields for a row in an iterable field for comparison.
 * - Array fields: the fields of the array field, because the fields are the same for each row.
 * - Blocks fields: the union of fields from the comparison and version row,
 *   because the fields from the version and comparison rows may differ.
 */
export declare function getFieldsForRowComparison({ baseVersionField, comparisonRow, config, field, row, versionRow, }: {
    baseVersionField: BaseVersionField;
    comparisonRow: any;
    config: ClientConfig;
    field: ArrayFieldClient | BlocksFieldClient;
    row: number;
    versionRow: any;
}): {
    fields: ClientField[];
    versionFields: VersionField[];
};
//# sourceMappingURL=getFieldsForRowComparison.d.ts.map