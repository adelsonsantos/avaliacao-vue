import DashboardLayout from "@/layout/dashboard/DashboardLayout.vue";
// GeneralViews
import NotFound from "@/pages/NotFoundPage.vue";

// Admin pages
import Dashboard from "@/pages/Dashboard.vue";
import Usuario from "@/pages/Usuario.vue";
//import Notifications from "@/pages/Notifications.vue";
import Deposito from "@/pages/Deposito.vue";
import Saque from "@/pages/Saque.vue";
import Typography from "@/pages/Typography2.vue";
//import TableList from "../pages/TableList";


const routes = [
  {
    path: "/",
    component: DashboardLayout,
    redirect: "/usuario",
    children: [
      {
        path: "dashboard",
        name: "dashboard",
        component: Dashboard
      },
      {
        path: "usuario",
        name: "usuário",
        component: Usuario
      },
      {
        path: "deposito",
        name: "depósito",
        component: Deposito
      },
      {
        path: "saque",
        name: "saque",
        component: Saque
      }
    ]
  },
  { path: "*", component: NotFound }
];

/**
 * Asynchronously load view (Webpack Lazy loading compatible)
 * The specified component must be inside the Views folder
 * @param  {string} name  the filename (basename) of the view to load.
function view(name) {
   var res= require('../components/Dashboard/Views/' + name + '.vue');
   return res;
};**/

export default routes;
