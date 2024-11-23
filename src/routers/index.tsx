import { Navigate, useRoutes } from "react-router-dom";
import Login from "@/views/login";
import Layout from "@/layouts";
import User from "@/views/system/user";
import Role from "@/views/system/role";
import Permission from "@/views/system/permission";

const rootRouter = [
  {
    path: "/",
    element: <Navigate to="/login" />
  },
  {
    path: "/login",
    element: <Login />
  },
  {
    path: "/home",
    element: <Layout />,
    children: [
      {
        path: "",
        element: <Navigate to="/home/index" />
      },
      {
        path: "index",
        element: <div>首页内容</div>
      },
      {
        path: "system",
        children: [
          {
            path: "user",
            element: <User />
          },
          {
            path: "role",
            element: <Role />
          },
          {
            path: "permission",
            element: <Permission />
          }
        ]
      }
    ]
  },
  {
    path: "*",
    element: <Navigate to="/login" />
  }
];

const Router = () => {
  return useRoutes(rootRouter);
};

export default Router;
