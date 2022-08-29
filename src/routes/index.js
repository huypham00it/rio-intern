import { AuthPage } from "@/pages";
import { LoginForm, RegisterForm } from "@/components/AuthPage";

const routes = [
  {
    path: "/auth",
    component: AuthPage,
    children: [
      {
        path: "login",
        component: LoginForm,
        meta: { title: "Log in" },
      },
      {
        path: "register",
        component: RegisterForm,
        meta: { title: "Register" },
      },
    ],
  },
];
export default routes;
