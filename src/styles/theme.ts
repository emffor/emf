import { extendTheme } from "@chakra-ui/react";

export const theme = extendTheme({
  colors: {
    yellow: {
      "600": "#FFBA08",
      "500": "#FDCF46",
    },
    whiteAlpha: {
      "900": "#DEE4F1",
    },
    purple: {
      "900": "#231A40",
      "800": "#332B51",
    },
  },
  fonts: {
    heading: "Roboto",
    body: "Roboto",
  },
  styles: {
    global: {
      body: {
        bg: "whiteAlpha.900",
        color: "gray.800",
      },
    },
  },
});
