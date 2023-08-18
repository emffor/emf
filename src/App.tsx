import { ChakraProvider, Grid, theme } from "@chakra-ui/react";
import { AppRoutes } from "./routes";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Grid minH="100vh" p={3}>
      <AppRoutes />
    </Grid>
  </ChakraProvider>
);
