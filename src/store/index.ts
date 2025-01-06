import { configureStore } from "@reduxjs/toolkit";
import { persistStore, persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage"; 
import { pokemonReducer } from "./modules/pokemonSlice";

// Configuração do redux-persist
const persistConfig = {
  key: "pokedex", 
  storage,
};

// Aplica o persistReducer ao pokemonReducer
const persistedReducer = persistReducer(persistConfig, pokemonReducer);

// Configuração do store
export const store = configureStore({
  reducer: {
    pokemon: persistedReducer, 
  },
});

// Cria o persistor
export const persistor = persistStore(store);

// Tipos para o Redux
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
