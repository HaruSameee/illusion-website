import MuiBreadcrumbs from "@mui/material/Breadcrumbs";
import MuiLink from "@mui/material/Link";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

export type BreadcrumbsItem = {
  href?: string;
  label: string;
  emphasis?: boolean;
};

export type BreadcrumbsProps = {
  items: BreadcrumbsItem[];
};

export default function Breadcrumbs({ items }: BreadcrumbsProps): JSX.Element {
  return (
    <MuiBreadcrumbs>
      {items.map(({ href, label, emphasis = false }) => (
        <span key={[href, label, emphasis].join()}>
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
        </span>
      ))}
    </MuiBreadcrumbs>
  );
}
