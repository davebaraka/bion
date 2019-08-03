<template>
  <v-layout align-center justify-center fill-height class="confine">
    <v-card
  max-width = "500"
  class="mx-auto amber lighten-4 move"
>
  <v-card-title class="heading textColor">ABOUT ME</v-card-title>
        <v-card-text><br><p>I’m a third year undergraduate at Wesleyan University pursing a Bachelor’s Degree in Computer Science and a minor in Integrated Design, Engineering, and Applied Sciences. </p>
                  <p>I enjoy designing, creating, and coding intuitive applications that focus on simplicity and elegance, while maintaining or improving the performance and functionality of the project. In searching for new and creative ideas, many times I find myself coming back to old ideas—expanding, extracting, and discovering things you only see when you love what you do.</p>
                  <p>In the case of finding “the perfect wallpaper,” I would have never realized the value of the default wallpaper. </p>
                  <p>When I’m not writing code or staring at pixels, you’ll find me spending time with friends, listening to music, or enjoying my inner foodie. </p>
          </v-card-text>
  </v-card>
  </v-layout>
</template>

<script>

export default {
  components: {
  },
};
</script>

<style scoped>
.confine {
  margin-left: 15%;
  margin-right: 15%;
}
.move {
  transform: translate(0%, 100px);
}
.heading {
  font-family: Evolve EVO B;
  font-size: 300%;
  line-height: .9;
}
p {
  font-family: Evolve R;
  font-size: 125%;
}
.textColor {
  color: #cbba83;
}
</style>
