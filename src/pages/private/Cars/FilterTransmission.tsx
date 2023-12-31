import { useState } from "react";
import { useNavigate } from "react-router-dom";

import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  Stack,
} from "@chakra-ui/react";

import { BsArrowLeft } from "react-icons/bs";
import { Loading } from "../../../components/Form/Loading";
import { ITransmissionCarDTO } from "../../../dtos/ITransmissionCarDTO";
import { TableFilter } from "./TableFilter";

export function FilterTransmission() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);

  const [transmissionsCars, setTransmissionsCars] = useState<
    ITransmissionCarDTO[]
  >([]);

  function handleGoBack() {
    navigate("/carros");
  }

  return (
    <Stack>
      {isLoading ? (
        <Box w={"100%"} h={"60vh"}>
          <Loading />
        </Box>
      ) : (
        <Box flex="1" borderRadius={8} bg="gray.50" p="8">
          <Flex mb="8" justify="space-between" align="center">
            <Heading size={"md"} fontWeight="500">
              Filtrado por Câmbios
            </Heading>

            <ButtonGroup>
              <Button
                size="sm"
                fontSize={"sm"}
                colorScheme="green"
                leftIcon={<Icon as={BsArrowLeft} fontSize="20" />}
                _hover={{
                  bg: "green.600",
                }}
                onClick={handleGoBack}
              >
                Voltar
              </Button>
            </ButtonGroup>
          </Flex>

          {transmissionsCars.map((transmission) => {
            return <TableFilter key={transmission.id} data={transmission} />;
          })}
        </Box>
      )}
    </Stack>
  );
}
