import { lazy, Suspense } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const MainLayout = lazy(() => import("@layouts/MainLayout/MainLayout"));

import { LottieHandler, PageSuspenseFallback } from "@components/feedback";

const Home = lazy(() => import("@pages/Home"));
const Products = lazy(() => import("@pages/Products"));
const SingleProduct= lazy (()=> import ("@pages/SingleProduct"))
const Cart = lazy(() => import("@pages/Cart"));
const AboutUs = lazy(() => import("@pages/AboutUs"));
import Error from "@pages/Error";





const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense
        fallback={
          <div style={{ marginTop: "10%" }}>
            <LottieHandler type="loading" message="Loading please wait..." />
          </div>
        }
      >
        <MainLayout />
      </Suspense>
    ),
    errorElement: <Error />,
    children: [
      {
        index: true,
        element: (
          <PageSuspenseFallback>
            <Home />
          </PageSuspenseFallback>
        ),
      },
      {
        path: "/cart",
        element: (
          <PageSuspenseFallback>
            <Cart />
          </PageSuspenseFallback>
        ),
      },
     
      {
        path: "/products",
        element: (
          <PageSuspenseFallback>
            <Products />
          </PageSuspenseFallback>
        ),
      },
      {
        path:"/products/:id",
        element:(
          <PageSuspenseFallback>
            <SingleProduct />
          </PageSuspenseFallback>
        )
      }
      ,{
        path: "about-us",
        element: (
          <PageSuspenseFallback>
            <AboutUs />
          </PageSuspenseFallback>
        ),
      },
     
    ],
  },
]);

const AppRouter = () => {
 
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
};

export default AppRouter;
