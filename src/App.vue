<template>
  <div>
    <transition name="slide-y-transition">
    <LoadLogo v-if="!loaded_truth_logo" @loaded="loaded"/>
    </transition>
    <transition name="fade-transition" tag="v-app">
    <v-app v-if="loaded_truth_app">
      <NavigationDrawer
        v-bind:drawer_truth='drawer_truth' @drawer_="drawerToggle_"
      />
      <AppBar
        @drawer="drawerToggle" v-bind:drawer_truth='drawer_truth'
      />
      <!-- Sizes your content based upon application components -->
      <v-content>
        <!-- Provides the application the proper gutter -->
        <v-container fluid>
          <!-- If using vue-router -->
        <transition name='scroll-y-transition'>
            <router-view></router-view>
        </transition>
        </v-container>
      </v-content>
    </v-app>
    </transition>
</div>
</template>

<script>
import AppBar from './components/AppBar';
import NavigationDrawer from './components/NavigationDrawer';
import LoadLogo from './components/LoadLogo';

export default {
  name: 'App',
  components: {
    AppBar,
    NavigationDrawer,
    LoadLogo
  },
  data: () => ({
    drawer_truth: null,
    loaded_truth_logo: false,
    loaded_truth_app: false,
    hide: false
  }),
  methods: {
    drawerToggle: function(emit) {
      this.drawer_truth = emit
    },
    drawerToggle_: function(emit) {
      this.drawer_truth = emit
    },
    loaded: function(emit) {
      this.loaded_truth_logo = emit;
      setTimeout(() => this.loaded_truth_app = emit, 1500);
    }
  }
};
</script>

<style src="./assets/css/App.css"></style>
