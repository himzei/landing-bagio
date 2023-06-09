import { extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    custom: {
      100: "#4090f3",
    },
  },
  fonts: {
    heading: `Pretendard-Regular`,
    body: `Pretendard-Regular`,
  },
  breakpoints: {
    sm: "320px",
    md: "768px",
    lg: "960px",
    xl: "1200px",
    "2xl": "1536px",
  },
});

export default theme;
