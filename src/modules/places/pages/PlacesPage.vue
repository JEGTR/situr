<template>
  <main>
    <MapView />
    <footer class="container">
        <p class="float-end"><a href="#">Back to top</a></p>
        <p>&copy; 2017–2022 Company, Inc. &middot; <a href="#">Privacy</a> &middot; <a href="#">Terms</a></p>
    </footer>
  </main>
  
</template>
<script>

import MapView from "@/modules/shared/components/MapView"

export default {
  name: 'App',
  components: {
    MapView
  }
}

</script>
