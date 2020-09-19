<template>
    <div class="chart">
    <h1>Load data from Firebase</h1>
    <FirebaseChart/>
  </div>
</template>

<script>
import FirebaseChart from "../FirebaseData.js";

export default {
  components: {
    FirebaseChart
  }
};
</script>

<style>

</style>