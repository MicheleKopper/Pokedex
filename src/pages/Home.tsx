
import { Navbar } from "../components/Navbar/Navbar";
import { CardPokemon } from "../components/Card/CardPokemon";

export function Home() {
  return (
    <>
      <Navbar />
      <CardPokemon name={""} image={""} id={0} height={0} weight={0} />
    </>
  );
}
