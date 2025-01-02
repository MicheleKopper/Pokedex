import { Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CardFavoriteProps {
  name: string;
  image: string;
}

export function CardFavorite({ name, image }: CardFavoriteProps) {
  return (
    <Card
      sx={{
        width: 250,
        height: "auto",
        borderRadius: "20px",
        boxShadow: "rgba(0, 0, 0, 0.15) 0px 5px 15px 0px",
        margin: "10px",
      }}
    >
      <CardMedia
        component="img"
        sx={{
          width: "100%",
          height: "200px",
          objectFit: "contain",
        }}
        image={image}
        alt={name}
      />
      <CardContent>
        <Typography variant="h6">{name}</Typography>
      </CardContent>
    </Card>
  );
}
