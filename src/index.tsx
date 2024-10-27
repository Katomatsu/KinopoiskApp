import ReactDOM from "react-dom/client";
import App from "./App";
import './index.scss'
import {StrictMode} from "react";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";
import {MovieContextProvider} from "./context";

const root = ReactDOM.createRoot(document.getElementById("root"));
const queryClient = new QueryClient();
root.render(
  <>
    <StrictMode>
      <QueryClientProvider client={queryClient}>
        <MovieContextProvider>
          <App/>
        </MovieContextProvider>
      </QueryClientProvider>
    </StrictMode>
  </>
);
