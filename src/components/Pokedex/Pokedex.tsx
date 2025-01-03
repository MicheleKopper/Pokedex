// import { useSelector } from "react-redux";
// import { RootState } from "../store";
// import { CardFavorite } from "./CardFavorite";


// export function PokedexFavorites() {
//   const { favorites } = useSelector((state: RootState) => state.pokemon);

//   return (
//     <div className="favorites-page">
//       <h1>Favoritos</h1>
//       <div className="favorites-container">
//         {favorites.length > 0 ? (
//           favorites.map((favorite) => (
//             <CardFavorite
//               key={favorite.id}
//               name={favorite.name}
//               image={favorite.image}
              
//             />
//           ))
//         ) : (
//           <p>No favorites yet</p>
//         )}
//       </div>
//     </div>
//   );
// }
