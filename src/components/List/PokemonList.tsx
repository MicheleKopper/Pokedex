import { useEffect } from "react";
import { CardPokemon } from "../Card/CardPokemon";
import { useDispatch, useSelector } from "react-redux";
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
    <>
      {list.map((pokemon: { name: string; url: string }, index: number) => (
        <CardPokemon
          key={index}
          name={pokemon.name}
          image={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${
            index + 1
          }.png`}
          id={index + 1}
          height={0} // Se necessário, busque os detalhes com uma nova chamada de API
          weight={0} // Idem acima
        />
      ))}
    </>
  );
}
