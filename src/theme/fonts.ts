import {
  Kosugi as CodeFont,
  Limelight as LogoFont,
  M_PLUS_Rounded_1c as PrimaryFont,
} from "next/font/google";

export const primaryFont = PrimaryFont({
  weight: ["100", "300", "400", "500", "700", "800", "900"],
  subsets: ["latin"],
});

export const codeFont = CodeFont({
  weight: ["400"],
  subsets: ["latin"],
});

export const logoFont = LogoFont({
  weight: ["400"],
  subsets: ["latin"],
});
