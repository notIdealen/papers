import { createContext, useContext } from 'react';

export const TableIDCtx = createContext<string>('');

export function useTableIDCtx() {
    const ctx = useContext(TableIDCtx);
    if (ctx === '') {
        throw new Error('useTableIDCtx: empty context');
    }
    return ctx;
}
