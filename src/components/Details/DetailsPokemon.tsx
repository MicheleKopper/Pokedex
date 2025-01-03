import { Box, Button, Paper, Typography } from "@mui/material";

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

interface DetailsPokemonProps extends Pokemon {
  onClose: () => void;
}

export function DetailsPokemon({
  name,
  image,
  id,
  height,
  weight,
  abilities,
  stats,
  onClose,
}: DetailsPokemonProps) {
  
  return (
    <Box
      sx={{
        padding: "30px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        bgcolor: "#f9f9f9",
        borderRadius: "10px",
        boxShadow: 3,
        maxWidth: "400px",
        margin: "auto",
        textAlign: "center",
      }}
    >
      <Typography variant="h5">
        {name.charAt(0).toUpperCase() + name.slice(1)}
      </Typography>

      <img
        src={image}
        alt={name}
        style={{ width: "200px", height: "200px", objectFit: "contain" }}
      />

      <Typography variant="h6" sx={{ marginBottom: "10px", color: "#555" }}>
        #{id}
      </Typography>

      <Typography
        variant="subtitle1"
        sx={{ color: "#777", marginBottom: "10px" }}
      >
        <strong>Height:</strong> {height} | <strong>Weight:</strong> {weight}
      </Typography>

      <Typography
        variant="subtitle2"
        sx={{ color: "#777", marginBottom: "15px" }}
      >
        <strong>Abilities:</strong>{" "}
        {abilities.map((ability) => ability.ability.name).join(", ")}
      </Typography>

      <Paper
        sx={{
          width: "100%",
          padding: "10px",
          backgroundColor: "#0960AE",
          color: "white",
          borderRadius: "8px",
        }}
      >
        <Typography
          variant="subtitle2"
          sx={{ fontWeight: "bold", marginBottom: "10px" }}
        >
          Stats:
        </Typography>
        {stats.map((stat) => (
          <Typography key={stat.stat.name} variant="body2">
            {stat.stat.name.charAt(0).toUpperCase() + stat.stat.name.slice(1)}:{" "}
            {stat.base_stat}
          </Typography>
        ))}
      </Paper>

      <Button
        onClick={onClose}
        sx={{ marginTop: "20px" }}
        variant="contained"
        color="primary"
      >
        Fechar
      </Button>
    </Box>
  );
}
