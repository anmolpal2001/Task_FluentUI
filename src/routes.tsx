import { createBrowserRouter } from "react-router-dom";
import Layout from "./layout/Layout";
import TableList from "./components/TableList";
import Chart from "./components/Chart";
import TableListResize from "./components/ResizeableTable";
const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "hello",
        element: <h1>Hello User</h1>,
      },
      {
        path: "governance",
        element: <TableListResize />,
      },
      {
        path: "hrInfo",
        element: <h1>Hello User</h1>,
        children: [
          {
            path: "",
            element: <h1>HRinfoSys Dashboard</h1>,
          },
          {
            path: "assess",
            element: <h1>Element</h1>,
          },
        ],
      },
      {
        path: "hello2",
        element: <h1>Hello User</h1>,
      },
      {
        path: "list",
        element: <TableList />,
      },
      {
        path: "charts",
        element: <Chart />,
      },
      {
        path: "hr",
        children: [
          {
            path: "testing-1",
            children: [
              {
                path: "testing-1.1",
                element: <h1>Testing 1.1</h1>,
              },
              {
                path: "testing-1.2",
                element: <h1>Testing 1.2</h1>,
              },
            ],
          },
          {
            path: "testing-2",
            children: [
              {
                path: "testing-2.1",
                element: <h1>Testing 2.1</h1>,
              },
              {
                path: "testing-2.2",
                element: <h1>Testing 2.2</h1>,
              },
            ],
          },
          {
            path: "testing5",
            element: <h1>Element</h1>,
          },
        ],
      },
    ],
  },
]);

export default router;
