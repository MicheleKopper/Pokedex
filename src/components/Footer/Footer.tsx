import { Box, Grid2, IconButton, Link, Typography } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

export function Footer() {
  return (
    <Box>
      <Grid2
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "#111111",
          color: "white",
          height: "25vh",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        {/* Icons */}
        <Grid2>
          <Link href="https://github.com/MicheleKopper" target="_blank">
            <IconButton>
              <GitHubIcon />
            </IconButton>
          </Link>

          <Link
            href="https://www.linkedin.com/in/michele-kopper/"
            target="_blank"
          >
            <IconButton>
              <LinkedInIcon />
            </IconButton>
          </Link>

          <Link href="https://wa.me/5551997997621" target="_blank">
            <IconButton>
              <WhatsAppIcon />
            </IconButton>
          </Link>
        </Grid2>

        {/* Menu */}
        <Grid2
          container
          direction="row"
          justifyContent="center"
          alignItems="center"
          gap={5}
          marginTop={1}
        >
          <Typography variant="subtitle2">
            <Link href="/home" color="inherit" underline="none">
              Home
            </Link>
          </Typography>

          <Typography variant="subtitle2">
            <Link href="/pokedex" color="inherit" underline="none">
              Pokedex
            </Link>
          </Typography>

          <Typography variant="subtitle2">
            <Link href="/home" color="inherit" underline="none">
              Contato
            </Link>
          </Typography>
        </Grid2>
      </Grid2>

      <Grid2
        sx={{
          display: "flex",
          flexDirection: "row",
          justifyContent: "center",
          alignItems: "center",
          bgcolor: "black",
          height: "7vh",
          width: "100%",
          overflowX: "hidden",
        }}
      >
        <Typography variant="body1">
          MKode - Design e código em perfeita harmonia | 2025
        </Typography>
      </Grid2>
    </Box>
  );
}
