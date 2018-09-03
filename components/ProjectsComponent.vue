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
        const url = "https://sheets.googleapis.com/v4/spreadsheets/1Diou_hAp98SrWHyq1f0cywRj9BsnUJy6SX34qLva8m0/values/a2:e?key=AIzaSyCxBN5zBVOjgLJB6CK9ZznB19KDEzXcBXU"
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
