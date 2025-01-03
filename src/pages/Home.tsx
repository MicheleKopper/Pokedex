import { Navbar } from "../components/Navbar/Navbar";
import { PokemonList } from "../components/List/PokemonList";
import { Footer } from "../components/Footer/Footer";

export function Home() {
  return (
    <>
      <Navbar />
      <PokemonList showFavorites={false} />
      <Footer/>
    </>
  );
}
