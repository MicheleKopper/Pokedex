import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import { Fade, Link, Menu, MenuItem, Typography } from "@mui/material";
import React from "react";

export function Navbar() {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);
  const open = Boolean(anchorEl);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Box
      sx={{
        flexGrow: 1,
        marginBottom: "50px",
      }}
    >
      <AppBar position="fixed">
        <Toolbar
          sx={{
            bgcolor: "#FFCC00",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            position: "relative",
          }}
        >
          {/* MENU */}
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="menu"
            sx={{ mr: 2, color: "#0960AE" }}
            onClick={handleClick}
          >
            <MenuIcon />
          </IconButton>

          <Menu
            id="fade-menu"
            MenuListProps={{
              "aria-labelledby": "menu-icon",
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            TransitionComponent={Fade}
            slotProps={{
              paper: {
                sx: {
                  width: "200px",
                  bgcolor: "#0960AE",
                  color: "white",
                  padding: "8px",
                },
              },
            }}
          >
            <MenuItem onClick={handleClose}>
              <Link href="/home" color="inherit" underline="none">
                <Typography variant="body2">Home</Typography>
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link href="/pokedex" color="inherit" underline="none">
                <Typography variant="body2">Pokedex</Typography>
              </Link>
            </MenuItem>

            <MenuItem onClick={handleClose}>
              <Link href="/contato" color="inherit" underline="none">
                <Typography variant="body2">Contato</Typography>
              </Link>
            </MenuItem>
          </Menu>

          {/* LOGO */}
          <Box
            sx={{
              position: "absolute",
              left: "50%",
              transform: "translateX(-50%)",
            }}
          >
            <Link href="/home">
              <img
                src="/logo.png"
                alt="Logo"
                style={{
                  width: "90px",
                  height: "auto",
                  objectFit: "contain",
                }}
              />
            </Link>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
