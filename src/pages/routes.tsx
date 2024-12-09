import { createBrowserRouter } from "react-router";
import { Dashboard } from "./app/dashboard/dashboard";
import { SignIn } from "./auth/sign-in";
import { AppLayout } from "./_layouts/app.layout";
import { AuthLayout } from "./_layouts/auth.layout";
import { SignUp } from "./auth/sign-up";
import { OrdersPage } from "./app/orders/orders.page";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    children: [
      { path: "/", element: <Dashboard /> },
      { path: "/orders", element: <OrdersPage /> },
    ],
  },

  {
    path: "/",
    element: <AuthLayout />,
    children: [
      { path: "/sign-in", element: <SignIn /> },
      { path: "/sign-up", element: <SignUp /> },
    ],
  },
]);
