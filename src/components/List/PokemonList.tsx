import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardPokemon } from "../Card/CardPokemon";
import { AppDispatch, RootState } from "../store";
import { pokemonAsyncThunk } from "../store/modules/pokemonSlice";
import { Pagination } from "@mui/material";

export function PokemonList() {
  const dispatch = useDispatch<AppDispatch>();

  // Estado da página
  const [page, setPage] = useState(1);

  // Estado global
  const { list, loading, total, favorites } = useSelector(
    (state: RootState) => state.pokemon
  );

  // Busca os Pokemons na página atual
  useEffect(() => {
    dispatch(pokemonAsyncThunk({ page, limit: 20 }));
  }, [dispatch, page]);

  // Manipula a paginação
  const handleChange = (_: React.ChangeEvent<unknown>, value: number) => {
    setPage(value);
  };

  // Renderização condicional
  if (loading) {
    return <p>Carregando...</p>;
  }

  return (
    <div className="pokemon-list">
      <div className="card-container">
        {list.map((pokemon) => (
          <CardPokemon
            key={pokemon.id}
            name={pokemon.name}
            image={pokemon.image}
            id={pokemon.id}
            height={pokemon.height}
            weight={pokemon.weight}
            abilities={pokemon.abilities}
            stats={pokemon.stats}
          />
        ))}
      </div>
      <Pagination
        count={Math.ceil(total / 20)} //Math.ceil() arredonda o resultado para cima, garantindo que a última página mostre todos os itens, mesmo tendo menos de 20
        page={page}
        onChange={handleChange}
      />

      {/* Pokedex */}
      <div className="pokedex">
        <h2>Pokedex</h2>
        <div className="pokedex-container">
          {favorites.map((favorite) => (
            <div key={favorite.id} className="favorite-id">
              <img src={favorite.image} alt={favorite.name} />
              <p>{favorite.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
