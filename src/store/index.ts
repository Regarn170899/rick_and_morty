import { configureStore } from '@reduxjs/toolkit'
import {planetsSlice} from "./slices/planetsSlice";


export const store = configureStore({
    reducer: {
       planets: planetsSlice.reducer,
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


