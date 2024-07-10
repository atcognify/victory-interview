import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Home",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "About",
    path: "/test",
    newTab: false,
  },
  {
    id: 3,
    title: "News",
    path: "/test",
    newTab: false,
  },
  {
    id: 5,
    title: "Partner Ecosystem",
    path: "/test",
    newTab: false,
  },
  {
    id: 6,
    title: "Solutions",
    newTab: false,
    submenu: [
      {
        id: 41,
        title: "Hybrid Cloud Architecture",
        path: "/test",
        newTab: false,
      },
      {
        id: 42,
        title: "Multi Cloud Architecture",
        path: "/test",
        newTab: false,
      },
      {
        id: 43,
        title: "Strategic Repatriation",
        path: "/test",
        newTab: false,
      },
      {
        id: 44,
        title: "Ransom Recovery",
        path: "/test",
        newTab: false,
      },
      {
        id: 45,
        title: "Security & Compliance",
        path: "/test",
        newTab: false,
      },
      {
        id: 48,
        title: "Data Sovereignty",
        path: "/error",
        newTab: false,
      },
    ],
  },
];
export default menuData;
