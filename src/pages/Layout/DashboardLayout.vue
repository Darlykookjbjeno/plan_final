<template>
  <div class="wrapper">
    <side-bar>
      <sidebar-link to="/dashboard">
        <i class="tim-icons icon-chart-pie-36"></i>
        <template>
          <p>Programar Turno</p>
        </template>
      </sidebar-link>
      <sidebar-link to="/icons">
        <i class="tim-icons icon-atom"></i>
        <template>
          <p>Historial</p>
        </template> 
        
      </sidebar-link>
     
      

      <sidebar-link to="/notifications">
        <i class="tim-icons icon-bell-55"></i>
        <template>
          <p>Notificaciones</p>
        </template>
      </sidebar-link>

      <sidebar-link to="/typography">
        <i class="tim-icons icon-align-center"></i>
        <template>
          <p>Typography</p>
        </template>
      </sidebar-link>
      
    </side-bar>
    <sidebar-share :background-color.sync="backgroundColor"></sidebar-share>

    <div class="main-panel" :data="backgroundColor">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"></dashboard-content>

      <content-footer></content-footer>
    </div>

  </div>
</template>
<style lang="scss"></style>
<script>

import TopNavbar from "./TopNavbar.vue";
import DashboardContent from "./DashboardContent.vue";
import SideBar from "@/components/SidebarPlugin/SideBar.vue";
import SidebarLink from "@/components/SidebarPlugin/SidebarLink.vue";



export default {

  components: {

    TopNavbar,
    DashboardContent,
    SideBar,
    SidebarLink,

  },


  data() {
    return {
      backgroundColor: "#11AAB8"
    };
  },

};
</script>
