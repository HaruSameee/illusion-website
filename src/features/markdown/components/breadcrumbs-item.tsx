import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

export type BreadcrumbsItemProps = {
  href?: string;
  label: string;
  emphasis?: boolean;
};

export default function BreadcrumbsItem({
  href,
  label,
  emphasis = false,
}: BreadcrumbsItemProps): JSX.Element {
  return (
    <>
      {href && (
        <MuiLink
          href={href}
          component={NextLink}
          underline="hover"
          color="inherit"
        >
          {label}
        </MuiLink>
      )}
      {!href && (
        <Typography color={emphasis ? "text.primary" : "text.seconadry"}>
          {label}
        </Typography>
      )}
    </>
  );
}
