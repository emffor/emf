import {
  ReactNode,
  createContext,
  useCallback,
  useContext,
  useState,
} from "react";

interface EmfProviderProps {
  children: ReactNode;
}

interface EmfContextData {
  isLoading: boolean;
  toggleLoading(): void;
}

const EmfLoadingContext = createContext<EmfContextData | undefined>(undefined);

export function EmfMainProvider({ children }: EmfProviderProps) {
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = useCallback(() => {
    setIsLoading((prevState) => !prevState);
  }, []);

  return (
    <EmfLoadingContext.Provider value={{ isLoading, toggleLoading }}>
      {children}
    </EmfLoadingContext.Provider>
  );
}

export const useEmfLoading = (): EmfContextData => {
  const context = useContext(EmfLoadingContext);
  if (!context) {
    throw new Error("useEmfLoading must be used within an EmfLoadingProvider");
  }
  return context;
};
