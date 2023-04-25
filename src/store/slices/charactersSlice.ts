import {createAsyncThunk, createSlice, PayloadAction,} from "@reduxjs/toolkit";
import { RootState } from "store/index";
import {getApiCharacters} from "api";
import {RMCharacter}from "@customTypes/index";
import { setIsFavoriteProp} from "@utils/index";


interface CharactersState {
    status: string;
    charactersList: RMCharacter[];
    page: number;
}

const initialState: CharactersState = {
    status: "",
    charactersList: [],
    page: 1,
};
export const getCharacters = createAsyncThunk(
    "characters/getCharacters",
    async (page: number) => {
        const {results} = await getApiCharacters(page);
        return setIsFavoriteProp(results);
    });

export const charactersSlice = createSlice({
    name: "characters",
    initialState,
    reducers: {
        updateFavorites(state,action:PayloadAction<RMCharacter>){
            state.charactersList=state.charactersList.map((character:RMCharacter)=>{
                if(character.id===action.payload.id){
                    return{
                        ...character,
                        isFavorite: !character.isFavorite,
                    }
                }
                return character;
            })
        },
        setPage(state,action:PayloadAction<number>){
            state.page=action.payload;
        }
    },

    extraReducers: (builder) => {
        builder
            .addCase(getCharacters.pending, (state) => {
                state.status = "loading";
            })
            .addCase(getCharacters.fulfilled, (state, action) => {
                const results = action.payload;
                state.status = "success";
                if(state.charactersList.length>0&& state.page===1){
                    return
                }
                state.charactersList = [...state.charactersList, ...results];
            });
    },
});

export const selectCharacters = (state: RootState) =>
    state.characters.charactersList;

export const {updateFavorites,setPage}=charactersSlice.actions

export const selectPage = (state: RootState) =>
    state.characters.page;
export default charactersSlice.reducer;