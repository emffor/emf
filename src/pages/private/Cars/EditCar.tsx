import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import {
  Box,
  Button,
  Divider,
  Flex,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Select,
  SimpleGrid,
  VStack,
} from "@chakra-ui/react";

import { Input } from "../../../components/Form/Input";
import { Loading } from "../../../components/Form/Loading";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { IBrandDTO } from "../../../dtos/IBrandDTO";
import { ITransmissionDTO } from "../../../dtos/ITransmissionDTO";

export function EditCar() {
  const navigate = useNavigate();
  const params = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setIsDisabled] = useState(true);

  const [transmissions, setTransmissions] = useState<ITransmissionDTO[]>([]);
  const [brands, setBrands] = useState<IBrandDTO[]>([]);

  const [modelCar, setModelCar] = useState("");
  const [colorCar, setColorCar] = useState("");
  const [yearModelCar, setYearModelCar] = useState(0);
  const [yearCreateCar, setYearCreateCar] = useState(0);

  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const year = new Date().getFullYear() + 1;

  async function handleUpdateCar() {
    if (isDisabled === true) {
      return alert("Aperte em editar para desbloquear os campos");
    }
  }

  function handleBack() {
    navigate("/carros");
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
            Editar Carro
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
              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input
                  label="Modelo do veículo"
                  type="text"
                  name="modelo"
                  onChange={(event) => setModelCar(event.target.value)}
                  value={modelCar}
                  isDisabled={isDisabled}
                />

                <Input
                  label="Cor do veículo"
                  type={"text"}
                  name="cor"
                  onChange={(event) => setColorCar(event.target.value)}
                  value={colorCar}
                  isDisabled={isDisabled}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input
                  label="Ano de fabricação"
                  placeholder={`de 1920 até o ano ${year - 1}`}
                  type={"number"}
                  min={1920}
                  max={year - 1}
                  name="ano_fabricacao"
                  onChange={(event) =>
                    setYearCreateCar(Number(event.target.value))
                  }
                  value={yearCreateCar === 0 ? "" : yearCreateCar}
                  isDisabled={isDisabled}
                />

                <Input
                  label="Ano do Modelo"
                  placeholder={`de 1920 até o ano ${year}`}
                  type={"number"}
                  min={1920}
                  max={year}
                  name="ano_modelo"
                  onChange={(event) =>
                    setYearModelCar(Number(event.target.value))
                  }
                  value={yearModelCar === 0 ? "" : yearModelCar}
                  isDisabled={isDisabled}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <FormControl>
                  <FormLabel htmlFor="email">Marca do veículo</FormLabel>
                  <Select
                    placeholder="Marca do veículo"
                    size="lg"
                    onChange={(event) => setSelectedBrand(event.target.value)}
                    value={selectedBrand}
                    isDisabled={isDisabled}
                  >
                    {brands.map((brand) => (
                      <option key={brand.id} value={brand.id}>
                        {brand.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>

                <FormControl>
                  <FormLabel htmlFor="email">Tipo de Câmbio</FormLabel>
                  <Select
                    placeholder="Tipo de Câmbio"
                    size="lg"
                    onChange={(e) => setSelectedTransmission(e.target.value)}
                    value={selectedTransmission}
                    isDisabled={isDisabled}
                  >
                    {transmissions.map((transmission) => (
                      <option key={transmission.id} value={transmission.id}>
                        {transmission.name}
                      </option>
                    ))}
                  </Select>
                </FormControl>
              </SimpleGrid>
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

              <Button colorScheme="green" onClick={handleUpdateCar}>
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
