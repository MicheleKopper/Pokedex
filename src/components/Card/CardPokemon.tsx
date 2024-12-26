import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";

import CardActionArea from "@mui/material/CardActionArea";

import { Box, Grid2, IconButton } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";
import FavoriteIcon from "@mui/icons-material/Favorite";
import CatchingPokemonIcon from "@mui/icons-material/CatchingPokemon";

export function CardPokemon() {
  // Função para buscar os dados da API
  useEffect(() => {
    const fetchPokemon = async () => {
      try {
        const response = await axios.get(
          "https://pokeapi.co/api/v2/pokemon?limit=10"
        );
        console.log("Resposta da API:", response.data);
      } catch (error) {
        console.error("Erro ao buscar dados da API:", error);
      }
    };

    fetchPokemon();
  }, []); // O array vazio significa que o useEffect será executado apenas uma vez

  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: "100vw",
        bgcolor: "#F8FAFC",
      }}
    >
      <Card>
        <CardActionArea
          sx={{
            width: 250,
            height: 300,
          }}
        >
          <CardMedia
            component="img"
            sx={{
              width: "100%", // Ajusta a largura para ocupar todo o espaço disponível
              height: "200px", // Define uma altura fixa
              objectFit: "contain", // Mantém a proporção da imagem dentro do espaço
            }}
            image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/home/25.png"
            alt="Pikachu"
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
                Pikachu
              </Typography>

              <Typography variant="h6">#25</Typography>
            </Grid2>

            <Typography variant="subtitle1">Height: 4 | Weight: 60</Typography>
          </CardContent>
        </CardActionArea>

        {/* Ícones */}

        <Grid2
          container
          spacing={2}
          sx={{
            display: "inline-flex",
            justifyContent: "flex-start",
            alignItems: "center",
            marginLeft: "8px",
          }}
        >
          <IconButton aria-label="Detailes">
            <CatchingPokemonIcon />
          </IconButton>

          <IconButton aria-label="Pokedex" sx={{
            
          }}>
            <FavoriteIcon />
          </IconButton>
        </Grid2>
      </Card>
    </Box>
  );
}
