import { Stack } from "@chakra-ui/react";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

import { FaCarSide } from "react-icons/fa";
import { GiBigGear } from "react-icons/gi";
import { RiDashboardLine } from "react-icons/ri";
import { TiSocialLastFmCircular } from "react-icons/ti";
import { useSidebarDrawer } from "../../contexts/SideBarDrawerContext";

export function SideBarNav() {
  const { closeSidebar } = useSidebarDrawer();

  return (
    <Stack spacing="12" align="flex-start">
      <NavSection title={"GERAL"}>
        <NavLink
          icon={RiDashboardLine}
          color="green.500"
          href="/"
          onClick={closeSidebar}
        >
          Dashboard
        </NavLink>
      </NavSection>

      <NavSection title={"FUNCIONALIDADES"}>
        <NavLink
          icon={FaCarSide}
          color="green.500"
          href="/carros"
          onClick={closeSidebar}
        >
          Carros
        </NavLink>
        <NavLink
          icon={TiSocialLastFmCircular}
          color="green.500"
          href="/marcas"
          onClick={closeSidebar}
        >
          Marcas
        </NavLink>
        <NavLink
          icon={GiBigGear}
          color="green.500"
          href="/cambios"
          onClick={closeSidebar}
        >
          Câmbios
        </NavLink>
      </NavSection>
    </Stack>
  );
}
