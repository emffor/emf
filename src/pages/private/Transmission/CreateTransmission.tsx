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
  VStack,
} from "@chakra-ui/react";
import { Input } from "../../../components/Form/Input";
import { Loading } from "../../../components/Form/Loading";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";

interface ICreateTransmissionSchema {
  name: string;
  description: string;
}

const CreateTransmissionFormSchema = yup.object().shape({
  name: yup.string().required("Nome é obrigatório"),
  description: yup.string().required("Descrição é obrigatório"),
});

export function CreateTransmission() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  const { register, handleSubmit, formState } =
    useForm<ICreateTransmissionSchema>({
      resolver: yupResolver(CreateTransmissionFormSchema),
    });

  const { errors } = formState;

  const handleCreateTransmission: SubmitHandler<
    ICreateTransmissionSchema
  > = async (values) => {
    console.log(values);
  };

  function handleBack() {
    navigate("/cambios");
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
        onSubmit={handleSubmit(handleCreateTransmission)}
      >
        <Sidebar />

        <Box flex="1" borderRadius={8} bg="gray.50" p={["6", "8"]}>
          <Heading size="lg" fontWeight="normal">
            Cadastrar Tipo de Câmbio
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
                error={errors.name}
                {...register("name")}
              />
              <Input
                label="Descrição do Câmbio"
                type="text"
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
      </Flex>
    </Box>
  );
}
