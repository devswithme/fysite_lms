import type { FormState } from 'payload';
type Args = {
    acceptValues?: boolean;
    currentState?: FormState;
    incomingState: FormState;
};
/**
 * This function receives form state from the server and intelligently merges it into the client state.
 * The server contains extra properties that the client may not have, e.g. custom components and error states.
 * We typically do not want to merge properties that rely on user input, however, such as values, unless explicitly requested.
 * Doing this would cause the client to lose any local changes to those fields.
 *
 * This function will also a few defaults, as well as clean up the server response in preparation for the client.
 * e.g. it will set `valid` and `passesCondition` to true if undefined, and remove `addedByServer` from the response.
 */
export declare const mergeServerFormState: ({ acceptValues, currentState, incomingState, }: Args) => FormState;
export {};
//# sourceMappingURL=mergeServerFormState.d.ts.map