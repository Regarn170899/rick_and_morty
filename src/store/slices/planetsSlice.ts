import { createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'


export interface IPlanetsState {
    list: any[]
}

const initialState: IPlanetsState = {
    list:[],
}

export const planetsSlice = createSlice({
    name: 'counter',
    initialState,
    reducers: {
        setPlanets: (state, action: PayloadAction<any[]>) => {
            state.list = action.payload
        },

    },
})

export const { setPlanets} = planetsSlice.actions

export default planetsSlice.reducer