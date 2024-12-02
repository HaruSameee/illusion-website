"use client";

import IconTypography, {
  type IconTypographyProps,
} from "@/components/icon-typography";
import MuiLink from "@mui/material/Link";
import { useTheme } from "@mui/material/styles";
import NextLink from "next/link";
import type { PropsWithChildren, ReactNode } from "react";

export type PrimaryLinkProps = PropsWithChildren<{
  Icon: IconTypographyProps["Icon"];
  href: string;
}>;

export default function PrimaryLink({
  Icon,
  href,
  children,
}: PrimaryLinkProps): ReactNode {
  const theme = useTheme();

  return (
    <MuiLink underline="hover" component={NextLink} href={href}>
      <IconTypography iconColor={theme.vars.palette.text.primary} Icon={Icon}>
        {children}
      </IconTypography>
    </MuiLink>
  );
}
