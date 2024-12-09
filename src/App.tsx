import "./index.css";
import { RouterProvider } from "react-router";
import { router } from "./pages/routes";
import { Helmet, HelmetProvider } from "react-helmet-async";
import { Toaster } from "sonner";
import { ThemeProvider } from "./components/theme/theme-provider";

export function App() {
  return (
    <>
      <HelmetProvider>
        <ThemeProvider defaultTheme="dark" storageKey="pizzashop-theme">
          <Helmet titleTemplate="%s | pizza.shop" />
          <Toaster richColors position="top-right" />
          <RouterProvider router={router} />
        </ThemeProvider>
      </HelmetProvider>
    </>
  );
}