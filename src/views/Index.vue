<template>
  <div>
    <Preamble/>
    <About/>
    <FeaturedProjects/>
    <ContactMe/>
  </div>
</template>

<script>
import Preamble from '../components/Preamble'
import About from '../components/About'
import FeaturedProjects from '../components/FeaturedProjects'
import ContactMe from '../components/ContactMe'

export default {
  components: {
    Preamble,
    About,
    FeaturedProjects,
    ContactMe
  },
};
</script>

<style scoped>
</style>
