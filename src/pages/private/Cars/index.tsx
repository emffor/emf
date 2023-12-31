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
  Table,
  Tbody,
  Th,
  Thead,
  Tr,
  useBreakpointValue,
} from "@chakra-ui/react";

import { RiAddLine, RiFilter2Fill } from "react-icons/ri";
import { Empty } from "../../../components/Empty";
import { Loading } from "../../../components/Form/Loading";
import { Pagination } from "../../../components/Pagination";
import { ICarDTO } from "../../../dtos/ICarDTO";
import { Environment } from "../../../environment";
import { TableCar } from "./TableCar";

export function ListCars() {
  const navigate = useNavigate();

  const [isLoading, setIsLoading] = useState(false);
  const [emptyCars, setEmptyCars] = useState(0);

  const [page, setPage] = useState(1);

  const [cars, setCars] = useState<ICarDTO[]>([]);

  const [checkedCar, setCheckedCar] = useState<boolean>(false);
  const [selectedCarId, setSelectedCarId] = useState("");

  const isWideVersion = useBreakpointValue({
    base: false,
    lg: true,
  });

  function handleCreateCar() {
    navigate("/carros/cadastrar-carro");
  }

  function handleEditCar() {
    if (selectedCarId === "") {
      return alert("Selecione um carro para editar");
    }

    navigate(`/carros/editar-carro/${selectedCarId}`);
  }

  function handleFilterBrands() {
    navigate("/carros/filtrar-marcas-carros");
  }

  function handleFilterTransmission() {
    navigate("/carros/filtrar-cambio-carros");
  }

  function handleChecked(id: string) {
    if (selectedCarId === id) {
      setSelectedCarId("");
      setCheckedCar(false);
    } else if (selectedCarId !== id) {
      setSelectedCarId(id);
      setCheckedCar(true);
    } else if (selectedCarId === "") {
      setSelectedCarId(id);
      setCheckedCar(true);
    }
  }

  async function handleDeleteCar(id: string) {
    if (selectedCarId === "") {
      return alert("Selecione um carro para excluir");
    }
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
              Lista de Carros
            </Heading>

            <ButtonGroup>
              {isWideVersion ? (
                <Button
                  size="sm"
                  fontSize={"sm"}
                  colorScheme="gray"
                  color={"gray.500"}
                  leftIcon={<Icon as={RiFilter2Fill} fontSize="20" />}
                  _hover={{
                    bg: "gray.200",
                  }}
                  onClick={handleFilterBrands}
                >
                  Filtrar por Marcas
                </Button>
              ) : (
                <Button
                  size="sm"
                  fontSize={"sm"}
                  colorScheme="gray"
                  color={"gray.500"}
                  _hover={{
                    bg: "gray.200",
                  }}
                  onClick={handleFilterBrands}
                >
                  <Icon as={RiFilter2Fill} fontSize="22" />
                  Marcas
                </Button>
              )}
            </ButtonGroup>

            <ButtonGroup>
              {isWideVersion ? (
                <Button
                  size="sm"
                  fontSize={"sm"}
                  colorScheme="gray"
                  color={"gray.500"}
                  leftIcon={<Icon as={RiFilter2Fill} fontSize="20" />}
                  _hover={{
                    bg: "gray.200",
                  }}
                  onClick={handleFilterTransmission}
                >
                  Filtrar por Câmbios
                </Button>
              ) : (
                <Button
                  size="sm"
                  fontSize={"sm"}
                  colorScheme="gray"
                  color={"gray.500"}
                  _hover={{
                    bg: "gray.200",
                  }}
                  onClick={handleFilterTransmission}
                >
                  <Icon as={RiFilter2Fill} fontSize="22" />
                  Câmbios
                </Button>
              )}
            </ButtonGroup>

            <ButtonGroup>
              {isWideVersion ? (
                <Button
                  size="sm"
                  fontSize={"sm"}
                  colorScheme="green"
                  leftIcon={<Icon as={RiAddLine} fontSize="20" />}
                  _hover={{
                    bg: "green.600",
                  }}
                  onClick={handleCreateCar}
                >
                  Cadastrar Novo
                </Button>
              ) : (
                <Button
                  size="sm"
                  fontSize={"sm"}
                  colorScheme="green"
                  _hover={{
                    bg: "green.600",
                  }}
                  onClick={handleCreateCar}
                >
                  <Icon as={RiAddLine} fontSize="22" />
                  Novo
                </Button>
              )}
            </ButtonGroup>
          </Flex>
          <Table colorScheme="red" size="sm" variant="simple" color="gray.500">
            {emptyCars === 0 ? (
              <Empty
                title="Nenhum carro cadastrado"
                subtitle="Cadastrar Novo Carro"
              />
            ) : (
              <>
                <Thead>
                  <Tr>
                    <Th px={["4", "4", "6"]} color="gray.900" width="8"></Th>
                    <Th>Modelo</Th>
                    <Th>Marca</Th>
                    <Th>Tipo Câmbio</Th>
                    {isWideVersion && <Th>Cor</Th>}
                    {isWideVersion && <Th>Ano de Fabricação</Th>}
                    {isWideVersion && <Th>Ano do Modelo</Th>}
                    <Th w={"8"}></Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {cars
                    .slice(
                      (page - 1) * Environment.LINHA_DE_LINHAS,
                      page * Environment.LINHA_DE_LINHAS
                    )
                    .map((car) => {
                      return (
                        <TableCar
                          key={car.id}
                          data={car}
                          onClickDelete={() => handleDeleteCar(car.id)}
                          onClickEdit={() => handleEditCar()}
                          onClickCheck={() => handleChecked(car.id)}
                          defaultChecked={
                            checkedCar && selectedCarId === car.id
                              ? true
                              : false
                          }
                          isChecked={
                            checkedCar && selectedCarId === car.id
                              ? true
                              : false
                          }
                        />
                      );
                    })}
                </Tbody>
              </>
            )}
          </Table>

          <Pagination
            totalCountOfRegisters={cars.length}
            currentPage={page}
            onPageChange={setPage}
          />
        </Box>
      )}
    </Stack>
  );
}
