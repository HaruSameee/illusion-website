"use client";

import Typography from "@mui/material/Typography";
import { type ReactNode, useEffect, useState } from "react";

export type LurkTextProps = {
  children: string;
};

export default function LurkText({ children }: LurkTextProps): ReactNode {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <>
      {!mounted && <Typography className="neon">{children}</Typography>}
      {mounted && <Typography>{children}</Typography>}
    </>
  );
}
