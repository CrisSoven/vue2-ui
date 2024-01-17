<script setup>
import Navbar from "./components/Navbar.vue";
import Sidebar from "./components/Sidebar.vue";
</script>

<template>
  <div id="app">
    <Navbar />
    <div class="container-fluid">
      <div class="row">
        <div class="col-3 p-0">
          <Sidebar />
        </div>
        <div class="col-9">
          <router-view />
        </div>
      </div>
    </div>
  </div>
</template>
