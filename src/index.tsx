import { ColorModeScript } from "@chakra-ui/react";
import * as React from "react";
import * as ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { App } from "./App";
import { EmfMainProvider } from "./contexts/EmfMainContext";
import { SideBarDrawerProvider } from "./contexts/SideBarDrawerContext";

const container = document.getElementById("root");
if (!container) throw new Error("Failed to find the root element");
const root = ReactDOM.createRoot(container);

root.render(
  <React.StrictMode>
    <SideBarDrawerProvider>
      <EmfMainProvider>
        <BrowserRouter>
          <ColorModeScript />
          <App />
        </BrowserRouter>
      </EmfMainProvider>
    </SideBarDrawerProvider>
  </React.StrictMode>
);
