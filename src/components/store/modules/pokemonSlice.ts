import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

// nome: typePrefix
// callback: payloadCreator
// (arg, thunkAPI) => {}
// arg: data(parametro)
// thunkAPI: objeto que contem algumas funcionalidades/ferramentas



const initialState = {
  list: [],
  details: null,
  favorites: [],
  loading: false,
};

// createAsyncThunk(nome, callback): Promise
// Buscar os dados da API - CARD
export const pokemonAsyncThunk = createAsyncThunk("pokemon/list", async () => {
  const response = await axios.get(
    "https://pokeapi.co/api/v2/pokemon?offset=20&limit=20"
  );
  return response.data.results;
});

// Buscar os dados da API - DETALHES
export const detailsPokemonAsyncThunk = createAsyncThunk(
  "pokemon/details",
  async (id) => {
    const response = await axios.get(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return response.data;
  }
);

// Criação do slice
const pokemonSlice = createSlice({
  name: "pokemon",
  initialState: initialState,
  reducers: {
    addFavorites: (state, action) => {
      state.favorites.push = action.payload;
    },
  },
  extraReducers(builder) {
    builder

      // pending = ainda não concluido
      .addCase(pokemonAsyncThunk.pending, (state) => {
        state.loading = true; // Está carregando
      })

      // fulfilled = está completo
      .addCase(pokemonAsyncThunk.fulfilled, (state, action) => {
        state.loading = false; // Para de carregar
        state.list = action.payload.results; // Atualiza os dados
      })

      .addCase(detailsPokemonAsyncThunk.fulfilled, (state, action) => {
        state.details = action.payload;
      });
  },
});

export const { addFavorites } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
