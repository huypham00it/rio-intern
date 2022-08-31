import { AuthPage, HomePage, NotiPage, JobResult } from "@/pages";
import { LoginForm, RegisterForm } from "@/components/AuthPage";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomePage,
  },
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
  {
    path: "/jobs/results",
    component: JobResult,
  },
  {
    path: "/dashboard",
    component: { template: "<h1>Dashboard</h1>" },
    meta: { title: "Dashboard" },
  },
  {
    path: "/contact",
    component: { template: "<h1>Contact</h1>" },
    meta: { title: "Contact" },
  },
  {
    path: "/notices",
    component: NotiPage,
    meta: { title: "Notices" },
  },
  {
    path: "/balance",
    component: { template: "<h1>Balance</h1>" },
    meta: { title: "Balance" },
  },
  {
    path: "/loans",
    component: { template: "<h1>Loans</h1>" },
    meta: { title: "Loans" },
  },
  {
    path: "*",
    component: { template: "<h1>Not found</h1>" },
  },
];
export default routes;
