import { configureStore } from "@reduxjs/toolkit";
import { pokemonReducer } from "./modules/pokemonSlice";


export const store = configureStore({
  reducer: {
    pokemon: pokemonReducer,
  },
});

// Tipos para o Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
