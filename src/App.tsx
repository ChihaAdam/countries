import { QueryClientProvider, QueryClient } from "@tanstack/react-query";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Nav from "./pages/nav";
import MainPage from "./pages/mainPage";
import Error from "./components/static/error";
const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <Nav />,
    errorElement: <Error />,
    children: [
      {
        path: "/",
        element:<MainPage />,
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
