import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import * as yup from "yup";

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

interface ICreateCarSchema {
  modelo: string;
  cor: string;
  ano_modelo: number;
  ano_fabricacao: number;
}

const CreateCarFormSchema = yup.object().shape({
  modelo: yup.string().required("Modelo é obrigatório"),
  cor: yup.string().required("Cor é obrigatório"),
  ano_modelo: yup.number().required("Ano modelo é obrigatório").integer(),
  ano_fabricacao: yup
    .number()
    .required("Ano de Fabricação é obrigatório")
    .integer(),
});

export function CreateCar() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const [transmissions, setTransmissions] = useState<ITransmissionDTO[]>([]);
  const [brands, setBrands] = useState<IBrandDTO[]>([]);

  const [selectedTransmission, setSelectedTransmission] = useState("");
  const [selectedBrand, setSelectedBrand] = useState("");

  const { register, handleSubmit, formState } = useForm<ICreateCarSchema>({
    resolver: yupResolver(CreateCarFormSchema),
  });

  const year = new Date().getFullYear() + 1;

  const { errors } = formState;

  const handleCreateCar: SubmitHandler<ICreateCarSchema> = async (values) => {
    console.log(values);

    if (selectedTransmission === "" || selectedBrand === "") {
      alert("Selecione uma marca e uma transmissão!");
      return;
    }
  };

  function handleBack() {
    navigate("/carros");
  }

  return (
    <Box>
      <Header />

      <Flex
        w="100%"
        my="6"
        maxWidth={1480}
        mx="auto"
        px="6"
        as="form"
        onSubmit={handleSubmit(handleCreateCar)}
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.50" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Cadastrar Carro
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
                  {...register("modelo")}
                  error={errors.modelo}
                />

                <Input
                  label="Cor do veículo"
                  type={"text"}
                  {...register("cor")}
                  error={errors.cor}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <Input
                  label="Ano de fabricação"
                  placeholder={`de 1920 até o ano ${year - 1}`}
                  type={"number"}
                  min={1920}
                  max={year - 1}
                  {...register("ano_fabricacao")}
                  error={errors.ano_fabricacao}
                />

                <Input
                  label="Ano do Modelo"
                  placeholder={`de 1920 até o ano ${year}`}
                  type={"number"}
                  min={1920}
                  max={year}
                  {...register("ano_modelo")}
                  error={errors.ano_modelo}
                />
              </SimpleGrid>

              <SimpleGrid minChildWidth="240px" spacing={["6", "8"]} w="100%">
                <FormControl>
                  <FormLabel htmlFor="email">Marca do veículo</FormLabel>
                  <Select
                    placeholder="Marca do veículo"
                    size="lg"
                    onChange={(event) => setSelectedBrand(event.target.value)}
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

              <Button colorScheme="green" type="submit">
                Salvar
              </Button>
            </HStack>
          </Flex>
        </Box>
      </Flex>
    </Box>
  );
}
