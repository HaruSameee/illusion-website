"use client";

import BrickWall from "@/components/brick-wall";
import HelpBoardSection from "@/layouts/top-page/help-board/help-board-section";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import { useTheme } from "@mui/material/styles";
import type { ReactNode } from "react";

export default function HelpBoard(): ReactNode {
  const theme = useTheme();

  return (
    <BrickWall>
      <Box
        padding={10}
        sx={(theme) => ({
          [theme.breakpoints.down("lg")]: {
            paddingX: 3,
            paddingY: 5,
          },
        })}
      >
        <Container>
          <Grid container spacing={4}>
            <Grid size={{ xs: 12, md: 6 }}>
              <HelpBoardSection
                color={theme.vars.palette.primary.main}
                title="illusionとは？"
              >
                Ayanamistによって創設されたDiscordの雑談サーバーです。
                何気ない雑談から専門的な話題まで、様々なトピックが飛び交っています。
              </HelpBoardSection>
            </Grid>
            <Grid size={{ xs: 12, md: 6 }}>
              <HelpBoardSection
                color={theme.vars.palette.secondary.main}
                title="Ayanamistとは誰ですか？"
              >
                Ayanamistとはillusionの二人の創設者のことであり、綾波レイが好きな人のことでもあります。
                illusionではAyanamistが管理人で、2ndAyanamistが副管理人となります。
              </HelpBoardSection>
            </Grid>
          </Grid>
        </Container>
      </Box>
    </BrickWall>
  );
}
