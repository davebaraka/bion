<template>
  <v-app-bar
    app
    elevate-on-scroll
    hide-on-scroll
    scroll-threshold = 576
    height = 72
    color = "#191919"
  >

    <v-btn
      icon
      color="amber lighten-4"
      :class="{'ml-1': $vuetify.breakpoint.smAndDown,
        'pl-5, ml-5': $vuetify.breakpoint.mdAndUp}"
        @click="goTo"
    >
       <v-img src="../assets/img/logo.png" aspect-ratio="1" contain></v-img>
    </v-btn>

    <v-spacer></v-spacer>

    <div :class = "['pr-5', 'mr-5', 'mt-4']" v-if="$route.name === 'index'">
      <v-btn
        v-for="item in items" :key="item.title"
        text
        @click="linkTo(item.link)"
        :class="['hidden-sm-and-down', 'app-bar-font', 'amber--text', 'text--lighten-4']"
        v-show="loaded"
      >
        {{ item.title }}
      </v-btn>
    </div>

    <v-btn
      icon
      :color="'amber lighten-4'"
      @click="drawer = !drawer"
      :class = "['mr-1', 'hidden-md-and-up']"
      v-if="$route.name === 'index'"
    >
       <v-icon>mdi-chevron-left</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
export default {
  props:['drawer_truth'],
  data: function () {
    return {
      drawer: null,
      items: [{
        title: "ABOUT",
        link: "#about"
      },
      {
        title: "PROJECTS",
        link: "#projects"
      },
      {
        title: "CONTACT",
        link: "#contact"
      }],
      loaded: false,
    }
  },
  methods: {
    goTo(){
      window.location.replace('https://davebaraka.dev');
    },
    linkTo(l){
      document.querySelector(l).scrollIntoView({ behavior: 'smooth' });
    }
  },
  watch: {
    drawer_truth: function() {
      this.drawer = this.drawer_truth
    },
    drawer: function () {
      this.$emit("drawer", this.drawer);
    }
  },
  mounted: function() {
    this.loaded=true;
  }
}
</script>

<style>
</style>
