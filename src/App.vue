<template>
  <div id="app">
    <img src="./assets/logo.png">
    <dir class="container">
      <router-view/>
    </dir>
  </div>
</template>

<script>
export default {
  name: 'app'
}
</script>

<style>
@import "assets/css/style.css";
</style>
