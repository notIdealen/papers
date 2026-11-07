import type { Middleware } from '@reduxjs/toolkit';

export const simpleMW: Middleware = (storeAPI) => (next) => (action) => {
    console.log('DState:', storeAPI.getState().TEST[0]);
    console.log('DNext:', next);
    console.log('DAction:', action);
    const res = next(action);
    console.log('PState:', storeAPI.getState().TEST[0]);
    console.log('PNext:', next);
    console.log('PAction:', action);
    console.log('PRES:', res);
    return res;
};
export const simpleMW2: Middleware = () => (next) => (action) => {
    console.log('MW@@@22222');
    return next(action);
};
export const simpleMW3: Middleware = () => (next) => (action) => {
    console.log('MW333333333333333333333');
    return next(action);
};
