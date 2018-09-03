<template>
  <div>
    <section id="header">
      <HeaderComponent></HeaderComponent>
    </section>

    <div class="container">

      <hr>

      <section id="about">
        <AboutComponent></AboutComponent>
      </section>

      <hr>
<!--
    <section id="projects-section">
      <div id="projects">
        <div class="columns is-multiline">
          <div class="column is-half-desktop" v-for="project in projects">
            <div :data-vimeo-url="project.url" data-vimeo-width="550" :id="project.id"></div>
          </div>
        </div>
      </section> -->

      <section id="projects">
        <ProjectsComponent></ProjectsComponent>
      </section>

      <hr>

      <section id="footer">
        <FooterComponent></FooterComponent>
      </section>
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
