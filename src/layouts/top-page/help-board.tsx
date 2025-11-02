import Container from "@mui/material/Container";
import Grid from "@mui/material/Grid2";
import styles from "./help-board.module.css";
import HelpSection from "./help-section";

export default function HelpBoard() {
  return (
    <div className={styles.brickWall}>
      <Container>
        <Grid container spacing={4}>
          <Grid size={{ xs: 12, md: 6 }}>
            <HelpSection title="illusionとは？">
              Ayanamistによって創設されたDiscordの雑談サーバーです。
              何気ない雑談から専門的な話題まで、様々なトピックが飛び交っています。
            </HelpSection>
          </Grid>
          <Grid size={{ xs: 12, md: 6 }}>
            <HelpSection title="Ayanamistとは誰ですか？">
              Ayanamistとはillusionの二人の創設者のことであり、綾波レイが好きな人のことでもあります。
              illusionではAyanamistが管理人で、2ndAyanamistが副管理人となります。
            </HelpSection>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
