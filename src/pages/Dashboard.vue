<template lang="html">
  <div id="parentx">
    <vs-button @click="active = !active" color="primary" type="filled"
      >Open Sidebar</vs-button
    >
    <router-view />
    <vs-sidebar
      parent="body"
      default-index="1"
      color="primary"
      class="sidebarx"
      spacer
      v-model="active"
    >
      <div class="header-sidebar" slot="header">
        <vs-avatar
          size="70px"
          src="https://lh3.googleusercontent.com/a-/AFdZucp61Z5wmDfwQM56mm7vqEPATkoMt9GVAqpkUFgS=s288-p-rw-no"
        />

        <h4>Pham Van Huy</h4>
      </div>

      <vs-divider position="left"> Dashboard </vs-divider>
      <vs-sidebar-item index="1" icon="shopping_bag">
        <router-link to="/dashboard/ecommerce"> Ecommerce </router-link>
      </vs-sidebar-item>

      <vs-divider position="left"> Pages </vs-divider>
      <vs-sidebar-item index="2" icon="people">
        <router-link to="/dashboard/customers"> Customers </router-link>
      </vs-sidebar-item>

      <vs-divider position="left"> App </vs-divider>
      <vs-sidebar-item index="7" icon="date_range">
        <router-link to="/dashboard/calendar"> Calendar </router-link>
      </vs-sidebar-item>
      <vs-sidebar-item index="8" icon="date_range">
        <router-link to="/dashboard/editor"> Editor </router-link>
      </vs-sidebar-item>

      <vs-divider position="left"> Chart </vs-divider>
      <vs-sidebar-item index="3" icon="timeline">
        <router-link to="/dashboard/line"> Line </router-link>
      </vs-sidebar-item>
      <vs-sidebar-item index="4" icon="area_chart">
        <router-link to="/dashboard/area"> Area </router-link>
      </vs-sidebar-item>
      <vs-sidebar-item index="5" icon="bar_chart">
        <router-link to="/dashboard/bar"> Bar </router-link>
      </vs-sidebar-item>
      <vs-sidebar-item index="6" icon="pie_chart">
        <router-link to="/dashboard/pie"> Pie </router-link>
      </vs-sidebar-item>

      <div class="footer-sidebar" slot="footer">
        <vs-button icon="reply" color="danger" type="flat">log out</vs-button>
        <vs-button icon="settings" color="primary" type="border"></vs-button>
      </div>
    </vs-sidebar>
  </div>
</template>

<script>
export default {
  name: "Dashboard",
  data: () => ({
    active: false,
  }),
};
</script>

<style scoped>
.header-sidebar {
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 100%;
}
h4 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
}
h4 > button {
  margin-left: 10px;
}
.footer-sidebar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
}
.footer-sidebar > button {
  border: 0px solid rgba(0, 0, 0, 0) !important;
  border-left: 1px solid rgba(0, 0, 0, 0.07) !important;
  border-radius: 0px !important;
}
</style>
