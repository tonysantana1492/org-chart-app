<template>
  <div id="app">
    <OrganizationChart />
  </div>
</template>

<script>
import OrganizationChart from "./components/OrganizationChart";

export default {
  components: {
    OrganizationChart,
  },
};
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

#app {
  font-family: Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
