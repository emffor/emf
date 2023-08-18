import {
  Box,
  Button,
  ButtonGroup,
  Flex,
  Heading,
  Icon,
  useBreakpointValue,
} from "@chakra-ui/react";
import { useState } from "react";
import { BsArrowLeft } from "react-icons/bs";

import { useNavigate } from "react-router-dom";
import { Loading } from "../../../components/Form/Loading";
import { Header } from "../../../components/Header";
import { Sidebar } from "../../../components/Sidebar";
import { IBrandCarDTO } from "../../../dtos/IBrandCarDTO";
import { TableFilter } from "./TableFilter";

export function FilterBrand() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [emptyCars, setEmptyCars] = useState(0);

  const [page, setPage] = useState(1);

  const [brandsCars, setBrandsCars] = useState<IBrandCarDTO[]>([]);

  const [checkedCar, setCheckedCar] = useState<boolean>(false);
  const [selectedCarId, setSelectedCarId] = useState("");

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  function handleGoBack() {
    navigate("/carros");
  }

  return (
    <Box>
      <Header />

      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />

        {isLoading ? (
          <Box w={"100%"} h={"60vh"}>
            <Loading />
          </Box>
        ) : (
          <Box flex="1" borderRadius={8} bg="gray.50" p="8">
            <Flex mb="8" justify="space-between" align="center">
              <Heading size={"md"} fontWeight="500">
                Filtrado por Marcas
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

            {brandsCars.map((brand) => {
              return <TableFilter key={brand.id} data={brand} />;
            })}
          </Box>
        )}
      </Flex>
    </Box>
  );
}
