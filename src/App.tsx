import { Box, ChakraProvider, Grid, VStack, theme } from "@chakra-ui/react";
import { Logo } from "./components/Logo";
import { ColorModeSwitcher } from "./config/ColorModeSwitcher";

export const App = () => (
  <ChakraProvider theme={theme}>
    <Box textAlign="center" fontSize="xl">
      <Grid minH="100vh" p={3}>
        <ColorModeSwitcher justifySelf="flex-end" />
        <VStack spacing={8}>
          <Logo h="40vmin" pointerEvents="none" />
        </VStack>
      </Grid>
    </Box>
  </ChakraProvider>
);
