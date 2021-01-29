<template>
  <v-layout align-start column class="fill">
    <transition name="slide-y-reverse-transition" tag="div">
      <div>
    <v-flex shrink>
      <h2 class="sub-heading">SOME THINGS I'VE BUILT</h2>
      <br>
    </v-flex>
    <v-flex shrink class="move hidden-sm-and-down">
      <v-img
        src="../assets/img/screenshot.png"
        aspect-ratio="1"
        class="black lighten-2 photo"
        width="500"
        height="300"
        style=""
      ></v-img>
      <div class="rectangle" style="padding: 3%;">
        <h3>OurCampus</h3>
        <p>Android app for campus events, professor ratings, and student utilities.</p>
         <v-btn
           @click="linkTo('')"
         class="ma-2" outlined color="#191919">Learn More</v-btn>
      </div>
      <br>
      <br>
      <br>
      <br>
    </v-flex>
    <v-flex shrink class="hidden-md-and-up">
      <br>
      <v-img
        src="../assets/img/screenshot.png"
        aspect-ratio="1"
        class="black lighten-2"
        width="250"
        height="150"
        style=""
      ></v-img>
      <div class="rectangle-sm" style="padding: 3%;">
        <h3 class="sm1">OurCampus</h3>
              <p class="sm">Android app for campus events, professor ratings, and student utilities.</p>
               <v-btn
               @click="linkTo('')"
               class="ma-2 sm" small outlined color="#191919">Learn More</v-btn></div>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
    </v-flex>

    <v-flex shrink class="move hidden-sm-and-down">
      <v-img
        src="../assets/img/screenshot1.png"
        aspect-ratio="1"
        class="black lighten-2 photo"
        width="500"
        height="300"
        style=""
      ></v-img>
      <div class="rectangle" style="padding: 3%;">
        <h3>Compliance Traceability: Privacy Policies as Software Development Artifacts</h3>
        <p>Privacy policy generator that automatically generates a privacy policy based on a developer's code.</p>
         <v-btn
          @click="linkTo('')"
         class="ma-2" outlined color="#191919">Learn More</v-btn>
      </div>
      <br>
      <br>
      <br>
      <br>
    </v-flex>
    <v-flex shrink class="hidden-md-and-up">
      <br>
      <v-img
        src="../assets/img/screenshot1.png"
        aspect-ratio="1"
        class="black lighten-2"
        width="250"
        height="150"
        style=""
      ></v-img>
      <div class="rectangle-sm" style="padding: 3%;">
        <h3 class="sm1">Compliance Traceability: Privacy Policies as Software Development Artifacts</h3>
              <p class="sm">Privacy policy generator that automatically generates a privacy policy based on a developer's code. </p>
               <v-btn
               @click="linkTo('')"
               class="ma-2 sm" small outlined color="#191919">Learn More</v-btn></div>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
    </v-flex>

    <v-flex shrink class="move hidden-sm-and-down">
      <v-img
        src="../assets/img/gd.png"
        aspect-ratio="1"
        class="black lighten-2 photo"
        width="500"
        height="300"
        style=""
      ></v-img>
      <div class="rectangle" style="padding: 3%;">
        <h3>GRAPHIC DESIGN PORTFOLIO</h3>
        <p>Several projects created using Adobe InDesign. Featuring a re-creation of the book jacket, <em>Things Not Seen</em>, by Andrew Clements.</p>
         <v-btn
          @click="linkTo('')"
         class="ma-2" outlined color="#191919">See My Portfolio</v-btn>
      </div>
      <br>
      <br>
      <br>
    </v-flex>
    <v-flex shrink class="hidden-md-and-up">
      <br>
      <v-img
        src="../assets/img/gd.png"
        aspect-ratio="1"
        class="black lighten-2"
        width="250"
        height="150"
        style=""
      ></v-img>
      <div class="rectangle-sm" style="padding: 3%;">
        <h3 class="sm1">GRAPHIC DESIGN PORTFOLIO</h3>
              <p class="sm">Several projects created using Adobe InDesign. Featuring a re-creation of the book jacket, <em>Things Not Seen</em>, by Andrew Clements.</p>
               <v-btn
               @click="linkTo('')"
               class="ma-2 sm" small outlined color="#191919">See My Portfolio</v-btn></div>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
               <br>
    </v-flex>
    <v-btn
    @click="loaded = !loaded"
    large color="amber lighten-4">MORE</v-btn>
    <br>
    <br>
  </div>
    </transition>
  <MoreProjects v-if='loaded'/>
  </v-layout>
</template>

<script>
import MoreProjects from './MoreProjects'

export default {
  components: {
    MoreProjects
  },
  data: () => ({
    loaded: false,
  }),
  methods: {
    linkTo(l){
      if (l == '') {
        window.location.href = l;
      } else {
        window.open(l, '_blank');
      }
    }
  },
}
</script>

<style scoped>
h3 {
  font-family: Evolve EVO B;
  font-size: 200%;
  color: #cbba83;
}
h3, .sm1 {
  font-size: 150%;
}
p {
  font-family: Evolve L;
  font-size: 115%;
  color: #191919;
}
p, .sm {
  font-size: 100%;
}
.rectangle {
  width: 500px;
  background-color: #ffecb3;
  position: absolute;
  transform: translate(65%, -125%);
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
}
.rectangle-sm {
  width: 250px;
  background-color: #ffecb3;
  position: absolute;
  transform: translate(15px, -35px);
  box-shadow: 0px 3px 15px rgba(0,0,0,0.2);
}
.move {
  transform: translate(0%, 0%);
}
</style>
