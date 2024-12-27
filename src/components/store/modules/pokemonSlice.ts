import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Pokemon {
  name: string;
  id: number;
  image: string;
  height: number;
  weight: number;
}

interface PokemonState {
  list: Pokemon[];
  details: Pokemon | null;
  favorites: Pokemon[];
  loading: boolean;
}

const initialState: PokemonState = {
  list: [],
  details: null,
  favorites: [],
  loading: false,
};

// createAsyncThunk(nome, callback): Promise
// Buscar os dados da API - CARD
export const pokemonAsyncThunk = createAsyncThunk<Pokemon[]>(
  "pokemon/list",
  async () => {
    const response = await axios.get(
      "https://pokeapi.co/api/v2/pokemon?offset=0&limit=20"
    );
    const results = response.data.results;

    // Obter detalhes adicionais para cada Pokémon
    const detailedPokemon = await Promise.all(
      results.map(async (pokemon: { name: string; url: string }) => {
        const details = await axios.get(pokemon.url);
        return {
          name: details.data.name,
          id: details.data.id,
          image: details.data.sprites.other.home.front_default,
          height: details.data.height,
          weight: details.data.weight,
        };
      })
    );

    return detailedPokemon;
  }
);

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
    addFavorites: (state, action: PayloadAction<Pokemon>) => {
      state.favorites.push(action.payload);
    },
  },
  extraReducers(builder) {
    builder

      // pending = ainda não concluido
      .addCase(pokemonAsyncThunk.pending, (state) => {
        state.loading = true; // Está carregando
      })

      // fulfilled = está completo
      .addCase(
        pokemonAsyncThunk.fulfilled,
        (state, action: PayloadAction<Pokemon[]>) => {
          state.loading = false; // Para de carregar
          state.list = action.payload;
        }
      )

      .addCase(detailsPokemonAsyncThunk.fulfilled, (state, action) => {
        state.details = action.payload;
      });
  },
});

export const { addFavorites } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;