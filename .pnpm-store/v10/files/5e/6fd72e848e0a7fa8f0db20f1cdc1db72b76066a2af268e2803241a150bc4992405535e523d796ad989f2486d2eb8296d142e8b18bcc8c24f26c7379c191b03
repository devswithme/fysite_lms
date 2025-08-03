import { type FlattenedField } from 'payload';
import type { DrizzleAdapter } from '../../types.js';
import type { ArrayRowToInsert, BlockRowToInsert, NumberToDelete, RelationshipToDelete, TextToDelete } from './types.js';
type Args = {
    adapter: DrizzleAdapter;
    arrays: {
        [tableName: string]: ArrayRowToInsert[];
    };
    /**
     * This is the name of the base table
     */
    baseTableName: string;
    blocks: {
        [blockType: string]: BlockRowToInsert[];
    };
    blocksToDelete: Set<string>;
    /**
     * A snake-case field prefix, representing prior fields
     * Ex: my_group_my_named_tab_
     */
    columnPrefix: string;
    data: Record<string, unknown>;
    enableAtomicWrites?: boolean;
    existingLocales?: Record<string, unknown>[];
    /**
     * A prefix that will retain camel-case formatting, representing prior fields
     * Ex: myGroup_myNamedTab_
     */
    fieldPrefix: string;
    fields: FlattenedField[];
    forcedLocale?: string;
    /**
     * Tracks whether the current traversion context is from array or block.
     */
    insideArrayOrBlock?: boolean;
    locales: {
        [locale: string]: Record<string, unknown>;
    };
    numbers: Record<string, unknown>[];
    numbersToDelete: NumberToDelete[];
    parentIsLocalized: boolean;
    /**
     * This is the name of the parent table
     */
    parentTableName: string;
    path: string;
    relationships: Record<string, unknown>[];
    relationshipsToDelete: RelationshipToDelete[];
    row: Record<string, unknown>;
    selects: {
        [tableName: string]: Record<string, unknown>[];
    };
    texts: Record<string, unknown>[];
    textsToDelete: TextToDelete[];
    /**
     * Set to a locale code if this set of fields is traversed within a
     * localized array or block field
     */
    withinArrayOrBlockLocale?: string;
};
export declare const traverseFields: ({ adapter, arrays, baseTableName, blocks, blocksToDelete, columnPrefix, data, enableAtomicWrites, existingLocales, fieldPrefix, fields, forcedLocale, insideArrayOrBlock, locales, numbers, numbersToDelete, parentIsLocalized, parentTableName, path, relationships, relationshipsToDelete, row, selects, texts, textsToDelete, withinArrayOrBlockLocale, }: Args) => void;
export {};
//# sourceMappingURL=traverseFields.d.ts.map