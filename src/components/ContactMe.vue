<template>
  <v-layout align-start column class="fill" id="contact">
    <v-flex shrink>
      <h2 class="sub-heading">LET'S GET IN TOUCH</h2>
      <br>
    </v-flex>
    <v-flex grow style="margin-left: 5%;">
        <v-btn icon @click="linkTo('')" class="space"><v-img src="../assets/img/envelope.svg" aspect-ratio="1" contain></v-img>
        </v-btn>
        <v-btn class="space" icon @click="linkTo('')"><v-img src="../assets/img/linkedin.svg" aspect-ratio="1" contain></v-img>
        </v-btn>
        <v-btn class="space" icon @click="linkTo('')"><v-img src="../assets/img/github.svg" aspect-ratio="1" contain></v-img>
        </v-btn>
        <v-btn class="space" icon @click="linkTo('')"><v-img src="../assets/img/phone.svg" aspect-ratio="1" contain></v-img>
        </v-btn>
    </v-flex>
        <v-flex grow>
    <p class="font2">Designed &amp; Built By <br>David Baraka</p>
      </v-flex>
  </v-layout>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
  }),
  methods: {
  },
    linkTo(l){
      if (l == '' || l == '') {
        window.location.href = l;
      } else {
        window.open(l, '_blank');
      }
    }
}
</script>

<style scoped>
h2 {
  margin-top: 50%;
}
.space {
  margin: 10%;
}
.font2 {
  font-family: Evolve B;
  font-size: 115%;
  color: #cbba83;
  margin-bottom: 25%;
}
</style>
