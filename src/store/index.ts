import { configureStore } from '@reduxjs/toolkit'
import {planetsSlice} from "./slices/planetsSlice";
import {charactersSlice} from "@store/slices/charactersSlice";


export const store = configureStore({
    reducer: {
       planets: planetsSlice.reducer,
       characters:charactersSlice.reducer
    },
})


export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch


