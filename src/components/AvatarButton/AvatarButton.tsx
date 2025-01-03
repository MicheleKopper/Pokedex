import { Avatar } from "@mui/material";
import VerticalAlignTopIcon from "@mui/icons-material/VerticalAlignTop";

export function AvatarButton() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <Avatar
      onClick={scrollToTop}
      sx={{
        display: "flex",
        position: "fixed",
        bottom: 30,
        right: 30,
        bgcolor: "#0960AE",
        cursor: "pointer",
        padding: "2px",
      }}
    >
      <VerticalAlignTopIcon />
    </Avatar>
  );
}
