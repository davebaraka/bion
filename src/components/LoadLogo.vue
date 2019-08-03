<template>
  <v-app>
  <v-container fill-height class="animated fadeIn">
    <v-layout align-center justify-center>
        <v-img
          src="../assets/img/logo.png"
          aspect-ratio="1"
          max-width="125"
          max-height="75"
          contain
          class="animated infinite pulse"
        ></v-img>
    </v-layout>
  </v-container>
</v-app>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
  }),
  watch: {
    loaded: function() {
      this.$emit("loaded", this.loaded)
    }
  },
  mounted: function() {
    setTimeout(() => this.loaded=true, 3000);
  }
}
</script>

<style>
</style>
