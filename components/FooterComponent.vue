<template>
  <div class="columns is-mobile">
    <div class="column is-half-mobile text-right">
      <p>INFO</p>
      <div class="subcontent">
        <p>Tel: 0031643248030</p>
        <p><a href="mailto:info@grygboit.com">Mail</a></p>
        <p><a href="https://instagram.com/grygierczykboitelle" target="_blank">Instagram</a></p>
        <p><a href="https://vimeo.com/grygboit" target="_blank">Vimeo</a></p>
      </div>
    </div>
    <div class="column is-half-mobile">
      <p>CLIENTS</p>
      <div class="subcontent">
        <p v-for="(client, index) in clients" :key="index">{{ client }}</p>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        'clients': []
      }
    },
    methods: {
      callGoogleDriveSheet() {
        let that = this
        const url = "https://sheets.googleapis.com/v4/spreadsheets/1rabzNttY9gjlwIwcdV4eUq6C8rkVmYBElEhTBIlIQyg/values/a2:a?key=AIzaSyCxBN5zBVOjgLJB6CK9ZznB19KDEzXcBXU"
        fetch(url)
          .then(function(response) {
            return response.json();
          })
          .then(function(response) {
            let merged = [].concat.apply([], response.values)
            that.clients = merged
          })
          .catch(function(error) {
            console.log(error);
          });
      }
    },
    mounted() {
      this.callGoogleDriveSheet()
    }
  }
</script>



