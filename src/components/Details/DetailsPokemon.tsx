import { Box, Button, Typography } from "@mui/material";

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
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
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

      <Typography variant="h6"># {id}</Typography>

      <Typography variant="subtitle1">
        Height: {height} | Weight: {weight}
      </Typography>

      <Typography variant="subtitle1">
        Abilities: {abilities.map((ability) => ability.ability.name).join(", ")}
      </Typography>

      <Typography variant="subtitle1">
        Stats:{" "}
        {stats.map((stat) => `${stat.stat.name}: ${stat.base_stat}`).join(", ")}
      </Typography>

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
