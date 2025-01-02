

import { useSelector } from "react-redux";
import { RootState } from "../store";

export function PokedexFavorites() {
  const { favorites } = useSelector((state: RootState) => state.pokemon);

  return (
    <div className="favorites-page">
      <h1>Favoritos</h1>
      <div className="favorites-container">
        {favorites.length > 0 ? (
          favorites.map((favorite) => (
            <div key={favorite.id} className="favorite-item">
              <img src={favorite.image} alt={favorite.name} />
              <p>{favorite.name}</p>
            </div>
          ))
        ) : (
          <p>No favorites yet</p>
        )}
      </div>
    </div>
  );
}
