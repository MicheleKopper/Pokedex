import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { CardPokemon } from "../Card/CardPokemon";
import { AppDispatch, RootState } from "../../store";
import { pokemonAsyncThunk } from "../../store/modules/pokemonSlice";
import { Box, Pagination, PaginationItem } from "@mui/material";
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
      <Box
        sx={{
          display: "grid",
          justifyContent:"center",
          alignItems:"center",
          gridTemplateColumns: {
            xs: "repeat(1, 1fr)",
            sm: "repeat(2, 1fr)",
            md: "repeat(3, 1fr)",
            lg: "repeat(4, 1fr)",
          },
          padding: { xs: "0 16px", sm: "0 32px", md: "0 64px" },
        }}
      >
        {/* CARD POKEMON */}
        {!showFavorites &&
          list.map((pokemon) => (
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

        {/* FAVORITE */}
        {showFavorites &&
          favorites.length > 0 &&
          favorites.map((favorite) => (
            <CardFavorite
              key={favorite.id}
              name={favorite.name}
              image={favorite.image}
            />
          ))}
      </Box>

      <Pagination
        count={Math.ceil(total / 20)} //Math.ceil() arredonda o resultado para cima, garantindo que a última página mostre todos os itens, mesmo tendo menos de 20
        page={page}
        onChange={handleChange}
        renderItem={(item) => (
          <PaginationItem
            {...item}
            sx={{
              color: "#4C585B",
              "&:hover": {
                backgroundColor: "#FFCC00",
              },
              "&.Mui-selected": {
                backgroundColor: "#4C585B",
                color: "white",
              },
            }}
          />
        )}
      />
    </div>
  );
}
