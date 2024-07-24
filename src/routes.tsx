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
        element: <TableListResize/>
      },
      {
        path: "hrInfo",
        element: <h1>Hello User</h1>,
        children : [
          {
            path : "",
            element: <h1>HRinfoSys Dashboard</h1>
          },
          {
            path : "assess", 
            element : <h1>Element</h1>
          }
        ]
      },
      {
        path: "hello2",
        element: <h1>Hello User</h1>,
      },
      {
        path: "list",
        element: <TableList/>
      },
      {
        path : "charts",
        element : <Chart/>
      }
    ],
  },
]);

export default router;
