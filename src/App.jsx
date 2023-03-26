import "./App.css";
import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
  Outlet,
} from "react-router-dom";
import Home from "./pages/home/Home";
import Add from "./pages/add/Add";
import Book from "./pages/book/Book";
import Books from "./pages/books/Books";
import Login from "./pages/login/Login";
import Message from "./pages/message/Message";
import Messages from "./pages/messages/Messages";
import Mybooks from "./pages/myBooks/Mybooks";
import Orders from "./pages/orders/Orders";
import Register from "./pages/register/Register";
import "../src/app.scss";
import Pay from "./pages/pay/Pay";
import Success from "./pages/success/Success";
import Error from "./pages/Error/Error";

function App() {
  const queryClient = new QueryClient();
  const Layout = () => {
    return (
      <div className="app">
        <QueryClientProvider client={queryClient}>
          <Navbar />
          <Outlet />
          <Footer />
        </QueryClientProvider>
      </div>
    );
  };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      errorElement: <Error />,
      children: [
        {
          path: "/",
          element: <Home />,
          errorElement: <Error />,
        },

        {
          path: "/books",
          element: <Books />,
          errorElement: <Error />,
        },
        {
          path: "/book/:id",
          element: <Book />,
          errorElement: <Error />,
        },
        {
          path: "/orders",
          element: <Orders />,
          errorElement: <Error />,
        },
        {
          path: "/add",
          element: <Add />,
          errorElement: <Error />,
        },
        {
          path: "/login",
          element: <Login />,
          errorElement: <Error />,
        },
        {
          path: "/messages",
          element: <Messages />,
          errorElement: <Error />,
        },
        {
          path: "/message/:id",
          element: <Message />,
          errorElement: <Error />,
        },
        {
          path: "/my-books",
          element: <Mybooks />,
          errorElement: <Error />,
        },
        {
          path: "/register",
          element: <Register />,
          errorElement: <Error />,
        },
        {
          path: "/pay/:id",
          element: <Pay />,
          errorElement: <Error />,
        },
        {
          path: "/success",
          element: <Success />,
          errorElement: <Error />,
        },
        {
          path: "/*",
          element: <Error />,
        },
      ],
    },
  ]);
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
