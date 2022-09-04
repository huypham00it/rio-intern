import {
  AuthPage,
  HomePage,
  NotiPage,
  JobResult,
  JobView,
  TeamsView,
  Dashboard,
} from "@/pages";
import { LoginForm, RegisterForm } from "@/components/AuthPage";
import { LineChart, AreaChart, BarChart, PieChart } from "@/components/Chart";
import { Customer, Calendar, Editor } from "@/components/Dashboard";

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
    name: "JobResult",
    component: JobResult,
  },
  {
    path: "/jobs/results/:id",
    name: "JobView",
    component: JobView,
  },
  {
    path: "/teams",
    name: "Teams",
    component: TeamsView,
    meta: { title: "Teams" },
  },
  {
    path: "/dashboard",
    component: Dashboard,
    children: [
      {
        path: "line",
        component: LineChart,
        meta: { title: "Line" },
      },
      {
        path: "area",
        component: AreaChart,
        meta: { title: "Area" },
      },
      {
        path: "bar",
        component: BarChart,
        meta: { title: "Bar" },
      },
      {
        path: "pie",
        component: PieChart,
        meta: { title: "Pie" },
      },
      {
        path: "customers",
        component: Customer,
        meta: { title: "Customer" },
      },
      {
        path: "calendar",
        component: Calendar,
        meta: { title: "Calendar" },
      },
      {
        path: "editor",
        component: Editor,
        meta: { title: "Editor" },
      },
    ],
    meta: { title: "dashboard" },
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
    redirect: "/",
  },
];
export default routes;
