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
  color: #2c3e50;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
