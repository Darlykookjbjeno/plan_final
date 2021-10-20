import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";
import Dashboard from "@/pages/Dashboard.vue";
import Icons from "@/pages/Icons.vue";
import Notifications from "@/pages/Notifications.vue";
import UserProfile from "@/pages/UserProfile.vue";
import Typography from "@/pages/Typography.vue";



const routes = [{
  path: "/",
  component: DashboardLayout,
  redirect: "dashboard",
  children:[
    {
      path: "dashboard",
      name: "Programar Turno",
      component: Dashboard
    },
    {
      path: "icons",
      name: "Historial",
      component: Icons
    },
    {
      path: "notifications",
      name: "Notifications",
      component: Notifications
    },
    {
      path: "user",
      name: "Perfil de Usuario",
      component: UserProfile
    },

    {
      path: "typography",
      name: "Typography",
      component: Typography
    }
  ]

}]

export default routes;
