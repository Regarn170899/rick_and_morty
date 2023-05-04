import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store/index";
import {
  getApiCharacters,
  getApiOnlyFavCharacters,
  getApiSingleCharacters,
} from "api";
import { RMCharacter } from "@customTypes/index";
import { checkIsFavorite, setIsFavoriteProp } from "@utils/index";

interface CharactersState {
  status: string;
  charactersList: RMCharacter[];
  favCharactersList: RMCharacter[];
  page: number;
  currentChar: RMCharacter | null;
}

const initialState: CharactersState = {
  status: "",
  charactersList: [],
  favCharactersList: [],
  page: 1,
  currentChar: null,
};
export const getCharacters = createAsyncThunk(
  "characters/getCharacters",
  async (page: number) => {
    const { results } = await getApiCharacters(page);
    return setIsFavoriteProp(results);
  }
);
export const getCurrentChar = createAsyncThunk(
  "CurrentChar/getCurrentChar",
  async (id: string) => {
    const character = await getApiSingleCharacters(id);
    return checkIsFavorite(character);
  }
);
export const getOnlyFavChars = createAsyncThunk(
  "OnlyFavChars/getOnlyFavChars",
  async (ids: number[]) => {
    const results = await getApiOnlyFavCharacters(ids);
    return setIsFavoriteProp(results);
  }
);

export const charactersSlice = createSlice({
  name: "characters",
  initialState,
  reducers: {
    updateFavorites(state, action: PayloadAction<RMCharacter>) {
      state.charactersList = state.charactersList.map(
        (character: RMCharacter) => {
          if (character.id === action.payload.id) {
            return {
              ...character,
              isFavorite: !character.isFavorite,
            };
          }
          return character;
        }
      );
    },
    updateFavOnFavoritesPage(state, action: PayloadAction<RMCharacter>) {
      state.favCharactersList = state.favCharactersList.filter(
        (character: RMCharacter) => character.id !== action.payload.id
      );
    },

    changeIsFavoriteCurrentChar(state) {
      if (state.currentChar === null) return;
      state.currentChar = {
        ...state.currentChar,
        isFavorite: !state.currentChar.isFavorite,
      };
    },
    setPage(state, action: PayloadAction<number>) {
      state.page = action.payload;
    },
    setCurrentChar(state, action: PayloadAction<RMCharacter>) {
      state.currentChar = action.payload;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getCharacters.pending, (state) => {
        state.status = "loading";
      })
      .addCase(getCharacters.fulfilled, (state, action) => {
        const results = action.payload;
        state.status = "success";
        if (state.charactersList.length > 0 && state.page === 1) {
          return;
        }
        state.charactersList = [...state.charactersList, ...results];
      })
      .addCase(getCurrentChar.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getCurrentChar.fulfilled, (state, action) => {
        state.status = "success";
        state.currentChar = action.payload;
      })
      .addCase(getOnlyFavChars.pending, (state) => {
        state.status = "loading";
      })

      .addCase(getOnlyFavChars.fulfilled, (state, action) => {
        const results = action.payload;
        state.status = "success";
        if (state.favCharactersList.length > 0) {
          return;
        }
        state.favCharactersList = [...state.favCharactersList, ...results];
      });
  },
});

export const selectCharacters = (state: RootState) =>
  state.characters.charactersList;
export const selectOnlyFavoriteChars = (state: RootState) =>
  state.characters.favCharactersList;
export const selectCurrentChar = (state: RootState) =>
  state.characters.currentChar;

export const {
  updateFavorites,
  updateFavOnFavoritesPage,
  setPage,
  setCurrentChar,
  changeIsFavoriteCurrentChar,
} = charactersSlice.actions;

export const selectPage = (state: RootState) => state.characters.page;
export default charactersSlice.reducer;
