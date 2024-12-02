import { siteName } from "@/consts/site";
import AppBar from "@mui/material/AppBar";
import Container from "@mui/material/Container";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import NextLink from "next/link";

export default function Header() {
  return (
    <AppBar
      elevation={0}
      position="static"
      sx={{
        backgroundColor: "transparent",
      }}
    >
      <Toolbar disableGutters variant="dense">
        <Container>
          <Stack
            width="100%"
            direction="row"
            justifyContent="flex-start"
            alignItems="center"
            sx={(theme) => ({
              [theme.breakpoints.down("md")]: {
                justifyContent: "center",
              },
            })}
          >
            <MuiLink component={NextLink} href="/" underline="none">
              <Typography variant="h3" color="text.secondary">
                {siteName}
              </Typography>
            </MuiLink>
          </Stack>
        </Container>
      </Toolbar>
    </AppBar>
  );
}
