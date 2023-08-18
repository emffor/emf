import { Text } from "@chakra-ui/react";

export function Logo() {
  return (
    <Text
      fontSize={["2xl", "3xl"]}
      fontWeight="bold"
      letterSpacing="tight"
      w="64"
      color={"green.500"}
    >
      emfcars
      <Text as="span" ml="1" color="yellow.500">
        .
      </Text>
    </Text>
  );
}
