import { existsSync } from "node:fs";
import { cp, mkdir } from "node:fs/promises";
import { join, parse, relative } from "node:path";
import { ContentsDir } from "@/features/markdown/utils/content";
import { glob } from "glob";

const files = await glob(["src/contents/**/*"], {
  ignore: ["src/contents/**/*/index.md"],
  nodir: true,
  absolute: true,
});

await Promise.all(
  files.map(async (file) => {
    const parsed = parse(file);
    const distDir = join(
      "public/article-assets",
      relative(ContentsDir.CONTENTS_BASE_DIR, parsed.dir),
    );

    if (!existsSync(distDir)) {
      await mkdir(distDir, {
        recursive: true,
      });
    }

    const dist = join(distDir, parsed.base);

    await cp(file, dist, {
      recursive: true,
    });
  }),
);
