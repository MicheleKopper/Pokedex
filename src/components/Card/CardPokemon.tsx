import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Grid2, IconButton } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

interface Pokemon {
  name: string;
  image: string;
  id: number;
  height: number;
  weight: number;
  onFavorite?: (id: number) => void; // Adicionada prop para favoritar
  onDetailsClick?: (id: number) => void; // Adicionada prop para detalhes
}

export function CardPokemon({
  name,
  image,
  id,
  height,
  weight,
  onFavorite,
  onDetailsClick,
}: Pokemon) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "80px",
      }}
    >
      <Card
        sx={{
          width: 250,
          height: 350,
          borderRadius: "20px",
          boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: "100%",
            height: "200px",
            objectFit: "contain", // Mantém a proporção da imagem dentro do espaço
          }}
          image={image}
          alt={name}
        />

        <CardContent>
          <Grid2
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography gutterBottom variant="h5" component="div">
              {name.charAt(0).toUpperCase() + name.slice(1)}
              {
              
            /* charAt(0).toUpperCase(): pega a primeira letra e modifica
              slice(1): pega o restante a partir da segunda letra (não modifica a fonte) */}
            </Typography>

            <Typography variant="h6"># {id}</Typography>
          </Grid2>

          <Typography variant="subtitle1">
            Height: {height} | Weight: {weight}
          </Typography>
        </CardContent>

        {/* Ícones */}
        <Box
          sx={{
            display: "flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "8px",
            paddingBottom: "8px",
          }}
        >
          <IconButton
            aria-label="Detailes"
            onClick={() => onDetailsClick?.(id)} // Chama a função de detalhes
          >
            <CatchingPokemonIcon />
          </IconButton>

          <IconButton
            aria-label="Pokedex"
            onClick={() => onFavorite?.(id)} // Chama a função de favoritar
          >
            <FavoriteIcon />
          </IconButton>
        </Box>
      </Card>
    </Box>
  );
}
