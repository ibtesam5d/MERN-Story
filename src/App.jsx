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
import Home from "../pages/home/Home";
import Add from "../pages/add/Add";
import Book from "../pages/book/Book";
import Books from "../pages/books/Books";
import Login from "../pages/login/Login";
import Message from "../pages/message/Message";
import Messages from "../pages/messages/Messages";
import Mybooks from "../pages/myBooks/Mybooks";
import Orders from "../pages/orders/Orders";
import Register from "../pages/register/Register";
import "../src/app.scss";

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
      children: [
        {
          path: "/",
          element: <Home />,
        },
        {
          path: "/books",
          element: <Books />,
        },
        {
          path: "/book/:id",
          element: <Book />,
        },
        {
          path: "/orders",
          element: <Orders />,
        },
        {
          path: "/add",
          element: <Add />,
        },
        {
          path: "/login",
          element: <Login />,
        },
        {
          path: "/messages",
          element: <Messages />,
        },
        {
          path: "/message/:id",
          element: <Message />,
        },
        {
          path: "/my-books",
          element: <Mybooks />,
        },
        {
          path: "/register",
          element: <Register />,
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
