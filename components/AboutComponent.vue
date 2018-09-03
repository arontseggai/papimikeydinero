<template>
  <div class="columns is-mobile padding-sides">
    <div class="column is-6">
      <div class="outer-container">
        <div class="inner-container">
          <p>GRYGIERCZYK & BOITELLE</p>
          <br>
          <div class="subcontent">
            <p>Freelance film producer + freelance film director = amazing film duo.</p>
            <br>
            <p>
              Bla, bla, creative, youth culture, millenials, bla, disruptive, bla, bla, bla, storytelling, bla, boundaries, content, bla, new media, bla, bla, pop culture, bla, high standards, bla, bla, talent, brands, bla, experience, bla, bla, bla, craftmanship, bla, knowledge, out of the box, bla.
            </p>
            <br>
            <p>You know the story by now, we understand all of it.</p>
            <br>
            <p>Contact  <a href="mailto:info@grygboit.com">us</a> and let's make amazing work.</p>
            <br>
            <p>(In case our faces look familiar: no, ‘Opslaan Als’ really is dead. Yes, we’re still very much freelance. But since we make such a smooth sailing team, still work together a lot and everybody thinks we’re brothers anyway, we decided to give the monster that is us-as-a-duo a name.)</p>
          </div>
        </div>
      </div>
    </div>
    <div class="column is-6">
      <div class="imagery-container">
        <div class="columns is-multiline">
          
          <div class="column is-2 is-hidden-mobile"></div>

          <div class="column is-12-mobile is-5">
            <div class="photo-card">
              <div class="imagery">
                <img clas="neutral" src="~/assets/img/ALLEN_neutral.jpg">
                <img class="hover" src="~/assets/img/ALLEN_hover.jpg">
              </div>
              <div class="content-block">
                <p>ALLEN GRYGIERCZYK</p>
                <p>PRODUCER</p>
                <p><a href="https://instagram.com/allengrygierczyk" target="_blank">Instagram</a></p>
              </div>
            </div>
          </div>

          <div class="column is-12-mobile is-5">
            <div class="photo-card">
              <div class="imagery">
                <img class="neutral" src="~/assets/img/KEVIN_neutral.jpg">
                <img class="hover" src="~/assets/img/KEVIN_hover.jpg">
              </div>
              <div class="content-block">
                <p>KEVIN BOITELLE</p>
                <p>DIRECTOR</p>
                <p><a href="http://kevinboitelle.nl" target="_blank">Website</a> / <a href="https://instagram.com/kevinboitelle" target="_blank">Instagram</a></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.outer-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100%;
}

.imagery { position: relative; }
.imagery .hover {
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}

.imagery:hover .hover {
  opacity: 1;
}



</style>

<script>

  export default {

  }
</script>
