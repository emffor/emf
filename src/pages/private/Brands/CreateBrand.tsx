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
  Heading,
  HStack,
  Stack,
  VStack,
} from "@chakra-ui/react";

import { Input } from "../../../components/Form/Input";
import { Loading } from "../../../components/Form/Loading";
interface ICreateBrandSchema {
  name: string;
  description: string;
}

const CreateBrandSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
});

export function CreateBrand() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState } = useForm<ICreateBrandSchema>({
    resolver: yupResolver(CreateBrandSchema),
  });

  const { errors } = formState;

  const handleCreateCar: SubmitHandler<ICreateBrandSchema> = async (values) => {
    console.log(values);

    const data = {
      name: values.name,
      description: values.description,
    };
  };

  function handleBack() {
    navigate("/marcas");
  }

  return (
    <Stack>
      <Box flex="1" borderRadius={8} bg="gray.50" p={["6", "8"]}>
        <Heading size="lg" fontWeight="normal">
          Cadastrar Marca
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
              error={errors.name}
              {...register("name")}
            />
            <Input
              label="Descrição da Marca"
              error={errors.description}
              {...register("description")}
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

            <Button type="submit" colorScheme="green">
              Salvar
            </Button>
          </HStack>
        </Flex>
      </Box>
    </Stack>
  );
}
