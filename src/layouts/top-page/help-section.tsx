import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import type { PropsWithChildren, ReactNode } from "react";
import styles from "./help-section.module.css";

export interface HelpSectionOwnProps {
  title: ReactNode;
}

export type HelpSectionProps = PropsWithChildren<HelpSectionOwnProps>;

export default function HelpSection({ title, children }: HelpSectionProps) {
  return (
    <section>
      <Paper variant="outlined" className={styles.paper}>
        <Stack padding={2} spacing={2}>
          <Typography component="h2" variant="h5">
            {title}
          </Typography>
          <div>{children}</div>
        </Stack>
      </Paper>
    </section>
  );
}
