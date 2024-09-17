import Stack from "@mui/material/Stack";
import type SvgIcon from "@mui/material/SvgIcon";
import Typography, { type TypographyProps } from "@mui/material/Typography";
import type { ReactNode } from "react";

export type IconTypographyProps = {
  Icon: typeof SvgIcon;
} & TypographyProps;

export default function IconTypography({
  Icon,
  children,
  ...props
}: IconTypographyProps): ReactNode {
  return (
    <Typography {...props}>
      <Stack direction="row" component="span" alignItems="center" spacing={0.5}>
        <Icon fontSize="inherit" />
        <span>{children}</span>
      </Stack>
    </Typography>
  );
}
