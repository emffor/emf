import {
  Box,
  Button,
  Divider,
  Flex,
  HStack,
  Heading,
  Stack,
  VStack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import { Input } from "../../../components/Form/Input";
import { Loading } from "../../../components/Form/Loading";

export function EditBrand() {
  const navigate = useNavigate();
  const params = useParams();

  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  function handleBack() {
    navigate("/marcas");
  }

  async function handleUpdateBrands() {
    if (isDisabled === true) {
      return alert("Aperte em editar para desbloquear os campos");
    }

    const data = {
      name,
      description,
    };
  }

  return (
    <Stack>
      <Box flex="1" borderRadius={8} bg="gray.50" p={["6", "8"]}>
        <Heading
          size="lg"
          fontWeight="normal"
          justifyContent={["space-between"]}
          display="flex"
        >
          Editar Marca
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
              label="Nome da Marca"
              type="text"
              name="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              isDisabled={isDisabled}
            />

            <Input
              label="Descrição da Marca"
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

            <Button colorScheme="green" onClick={handleUpdateBrands}>
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Stack>
  );
}
