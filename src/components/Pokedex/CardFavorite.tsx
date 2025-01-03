import {
  Box,

  Card,
  CardContent,
  CardMedia,
  Grid2,
  Typography,
} from "@mui/material";



interface CardFavoriteProps {
  name: string;
  image: string;
}

export function CardFavorite({ name, image }: CardFavoriteProps) {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        marginTop: "30px",
      }}
    >
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
          <Grid2
            container
            spacing={2}
            sx={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <Typography variant="h6">
              {name.charAt(0).toUpperCase() + name.slice(1)}
            </Typography>
          </Grid2>
        </CardContent>
      </Card>

      
    </Box>
  );
}
