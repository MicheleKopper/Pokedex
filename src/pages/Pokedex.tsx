import { PokemonList } from "../components/List/PokemonList";
import { Navbar } from "../components/Navbar/Navbar";


export function Pokedex() {
  return (
    <>
      <Navbar />
      <PokemonList showFavorites={true} />
    </>
  );
}
