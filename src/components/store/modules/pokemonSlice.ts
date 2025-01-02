import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import axios from "axios";

interface Ability {
  ability: {
    name: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

interface Pokemon {
  name: string;
  image: string;
  id: number;
  height: number;
  weight: number;
  abilities: Ability[];
  stats: Stats[];
}

interface PokemonState {
  list: Pokemon[];
  details: Pokemon | null;
  favorites: Pokemon[];
  loading: boolean;
  total: number; 
  currentPage: number; // Página atual
}

const initialState: PokemonState = {
  list: [],
  details: null,
  favorites: [],
  loading: false,
  total: 0,
  currentPage: 1,
};

// createAsyncThunk(nome, callback): Promise
// Buscar os dados da API - CARD
export const pokemonAsyncThunk = createAsyncThunk<
  { results: Pokemon[]; total: number }, // Tipo do retorno
  { page: number; limit: number } // Parâmetros aceitos
>("pokemon/list", async ({ page, limit }) => {
  const offset = (page - 1) * limit; // Calcula offset com parâmetro da página atual

  const response = await axios.get(
    `https://pokeapi.co/api/v2/pokemon?offset=${offset}&limit=${limit}`
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
        abilities: details.data.abilities,
        stats: details.data.stats,
      };
    })
  );

  return { results: detailedPokemon, total: response.data.count };
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
    addFavorites: (state, action: PayloadAction<Pokemon>) => {
      const existsFavorite = state.favorites.some(
        (favorite) => favorite.id === action.payload.id
      );

      if (!existsFavorite) {
        state.favorites.push(action.payload);
      }
    },

    removeFavorites: (state, action: PayloadAction<number>) => {
      state.favorites = state.favorites.filter(
        (favorite) => favorite.id !== action.payload
      );
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
        (
          state,
          action: PayloadAction<{ results: Pokemon[]; total: number }>
        ) => {
          state.loading = false; // Para de carregar
          state.list = action.payload.results
          state.total = action.payload.total
        }
      )

      .addCase(detailsPokemonAsyncThunk.fulfilled, (state, action) => {
        state.details = action.payload;
      });
  },
});

export const { addFavorites, removeFavorites } = pokemonSlice.actions;
export const pokemonReducer = pokemonSlice.reducer;
