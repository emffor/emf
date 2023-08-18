import {
  Link as ChakraLink,
  LinkProps as ChakraLinkProps,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { NavLinkProps, NavLink as RouterNavLink } from "react-router-dom";

type ActiveLinkProps = ChakraLinkProps &
  NavLinkProps & {
    children: ReactNode;
    activeClassName?: string;
  };

export function ActiveLink({
  children,
  activeClassName = "active",
  ...rest
}: ActiveLinkProps) {
  return (
    <RouterNavLink {...rest}>
      {({ isActive }) => (
        <ChakraLink color={isActive ? "green.500" : undefined}>
          {children}
        </ChakraLink>
      )}
    </RouterNavLink>
  );
}
