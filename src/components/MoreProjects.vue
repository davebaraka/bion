<template>
  <transition name="fade-transition" tag="v-container">
  <v-container grid-list-xl>
    <h2 class="sub-heading">MORE PROJECTS</h2>
    <v-layout wrap>
    <v-flex shrink pr-4 v-for="item in items" :key="item.title">
      <v-card
      class="amber lighten-4" elevation='12' min-height='250' width="500" hover>
      <v-card-title class="cardTitle"> {{ item.title }} </v-card-title>
      <v-card-text class='cardText'> {{ item.text }} </v-card-text>
      <v-card-actions>
        <v-btn icon @click="linkTo(item.link)"><v-img src="../assets/img/link.svg" aspect-ratio="1" contain></v-img></v-btn>
      </v-card-actions>
    </v-card>
    </v-flex>
  </v-layout>
  </v-container>
 </transition>
</template>

<script>
export default {
  data: () => ({
    loaded: false,
    items: [
      {
        title: 'STANDARD ML OF NEW JERSEY IMPLEMENTATION',
        text: 'An implementation of the programming language SML including lexcial analysis, parsing, type-checking and type-inference, interpretation, and compilation.',
        link: ''
      },
      {
        title: 'THE EVOLVING NBA',
        text: 'R Project examining the diffusion of the "Golden State Warriors style of basketball" across the NBA.',
        link: ''
      },
      {
        title: 'PROPOSITIONAL SEQUENT CALCULUS PROVER',
        text: 'Python program that automatically detects whether a given logcial statement is a tautology. Ohterwise, provides a counterexample.',
        link: ''
      },
      {
        title: 'DIGITAL ART PROTFOLIO',
        text: 'Various art projects utilizing laser-cutting, Adobe Photoshop, and Adobe Illustrator.',
        link: ''
      },
      {
        title: 'HOPPER',
        text: 'A biologically-inspired hopper constructed from a limited set of materials. “Fail early and fail often.”',
        link: ''
      },
      {
        title: 'PYTHON GAMES',
        text: 'A collection of games created in python.',
        link: ''
      },
      {
        title: 'BAYESIAN INFERENCE',
        text: 'SML program that performs statistical analysis on text.',
        link: ''
      },
      {
        title: 'ENVIRONMENTAL ADOVOCACY POSTER',
        text: 'Poster created as an initiaive to heighten environmental awareness.',
        link: ''
      },
      {
        title: 'FLOATING GARDEN',
        text: 'Portable garden for plants that requires minimal maintenance.',
        link: ''
      },
    ]
  }),
  methods: {
    linkTo(l){
      if (l == '') {
        window.location.href = l;
      } else {
        window.open(l, '_blank');
      }
    }
  }
}
</script>

<style scoped>
.cardTitle {
  font-family: Evolve B;
  font-size: 150%;
  color: #cbba83;
}
.cardText {
  font-family: Evolve B;
  font-size: 115%;
  color: #191919;
}

</style>
