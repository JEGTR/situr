<template>
    <main>
      <div class="container p-4 text-center">
      <div class="row">
        <div class="col">
          <h1>{{ id }}</h1>
        </div>
      </div>
    </div>
    </main>
</template>

<script>

export default {
    props: {
        id: {
            type: String,
            required: true
        },
    },

}
</script>