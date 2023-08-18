// Layout.tsx
import { Flex } from "@chakra-ui/react";
import { ReactNode } from "react";
import { Header } from "../../components/Header";
import { Sidebar } from "../../components/Sidebar";

interface LayoutProps {
  children: ReactNode;
}

export const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <Flex direction="column" h="100vh">
      <Header />
      <Flex w="100%" my="6" maxWidth={1480} mx="auto" px="6">
        <Sidebar />
        <div style={{ flex: 1 }}>{children}</div>
      </Flex>
    </Flex>
  );
};
