import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardPokemon } from "../Card/CardPokemon";
import { AppDispatch, RootState } from "../store";
import { pokemonAsyncThunk } from "../store/modules/pokemonSlice";
import { Pagination, PaginationItem } from "@mui/material";
import { CardFavorite } from "../Pokedex/CardFavorite";

interface PokemonListProps {
  showFavorites?: boolean;
}

export function PokemonList({ showFavorites = false }: PokemonListProps) {
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
      {/* CARDS */}
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

      {/* FAVORITES */}
      {showFavorites && favorites.length > 0 && (
        <section className="favorites-section">
          <div className="favorites-container">
            {favorites.map((favorite) => (
              <CardFavorite
                key={favorite.id}
                name={favorite.name}
                image={favorite.image}
              />
            ))}
          </div>
        </section>
      )}

      <Pagination
        count={Math.ceil(total / 20)} //Math.ceil() arredonda o resultado para cima, garantindo que a última página mostre todos os itens, mesmo tendo menos de 20
        page={page}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{
              color: "#4C585B", // Cor dos itens
              "&:hover": {
                backgroundColor: "#FFCC00", // Cor ao passar o mouse
              },
              "&.Mui-selected": {
                backgroundColor: "#4C585B", // Cor do item selecionado
                color: "white", // Cor do texto no item selecionado
              },
            }}
          />
        )}
      />
    </div>
  );
}
