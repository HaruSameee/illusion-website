import BrickWall from "@/components/layouts/top-page/brick-wall";
import { logoFont } from "@/features/theme/utils/fonts";
import Box from "@mui/material/Box";
import MuiLink from "@mui/material/Link";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";
import { blue } from "@mui/material/colors";
import NextLink from "next/link";
import type { ReactNode } from "react";
import LurkText from "./lurk-text";
import PoemList from "./poem-list";
import Spotlight from "./spotlight";

export default function NotFoundPage(): ReactNode {
  return (
    <Spotlight>
      <BrickWall dark>
        <Stack minHeight="100svh" alignItems="center" justifyContent="center">
          <Stack spacing={6} padding={2}>
            <Stack spacing={1}>
              <Typography
                {...logoFont}
                className={[logoFont.className, "neon"].join(" ")}
                component="h1"
                variant="h3"
                color={blue[600]}
              >
                ILLUSION: Not Found
              </Typography>
              <LurkText>ふしぎな場所へ迷い込んでしまったようです……</LurkText>
            </Stack>
            <Box>
              <MuiLink
                className="neon"
                component={NextLink}
                href="/"
                fontSize="1.25rem"
              >
                ホームに戻る
              </MuiLink>
            </Box>
          </Stack>
          <PoemList />
        </Stack>
      </BrickWall>
    </Spotlight>
  );
}
