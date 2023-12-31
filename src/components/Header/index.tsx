import { Flex, Icon, IconButton, useBreakpointValue } from "@chakra-ui/react";
import { RiMenuLine } from "react-icons/ri";
import { ColorModeSwitcher } from "../../config/ColorModeSwitcher";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";
import { BannerGitHub } from "./BannerGitHub";
import { Logo } from "./Logo";

export function Header() {
  const { openSidebar } = useSidebarDrawer();

  const isWideVersion = useBreakpointValue(
    {
      base: false,
      lg: true,
    },
    "lg"
  );

  return (
    <Flex
      as="header"
      width="100%"
      maxWidth={1480}
      height="20"
      marginX="auto"
      marginTop="4"
      paddingX="6"
      alignItems="center"
    >
      {!isWideVersion && (
        <IconButton
          aria-label="Open navigation"
          icon={<Icon as={RiMenuLine} />}
          fontSize="24"
          variant="unstyled"
          onClick={openSidebar}
          marginRight="2"
        ></IconButton>
      )}
      <Logo />

      <BannerGitHub showProfileData={isWideVersion} />
      <ColorModeSwitcher justifySelf="flex-end" />
    </Flex>
  );
}
