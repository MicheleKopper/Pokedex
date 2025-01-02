import { Alert, Collapse } from "@mui/material";
import FavoriteIcon from "@mui/icons-material/Favorite";

interface AlertFavoriteProps {
  open: boolean;
  onClose: () => void;
}

export function AlertFavorite({ open, onClose }: AlertFavoriteProps) {
  return (
    <Collapse in={open}>
      <Alert
        severity="success"
        sx={{ position: "fixed", top: "30px", right: "30px" }}
        icon={<FavoriteIcon sx={{ color: "#FF2929" }} />}
        onClose={onClose}
      >
        Pokemon added to Pokedex
      </Alert>
    </Collapse>
  );
}
