//Layouts
import DefaultLayout from "../Components/Layout/DefaultLayouts";
import FooterLayouts from "../Components/Layout/FooterLayout";

//Pages
import Home from "../Pages/Home";
import Cart from "../Pages/Cart";
import Detail from "./../Pages/Detail/index";

export const publicRoutes = [
  {
    path: "/",
    component: Home,
    layout: DefaultLayout,
  },

  {
    path: "/cart",
    component: Cart,
    layout: FooterLayouts,
  },
  {
    path: "/detail/:title",
    component: Detail,
    layout: FooterLayouts,
  },
];
