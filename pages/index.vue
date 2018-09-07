<template>
  <div>
    <div class="container">

      <section id="header">
        <HeaderComponent></HeaderComponent>
      </section>

      <section id="about">
        <!-- <AboutComponent></AboutComponent> -->
      </section>

      <section id="projects">
        <ProjectsComponent></ProjectsComponent>
      </section>

      <!-- <hr> -->

      <!-- <section id="footer">
        <FooterComponent></FooterComponent>
      </section> -->
  </div>
      <section id="bottom-footer">
          <BottomFooterComponent></BottomFooterComponent>
      </section>  
  </div>
</template>

<script>
  import ProjectsComponent from '~/components/ProjectsComponent.vue'
  import FooterComponent from '~/components/FooterComponent.vue'
  import BottomFooterComponent from '~/components/BottomFooterComponent.vue'
  import AboutComponent from '~/components/AboutComponent.vue'
  import HeaderComponent from '~/components/HeaderComponent.vue'

  export default {
    components: {
      ProjectsComponent,
      FooterComponent,
      BottomFooterComponent,
      AboutComponent,
      HeaderComponent
    }
  }
</script>

<style>
</style>
