import { configureStore } from '@reduxjs/toolkit';
import tableSliceReducer from './table.slice';
import testSliceReducer from './test.slice';

export const store = configureStore({
    reducer: {
        TABLE: tableSliceReducer,
        TEST: testSliceReducer,
    },
    // middleware: () => new Tuple(simpleMW, simpleMW2, simpleMW3), 
    // middleware: (getDefaultMiddleware) => {
    //     return getDefaultMiddleware({
    //         thunk: false,              // отключаем thunk
    //         serializableCheck: false,  // отключаем проверку сериализуемости
    //         immutableCheck: false,     // отключаем проверку мутаций
    //     }).concat(simpleMW);
    // },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
