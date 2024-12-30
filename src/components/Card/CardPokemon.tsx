import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Typography from "@mui/material/Typography";
import { Box, Dialog, Grid2, IconButton } from "@mui/material";
import CardMedia from "@mui/material/CardMedia";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";
import { useState } from "react";
import { DetailsPokemon } from "../Details/DetailsPokemon";

interface Ability {
  ability: {
    name: string;
  };
  is_hidden: boolean;
  slot: number;
}

interface Stats {
  base_stat: number;
  effort: number;
  stat: {
    name: string;
  };
}

interface Pokemon {
  name: string;
  image: string;
  id: number;
  height: number;
  weight: number;
  abilities: Ability[];
  stats: Stats[];
}

export function CardPokemon({
  name,
  image,
  id,
  height,
  weight,
  abilities,
  stats,
}: Pokemon) {
  
  const [open, setOpen] = useState(false);

  // Função para abrir o modal
  const handleOpen = () => setOpen(true);

  // Função para fechar o modal
  const handleClose = () => setOpen(false);

  

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
              {/* charAt(0).toUpperCase(): pega a primeira letra e modifica
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
          <IconButton aria-label="Detailes" onClick={handleOpen}>
            <CatchingPokemonIcon />
          </IconButton>

          <IconButton aria-label="Pokedex">
            <FavoriteIcon />
          </IconButton>

          {/* Modal */}
          <Dialog open={open} onClose={handleClose}>
            <DetailsPokemon
              name={name}
              image={image}
              id={id}
              height={height}
              weight={weight}
              abilities={abilities}
              stats={stats}
              onClose={handleClose}
            />
          </Dialog>
        </Box>
      </Card>
    </Box>
  );
}
