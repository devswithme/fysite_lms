import type { BuildFormStateArgs, ClientConfig, ClientUser, ErrorResult, FormState, ServerFunction } from 'payload';
export type LockedState = {
    isLocked: boolean;
    lastEditedAt: string;
    user: ClientUser | number | string;
};
type BuildFormStateSuccessResult = {
    clientConfig?: ClientConfig;
    errors?: never;
    indexPath?: string;
    lockedState?: LockedState;
    state: FormState;
};
type BuildFormStateErrorResult = {
    lockedState?: never;
    state?: never;
} & ({
    message: string;
} | ErrorResult);
export type BuildFormStateResult = BuildFormStateErrorResult | BuildFormStateSuccessResult;
export declare const buildFormStateHandler: ServerFunction<BuildFormStateArgs, Promise<BuildFormStateResult>>;
export declare const buildFormState: (args: BuildFormStateArgs) => Promise<BuildFormStateSuccessResult>;
export {};
//# sourceMappingURL=buildFormState.d.ts.map