<template>
  <div>
    <vs-alert active="true">
      Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
      tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
      veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
      commodo consequat
      <vs-button type="gradient">primary</vs-button>
      <vs-button color="success" type="gradient">success</vs-button>
      <vs-button color="danger" type="gradient">danger</vs-button>
      <vs-button color="warning" type="gradient">warning</vs-button>
      <vs-button color="dark" type="gradient">dark</vs-button>
      <vs-button
        color="#3dd495"
        gradient-color-secondary="rgb(130, 207, 23)"
        type="gradient"
        >dark</vs-button
      >
      <vs-button disabled type="gradient">Disabled</vs-button>
    </vs-alert>
  </div>
</template>
<script>
export default {
  name: "Dashboard",
};
</script>
