<template>
  <div class="columns is-multiline">
    <ProjectComponent
      v-for="project in projects"
      :key="project.id"
      :id="project.id"
      :title="project.title"
      :url="project.url"
      :photo="project.photo"
      :photoHover="project.photoHover"></ProjectComponent>
  </div>
</template>

<script>
  import ProjectComponent from './ProjectComponent.vue'

  export default {
    components: {
      ProjectComponent
    },
    data() {
      return {
        projects: []
      }
    },
    methods: {
      callGoogleDriveSheet(){
        let that = this
        const url = `https://sheets.googleapis.com/v4/spreadsheets/${process.env.googleSheetId}/values/a2:e?key=${process.env.googleApiKey}`
        fetch(url)
        .then(function(response){
          return response.json();
        })
        .then(function(response) {
          let projects_array = response.values;
          let array = []

          projects_array.forEach( function ( value, i ) {
            let project = {
              id: `project-${i}`,
              title: value[0],
              url: value[1],
              photo: value[2],
              photoHover: value[3]
            }
            array.push(project)
          });
          that.projects = array
        })
        .catch(function(error) {
          console.log(error);
        });
      }
    },
    mounted(){
      this.callGoogleDriveSheet()
    }
  }
</script>
