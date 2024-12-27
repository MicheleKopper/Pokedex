import { useParams } from "react-router-dom";

export function Details() {
  const { id } = useParams<{ id: string }>();

  return (
    <div>
      <h1>Detalhes do Pokémon</h1>
      <p>ID do Pokémon: {id}</p>
    </div>
  );
}
