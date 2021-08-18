<template>
  <div class="about">
    <h1>This is an about page</h1>
    <!-- Container untuk card -->
    <div class="container mx-auto pt-4">
      <!-- Grid System untuk peletakkan Card -->
      <div class="grid grid-cols-3 gap-4">
        <!-- Card Anime -->
        <div
          class="bg-green-50 pt-4 pb-4 rounded-xl shadow-md"
          v-for="anime in sfwAnimes"
          :key="'anime' + anime.mal_id"
        >
          <!-- Card Content -->
          <div class="flex flex-col">
            <div class="flex-1 mx-auto">
              <img
                class="w-48 h-48 rounded-full"
                :src="anime.image_url"
                alt="anime.title"
              />
            </div>
            <div class="flex-1 font-bold">
              {{ anime.title }} ( {{ anime.type }} )
            </div>
            <div class="flex-1">
              <span>Total Episodes</span>
            </div>
            <div class="flex-1">
              <span class="font-bold">{{ anime.episodes }}</span>
            </div>
          </div>
          <!-- End of Card Content -->
        </div>
        <!-- End of Card Anime -->
      </div>
      <!-- End of Grid System -->
    </div>
    <!-- End of Container -->
  </div>
</template>

<script>
export default {
  // data animes dari App.vue
  props: ["animes"],
  computed: {
    // Digunakan untuk menampilkan data anime yang SFW (Safe For Work)
    sfwAnimes() {
      return this.animes.filter((e) => e.r18 === false);
    },
  },
  // Menggunakan lifecycle beforeCreate untuk memanggil method fetchAnimeSeasons
  // pada App.vue
  beforeCreate() {
    this.$emit("fetch-animes");
  },
};
</script>
