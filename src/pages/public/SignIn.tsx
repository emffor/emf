import { Button, Flex } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import { Logo } from "../../components/Logo";

export function SignIn() {
  const navigate = useNavigate();

  function handleDashboard() {
    navigate("/");
  }

  return (
    <Flex w="100vw" h="100vh" align="center" justify="center">
      <Flex as="form" width="100%" maxWidth={500} flexDirection="column">
        <Logo h="40vmin" pointerEvents="none" />

        <Button
          type="submit"
          colorScheme={["red", "yellow"][Math.floor(Math.random() * 2)]}
          m={20}
          size="lg"
          onClick={handleDashboard}
        >
          Entrar
        </Button>
      </Flex>
    </Flex>
  );
}
