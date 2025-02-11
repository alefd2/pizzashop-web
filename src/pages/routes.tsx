import { createBrowserRouter } from "react-router";

import { AppLayout } from "./_layouts/app.layout";
import { AuthLayout } from "./_layouts/auth.layout";
import { Dashboard } from "./app/dashboard/dashboard";
import { OrdersPage } from "./app/orders/orders.page";
import { SignIn } from "./auth/sign-in";
import { SignUp } from "./auth/sign-up";
import { Error } from "./Error";

export const router = createBrowserRouter([
  {
    path: "/",
    element: <AppLayout />,
    // errorElement: <NotFoundPage />,
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
  {
    path: "*",
    element: <Error />,
  },
]);
