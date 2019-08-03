<template>
  <v-navigation-drawer
    app
    v-model="drawer_"
    :temporary="true"
    :color="'amber lighten-4'"
    :right='true'
    class="hidden-md-and-up"
  >
  <v-container
    fluid
    fill-height
    justify-center
    align-center
  >

    <v-list>

      <v-list-item
        v-for="item in items" :key="item.title"
        link
        class="text-center"
        @click="linkTo(item.link)"
      >
      <v-list-item-title :class="['myColor-text', 'evolve-evo-b', 'py-5']"
      >{{ item.title }}
      </v-list-item-title>

      </v-list-item>
    </v-list>
  </v-container>
  </v-navigation-drawer>
</template>

<script>
export default {
  props: ['drawer_truth'],
  data () {
    return {
      drawer_: null,
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
    }
  }, methods: {
    linkTo(l){
      document.querySelector(l).scrollIntoView({ behavior: 'smooth' });
      this.drawer_ = false;
    }
  },
  watch: {
    drawer_truth: function() {
      if (this.drawer_truth) {
        document.documentElement.setAttribute(
          "style", "overscroll-behavior: none;");
      } else {
        document.documentElement.setAttribute(
          "style", "overscroll-behavior: auto;");
      }
      this.drawer_ = this.drawer_truth;
    },
    drawer_: function() {
      this.$emit("drawer_", this.drawer_);
    }
  },
}
</script>

<style></style>
