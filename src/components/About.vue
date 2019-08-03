<template>
  <v-layout align-start column class="fill">
    <transition name="slide-y-reverse-transition" tag="div">
      <div>
    <v-flex shrink>
      <h2 class="sub-heading">ABOUT ME</h2>
    </v-flex>
      <p class="font-0">Do you take at least 2 hours to find the perfect wallpaper for your device? I do!</p>
      <v-btn
      @click="$router.push('about')"
      large color="amber lighten-4">Learn More</v-btn>
      <br>
    <v-flex shrink class="move hidden-sm-and-down">
      <div class="rectangle"></div>
      <v-img
        src="https://picsum.photos/id/11/500/300"
        lazy-src="https://picsum.photos/id/11/10/6"
        aspect-ratio="1"
        class="grey lighten-2"
        width="500"
        height="300"
        style="box-shadow: 0px 3px 15px rgba(0,0,0,0.2);"
      ></v-img>
    </v-flex>
    <v-flex shrink class="hidden-md-and-up">
      <br>
      <div class="rectangle-sm"></div>
      <v-img
        src="https://picsum.photos/id/11/500/300"
        lazy-src="https://picsum.photos/id/11/10/6"
        aspect-ratio="1"
        class="grey lighten-2"
        width="250"
        height="150"
        style="box-shadow: 0px 3px 15px rgba(0,0,0,0.2);"
      ></v-img>
    </v-flex>
  </div>
    </transition>
    <div id="projects"></div>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
  }),
  methods: {
  },
}
</script>

<style scoped>
p {
  font-size: 115%;
}
.rectangle {
  height: 300px;
  width: 500px;
  background-color: #ffecb3;
  position: absolute;
  transform: translate(30px, 30px);
}
.rectangle-sm {
  height: 150px;
  width: 250px;
  background-color: #ffecb3;
  position: absolute;
  transform: translate(15px, 15px);
}
.move {
  transform: translate(45%, 0%);
}
</style>
