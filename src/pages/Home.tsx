import { Navbar } from "../components/Navbar/Navbar";
import { PokemonList } from "../components/List/PokemonList";

export function Home() {
  return (
    <>
      <Navbar />
      <PokemonList showFavorites={false} />
    </>
  );
}
