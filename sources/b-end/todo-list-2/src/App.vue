<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link>
    </div>
    <!-- 
      Menambahkan v-bind anime dan v-on fetch-animes untuk bisa digunakan pada
      router /about
    -->
    <router-view :animes="animes" @fetch-animes="fetchAnimeSeasons" />
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>

<script>
// Import dari apis/jikan.js
import jikanAxios from "./apis/jikan";

export default {
  data() {
    return {
      // data animes yang akan disimpan dan digunakan
      animes: [],
    };
  },
  methods: {
    // method untuk mengambil data animes
    async fetchAnimeSeasons() {
      try {
        const response = await jikanAxios.get("/season/2021/summer");

        // debugging: untuk melihat data yang diberikan seperti apa
        console.log(response.data);

        // setelah mengambil data dari jikan dan berhasil,
        // simpan ke data animes
        this.animes = response.data.anime;
      } catch (error) {
        console.log(error);
      }
    },
  },
  // untuk percobaan apakah data yang diambil sudah benar?
  // comment apabila sudah tidak digunakan lagi
  // created() {
  //   this.fetchAnimeSeasons();
  // },
};
</script>
