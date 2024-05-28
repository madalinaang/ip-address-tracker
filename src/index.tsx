import React from "react";
import ReactDOM from "react-dom/client";
import Main from "./pages/Main";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./styles/style.scss";

const queryClient = new QueryClient();

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <Main />
    </QueryClientProvider>
  </React.StrictMode>
);
