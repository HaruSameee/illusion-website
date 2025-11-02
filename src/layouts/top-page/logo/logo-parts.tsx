import { logoFont } from "@/theme/fonts";
import Typography from "@mui/material/Typography";
import clsx from "clsx";
import type { PropsWithChildren, ReactNode } from "react";

export type LogoPartsProps = PropsWithChildren<{
  accent?: boolean;
}>;

export default function LogoParts({
  accent,
  children,
}: LogoPartsProps): ReactNode {
  return (
    <Typography
      fontSize="inherit"
      {...logoFont.style}
      component="span"
      color={accent ? "primary.main" : "text.secondary"}
      className={clsx(accent && "logo-accent")}
    >
      {children}
    </Typography>
  );
}
