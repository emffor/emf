import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface SideBarDrawerProviderProps {
  children: ReactNode;
}

interface SideBarDrawerContextData {
  isOpen: boolean;
  openSidebar(): void;
  closeSidebar(): void;
}

const SideBarDrawerContext = createContext<
  SideBarDrawerContextData | undefined
>(undefined);

export function SideBarDrawerProvider({
  children,
}: SideBarDrawerProviderProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openSidebar = useCallback(() => {
    setIsOpen(true);
  }, []);

  const closeSidebar = useCallback(() => {
    setIsOpen(false);
  }, []);

  return (
    <SideBarDrawerContext.Provider
      value={{ isOpen, openSidebar, closeSidebar }}
    >
      {children}
    </SideBarDrawerContext.Provider>
  );
}

export const useSidebarDrawer = (): SideBarDrawerContextData => {
  const context = useContext(SideBarDrawerContext);
  if (!context) {
    throw new Error(
      "useSidebarDrawer must be used within a SideBarDrawerProvider"
    );
  }
  return context;
};
