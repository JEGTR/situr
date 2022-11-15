<template>
  <header>
    <Navbar />
  </header>
  <router-view />
</template>

<script>
import { defineAsyncComponent } from "vue";

export default {
  name: 'App',
  components: {
    Navbar: defineAsyncComponent( () => import(/* webpackChunkName: "Navbar" */ "@/modules/shared/components/Navbar"))
  }
}
</script>

<style>
</style>
