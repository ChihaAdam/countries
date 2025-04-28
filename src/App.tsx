import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./pages/nav";
import MainPage from "./pages/mainPage";
import Error from "./components/static/error";
import { lazy, Suspense } from "react";
import Loading from "./components/static/loading";
const Info = lazy(() => import("./pages/info.tsx"));
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element: <MainPage />,
      },
      {
        path: "/:number",
        element: (
          <Suspense fallback={<Loading />}>
            <Info />
          </Suspense>
        ),
      },
    ],
  },
]);
function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <RouterProvider router={router} />
    </QueryClientProvider>
  );
}

export default App;
