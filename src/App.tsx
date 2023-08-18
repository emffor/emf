import { ChakraProvider, Grid, theme } from "@chakra-ui/react";
import { ColorModeSwitcher } from "./config/ColorModeSwitcher";
import { AppRoutes } from "./routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid minH="100vh" p={3}>
      <ColorModeSwitcher justifySelf="flex-end" />
      <AppRoutes />
    </Grid>
  </ChakraProvider>
);
