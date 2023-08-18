import { Box, Flex, SimpleGrid, Stack, Text } from "@chakra-ui/react";
import { Loading } from "../../components/Form/Loading";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";
import { useEmfLoading } from "../../contexts/EmfMainContext";

export function Dashboard() {
  const { isLoading } = useEmfLoading();

  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        {isLoading ? (
          <Loading />
        ) : (
          <SimpleGrid
            flex="1"
            gap="4"
            minChildWidth="320px"
            alignContent="flex-start"
          >
            <Box p={["6", "8"]} bg="gray.50" borderRadius={8}>
              <Text fontSize="2xl" fontWeight="500" color={"red.400"}>
                Carros Cadastrados
              </Text>

              <Stack
                display="flex"
                align="center"
                justify="center"
                height="100%"
              >
                <Box
                  bg={"#DA6F66"}
                  borderRadius={"full"}
                  pl={"10"}
                  pr={"10"}
                  mb={"5"}
                >
                  <Text fontSize="9xl" fontWeight="700" color={"white"}>
                    12
                  </Text>
                </Box>
              </Stack>
            </Box>

            <Box p={["6", "8"]} bg="gray.50" borderRadius={8}>
              <Text fontSize="2xl" fontWeight="500" color={"yellow.600"}>
                Câmbios Cadastrados
              </Text>

              <Stack
                display="flex"
                align="center"
                justify="center"
                height="100%"
              >
                <Box
                  bg={"#FFDA6B"}
                  borderRadius={"full"}
                  pl={"10"}
                  pr={"10"}
                  mb={"5"}
                >
                  <Text fontSize="9xl" fontWeight="700" color={"white"}>
                    20
                  </Text>
                </Box>
              </Stack>
            </Box>

            <Box p={["6", "8"]} bg="gray.50" borderRadius={8}>
              <Text fontSize="2xl" fontWeight="500" color={"green.500"}>
                Marcas Cadastradas
              </Text>

              <Stack
                display="flex"
                align="center"
                justify="center"
                height="100%"
              >
                <Box
                  bg={"#A4BD58"}
                  borderRadius={"full"}
                  pl={"10"}
                  pr={"10"}
                  mb={"5"}
                >
                  <Text fontSize="9xl" fontWeight="700" color={"white"}>
                    5
                  </Text>
                </Box>
              </Stack>
            </Box>
          </SimpleGrid>
        )}
      </Flex>
    </Flex>
  );
}
