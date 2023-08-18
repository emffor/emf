import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Input } from "../../../components/Form/Input";
import { Loading } from "../../../components/Form/Loading";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";

export function EditTransmission() {
  const navigate = useNavigate();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleBack() {
    navigate("/cambios");
  }

  async function handleUpdateTransmission() {
    if (isDisabled === true) {
      return alert("Aperte em editar para desbloquear os campos");
    }
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6" as="form">
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.50" p={["6", "8"]}>
          <Heading
            size="lg"
            fontWeight="normal"
            justifyContent={["space-between"]}
            display="flex"
          >
            Editar Tipo de Câmbio
            <Button
              bg={"yellow.600"}
              color={"white"}
              px={["4", "6"]}
              onClick={() => setIsDisabled(false)}
            >
              Editar
            </Button>
          </Heading>

          <Divider my="6" borderColor="gray.700" />
          {isLoading ? (
            <Box w={"100%"} h={"25vh"}>
              <Loading />
            </Box>
          ) : (
            <VStack>
              <Input
                label="Nome do Câmbio"
                type="text"
                name="name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                isDisabled={isDisabled}
              />

              <Input
                label="Descrição do Câmbio"
                type="text"
                name="description"
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                isDisabled={isDisabled}
              />
            </VStack>
          )}

          <Flex mt="8" justify="flex-end">
            <HStack spacing="4">
              <Button
                as="a"
                colorScheme="red"
                color={"white"}
                onClick={handleBack}
              >
                Cancelar
              </Button>

              <Button colorScheme="green" onClick={handleUpdateTransmission}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
