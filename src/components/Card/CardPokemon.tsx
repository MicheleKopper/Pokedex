import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import CardActionArea from "@mui/material/CardActionArea";
import CardActions from "@mui/material/CardActions";
import { Box } from "@mui/material";
import { useEffect } from "react";
import axios from "axios";

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
        height: "100vh",
        bgcolor: "#F8FAFC",
      }}
    >
      <Card sx={{ maxWidth: 345 }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="140"
            image="/static/images/cards/contemplative-reptile.jpg"
            alt="green iguana"
          />

          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>

            <Typography variant="body2" sx={{ color: "text.secondary" }}>
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </CardActionArea>

        <CardActions>
          <Button size="small" color="primary">
            Share
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
}
