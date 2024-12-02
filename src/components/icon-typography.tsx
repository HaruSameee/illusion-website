import Stack from "@mui/material/Stack";
import type SvgIcon from "@mui/material/SvgIcon";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import type { ReactNode } from "react";

export interface IconTypographyProps extends TypographyProps {
  iconColor?: string;
  Icon: typeof SvgIcon;
}

export default function IconTypography({
  Icon,
  iconColor,
  children,
  ...props
}: IconTypographyProps): ReactNode {
  return (
    <Typography {...props}>
      <Stack direction="row" component="span" alignItems="center" spacing={0.5}>
        <Icon htmlColor={iconColor} fontSize="inherit" />
        <span>{children}</span>
      </Stack>
    </Typography>
  );
}
