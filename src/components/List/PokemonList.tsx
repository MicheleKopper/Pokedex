import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardPokemon } from "../Card/CardPokemon";
import { AppDispatch, RootState } from "../store";
import { pokemonAsyncThunk } from "../store/modules/pokemonSlice";


export function PokemonList() {
  const dispatch = useDispatch<AppDispatch>();
  const { list, loading } = useSelector((state: RootState) => state.pokemon);

  useEffect(() => {
    dispatch(pokemonAsyncThunk());
  }, [dispatch]);

  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="card-container">
      {list.map((pokemon) => (
        <CardPokemon
          key={pokemon.id}
          name={pokemon.name}
          image={pokemon.image}
          id={pokemon.id}
          height={pokemon.height}
          weight={pokemon.weight}
        />
      ))}
    </div>
  );

}
