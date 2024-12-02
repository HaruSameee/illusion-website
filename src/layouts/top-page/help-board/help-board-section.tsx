"use client";

import IconTypography from "@/components/icon-typography";
import HelpOutlineIcon from "@mui/icons-material/HelpOutline";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface HelpBoardSectionProps {
  title: string;
  color: string;
  children: string;
}

export default function HelpBoardSection({
  title,
  color,
  children,
}: HelpBoardSectionProps): ReactNode {
  return (
    <Paper
      elevation={0}
      sx={{
        height: "100%",
        background: (theme) =>
          `linear-gradient(to right bottom, ${theme.vars.palette.background.paper} 80%, ${color})`,
      }}
    >
      <Stack padding={1} spacing={1} component="section">
        <IconTypography
          Icon={HelpOutlineIcon}
          component="h2"
          variant="h6"
          color={color}
        >
          {title}
        </IconTypography>
        <Typography>{children}</Typography>
      </Stack>
    </Paper>
  );
}
