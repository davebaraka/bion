<template>
  <v-layout align-start class="fill-main">
    <v-flex>
      <transition name="slide-y-reverse-transition">
      <div v-if="loaded">
      <p class="font-0 hidden-sm-and-down">Hi, my name is</p>
      <p class="font-0-0 hidden-md-and-up">Hi, my name is</p>
      </div>
      </transition>
      <transition name="slide-y-reverse-transition" tag="div">
      <div v-show="loaded1">
      <p class="font-1 hidden-sm-and-down">DAVID BARAKA.</p>
      <p class="font-1-2 hidden-md-and-up">DAVID BARAKA.</p>
    </div>
      </transition>
      <transition name="slide-y-reverse-transition">
      <div v-show="loaded2">
      <p class="font-0 hidden-sm-and-down"><em>"The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less."</em> - Socrates</p>
      <p class="font-0-0 hidden-md-and-up"><em>"The secret of happiness, you see, is not found in seeking more, but in developing the capacity to enjoy less."</em> - Socrates</p>
    </div>
      </transition>
      <div id="about"></div>
    </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
    loaded1: false,
    loaded2: false,
  }),
  methods: {
    onLoaded() {
      setTimeout(() => this.loaded=true, 500);
      setTimeout(() => this.loaded1=true, 750);
      setTimeout(() => this.loaded2=true, 1000);
    }
  },
  mounted: function() {
    this.onLoaded();
  }
}
</script>

<style scoped>
.font-0 {
  font-size: 150%;
}
.font-0-0 {
  font-size: 115%;
}
.font-1 {
  font-family: Evolve EVO B;
  font-size: 750%;
  line-height: 90%;
}
.font-1-2 {
  font-family: Evolve EVO B;
  font-size: 450%;
  line-height: 90%;
}
</style>
