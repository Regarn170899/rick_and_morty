import {createAsyncThunk, createSlice, PayloadAction,} from "@reduxjs/toolkit";
import { RootState } from "store/index";
import {getApiCharacters, getApiSingleCharacters} from "api";
import {RMCharacter}from "@customTypes/index";
import {checkIsFavorite, setIsFavoriteProp} from "@utils/index";


interface CharactersState {
    status: string;
    charactersList: RMCharacter[];
    page: number;
    currentChar:RMCharacter |null;
}

const initialState: CharactersState = {
    status: "",
    charactersList: [],
    page: 1,
    currentChar:null,
};
export const getCharacters = createAsyncThunk(
    "characters/getCharacters",
    async (page: number) => {
        const {results} = await getApiCharacters(page);
        return setIsFavoriteProp(results);
    });
export const getCurrentChar = createAsyncThunk(
    "CurrentChar/getCurrentChar",
    async (id: string) => {
        const character = await getApiSingleCharacters(id);
        return checkIsFavorite(character);
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
        changeIsFavoriteCurrentChar(state){
            if(state.currentChar===null)return;
            state.currentChar={...state.currentChar,isFavorite:!state.currentChar.isFavorite};
        },
        setPage(state,action:PayloadAction<number>){
            state.page=action.payload;
        },
        setCurrentChar(state,action:PayloadAction<RMCharacter>){
            state.currentChar=action.payload;
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
            })
            .addCase(getCurrentChar.pending, (state) => {
                state.status = "loading";
            })

            .addCase(getCurrentChar.fulfilled, (state, action) => {
                state.status = "success";
                state.currentChar =  action.payload;
            })
    },





});

export const selectCharacters = (state: RootState) =>
    state.characters.charactersList;
export const selectCurrentChar = (state: RootState) =>
    state.characters.currentChar;

export const {updateFavorites,setPage,setCurrentChar,changeIsFavoriteCurrentChar}=charactersSlice.actions

export const selectPage = (state: RootState) =>
    state.characters.page;
export default charactersSlice.reducer;