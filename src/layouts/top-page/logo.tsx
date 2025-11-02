import { logoFont } from "@/theme/fonts";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export default function Logo(): ReactNode {
  return (
    <Typography
      variant="h2"
      component="h1"
      color="textSecondary"
      sx={{
        cursor: "default",
        ...logoFont.style,
      }}
    >
      <span>ILLUSI</span>
      <Box component="span" color="primary.main">
        O
      </Box>
      <span>N</span>
    </Typography>
  );
}
