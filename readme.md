## Table of Content
1. [Prerequisites](#prerequisites)
1. [Introduction Vue CLI](#introduction-vue-cli)
1. [Installation](#installation)
1. [Generate Project](#generate-project)
1. [Folder Structure](#folder-structure)
1. [Adding Plugin](#adding-plugin)
1. [Vue Router - Introduction](#vue-router---introduction)
1. [Review Vue Component](#review-vue-component)
    - [Langkah Pertama](#langkah-pertama)
    - [Langkah Kedua](#langkah-kedua)
    - [Langkah Ketiga](#langkah-ketiga)
    - [Langkah Keempat](#langkah-keempat)
    - [Langkah Kelima](#langkah-kelima)
1. [Additional - Environment Variable](#additional---environment-variable)
1. [References](#references)

## Prerequisites

Prerequisites:
- Pernah menggunakan salah satu bundler e.g. `Parcel`, `Webpack`, dll
- Mengerti konsep dasar dari Single Page Application
- Mengerti dasar dari VueJS

## Introduction Vue CLI
Pada pembelajaran kali ini kita akan mencoba untuk menggunakan `vue-cli`, sebuah project generator  
yang akan membuat boilerplate project secara otomatis.

Boilerplate ini ditujukan untuk mempermudah developer dalam men-setting awal project vue dengan  
cepat dan otomatis, sehingga developer bisa lebih fokus pada codingan saja dan tidak terpaku  
pada settingan awal yang cukup ribet.

## Installation
npm install -g `@vue/cli`/

## Generate Project

1. vue create <nama_folder>
1. Pilih fitur yang dibutuhkan dalam project (dalam pembelajaran ini tambahkan fitur `Router`)
1. Pilih versi vue yang akan digunakan (dalam pembelajaran ini menggunakan `2.x`)
1. history mode pada router jawab dengan `(Y)es`
1. Pilih linter / formatter yang digunakan, disesuaikan dengan yang digunakan, bila menggunakan  
   extension `Prettier` sebaiknya memilih `ESLint + Prettier`, bila tidak, gunakan opsi  
   `ESLint with error prevention only` (dalam pembelajaran ini menggunakan opsi pertama)
1. Untuk fitur Linter, gunakan `Lint on save`
1. Untuk lokasi config `Babel, ESLint, etc`, taruh di dalam `dedicated config files`
1. Simpan sebagai preset? untuk sementara `(N)o`

## Folder Structure

Kemudian kita akan melihat struktur folder dari file yang sudah dibuat `vue cli` ini:

```
-> public/
-> src/
----> assets/
----> components/
----> router/
----> views/
-> .browserlintrc
-> .eslintrc.js
-> .gitignore
-> babel.config.js
-> package-lock.json
-> package.json
-> README.md
```

Folder `public` berisi folder umum yang digunakan (favicon.ico dan index.html)
Folder `src` berisi source code yang dibuat + assets yang ada

- .browserlintrc -> File konfigurasi, detil bisa dilihat pada browserlist github
- .eslintrc -> File untuk linter (formatter dan checker), detil bisa dilihat pada situs eslint
- .gitignore -> file sejuta umat pengguna git
- babel.config.js -> File untuk transpiler javascript, detil bisa dilihat pada situs babel

## Adding Plugin

Pada pembelajaran ini, kita akan menggunakan UI Library bernama `Tailwind`. untuk integrasinya  
dengan VueJS ini, bagi yang menggunakan VueJS versi 2, akan dirasa cukup menantang, karena akan  
diminta untuk downgrade package yang dibutuhkan dan lain lainnya.

Nah, apabila kita menggunakan *vue-cli* ini, maka yang dibutuhkan hanyalah mengetikkan perintah  
`vue add <nama_plugin>` saja, dan secara otomatis tailwind akan ditambahkan. cara ini bernama  
`plugin`.

Mudah bukan?

Untuk bisa melihat listing dari plugin apa saja yang ada, sayangnya pada vue cli ini tidak   
disediakan, sehingga harus mencari dengan keyword `vue plugin xxx` atau bisa dicoba dengan  
melihat listing yang ada pada AwesomeJS.dev

Setelah menambahkan plugin ini, saatnya kita mencoba untuk menjalankan aplikasi yang sudah  
dibuat oleh cli ini. cara untuk menjalankannya pun cukup mudah, cukup dengan mengetikkan perintah  
`npm run serve` saja, dan aplikasi pun bisa berjalan dalam mode development.

Untuk bisa dijalankan dan dideploy aplikasinya, cukup menggunakan perintah `npm run build` saja.

(Pada saat di-serve, apabila tampilan lebih ke kiri, itu dikarenakan default css dari tailwindnya  
yah, tidak usah dipermasalahkan 😉)

## Vue Router - Introduction

Sebelum pembelajaran ini, kita menggunakan VueJS sebagai Single File Component dan membuat   
aplikasi berbasis Single Page Application (SPA), namun dalam aplikasi SPA ini, kita tidak  
menggunakan rute / endpoint sama sekali, semuanya dalam endpoint `/` saja.

Hal ini tentunya kurang baik apabila aplikasi sudah besar karena aplikasi tanpa endpoint = susah  
dicari.

Nah dengan menggunakan Vue Router ini, kita bisa mengimplementasikan rute / endpoint dalam   
aplikasi SPA berbasis VueJS ini, sampai di level dimana kita bisa melindungi rute tersebut  
dengan logic tertentu agar bisa dilindungi dengan lebih baik.

Pada pembelajaran ini, kita akan hanya melihat bagaimana cara VueJS menggunakan router ini  
saja yah. Untuk penambahan proteksi navigasi akan dipelajari pada pembelajaran selanjutnya.

Mari kita lihat struktur utama file yang digunakan untuk `Vue Router` ini:
- `main.js`
- `router/index.js`
- `App.vue`

Pada file `main.js`, hanya ditambahkan beberapa baris kode untuk mengimport `router/index.js`  
saja dan digunakan secara global pada instance `Vue`.

Pada file `router/index.js`, adalah file utama dari `Vue Router` ini, dimana variabel utama yang  
perlu diperhatikan adalah `const routes` saja. Pada variabel `routes` ini adalah tempat dimana  
kita mendefinisikan rute yang ada di aplikasi.

Definisi rute ini terbagi menjadi 3 bagian besar: `path`, `name`, dan `Component`:
- `path` adalah endpoint / rute yang didefinisikan (mirip dengan app.get("/xxxx") pada express).
- `name` adalah nama dari rute yang didefinisikan (named route)
- `component` adalah definisi dari komponen pada Vue yang akan dipanggil pada saat rutenya   
  didefinisikan.

Pada file `App.vue`, pada tag `<template>`, terlihat ada 2 tag yang aneh: `<router-link>` dan  
`<router-view>`.

`<router-link>` adalah seperti `<a>`, namun yang digunakan bukan attribute `href` melainkan   
`to` dan mengarah ke endpoint yang sudah dideclare di `router/index.js`.

`<router-view>` adalah tempat / wadah seperti `<div>` (container) untuk meletakkan component yang  
akan diganti / diubah oleh Vue Router ini.

## Review Vue Component
Pada demo ini kita mereview ulang cara pembuatan komponen dan menggunakan prop dan emit dan   
melakukan pengambilan data dari tempat lain.

Dalam demo ini kita akan mencoba mengambil data dari provider yang bernama `jikan.moe`.

endpoint pada `jikan.moe` yang digunakan adalah sebagai berikut:

```
baseUrl = https://api.jikan.moe/v3
GET /season/<year>/<season>
```

contoh yang akan kita tarik datanya adalah data pada `musim panas 2021`, maka endpoint yang   
digunakan adalah:

```
baseUrl = https://api.jikan.moe/v3
GET /season/2021/summer
```

Fetcher ini akan dibuat pada file `App.vue`, kemudian akan digunakan oleh router `/about` untuk  
kemudian ditampikan dalam bentuk `Card`.

### How to
#### Langkah Pertama
Melakukan penambahan package untuk bisa melakukan fetch data terlebih dahulu.  

Dalam pembelajaran ini kita akan menggunakan `axios`. Untuk bisa menambahkan axios ke dalam  
project ini sayangnya tidak bisa menggunakan `vue add axios` saja, sehingga kita harus menambahkan  
`axios` secara manual dengan cara `npm install axios` 

PS:  
Ingat bahwa di balik layar di sini kita tidak menggunakan `parcel` yang auto import otomatis dan  
langsung memasukkan ke dalam package.json kita, namun di balik `vue-cli` ini yang digunakan adalah  
`webpack` !

#### Langkah Kedua
Karena kita sudah menggunakan `axios`, ada baiknya bahwa axios ini disimpan di dalam sebuah folder 
sendiri bernama `apis`, maka pada langkah ini kita akan membuat folder `apis` di dalam folder  
`src` kemudian kita akan menambahkan file bernama `jikan.js` yang di dalamnya berisi 
`instance axios` untuk pengambilan data dari `jikan.moe`

Ketik dan modifikasi kode berikut untuk file `/src/apis/jikan.js`

```javascript
/* eslint-disable */
// Line di atas diperlukan supaya pada eslint tidak muncul warning
// karena ada bentrok settingan dengan prettier

import axios from "axios";

// Base URL untuk jikan.moe
const API_URL = "https://api.jikan.moe/v3/";

// Instance Axios untuk mengakses API
const instance = axios.create({
  baseURL: API_URL,
});

// export si instance
export default instance;
```

#### Langkah Ketiga
Langkah selanjutnya adalah pada file `App.vue` kita akan membuat sebuah data dengan nama   
`animes` dan sebuah method dengan nama `fetchAnimeSeasons`.

Modifikasi file `App.vue` dengan menambahkan script seperti di bawah ini
```javascript
// File: App.vue

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
```

#### Langkah Keempat
Langkah selanjutnya adalah masih pada `App.vue`, dimana kita sekarang telah mendapatkan data  
`animes` dan akan mem-passing data tersebut ke router `/about`, namun bagaimanakah caranya?

Masih ingat pada vue router ini sendiri terdiri menjadi 2 bagian utama yaitu:
- `<router-link>` sebagai `href`
- `<router-view>` sebagai `tempat perubahan Component`

sehingga apabila kita sekarang ingin mempassing data dan custom event yang dimiliki, 
maka kita akan menggunakan... `v-on & props` serta `v-on & emit` yang akan kita letakkan   
pada ... `<router-view>` 

Sehingga langkah selanjutnya adalah kita akan menambahkan passing `v-bind` dan `v-on` pada file  
`App.vue` kita sekarang ini.

```html
// File App.vue
    <!-- 
      Menambahkan v-bind anime dan v-on fetch-animes untuk bisa digunakan pada
      router /about
    -->
    <router-view :animes="animes" @fetch-animes="fetchAnimeSeasons" />
```

#### Langkah Kelima
Langkah selanjutnya adalah modifikasi pada Components `About` pada file `/src/views/About.vue`  
untuk bisa memanggil method `fetchAnimeSeasons` pada saat `About` dibuat dan akan menampilkan  
data `animes` yang aman untuk dilihat saja (r18 false) dalam bentuk `Card`

Data yang akan ditampilkan adalah:
- Gambar dari anime (`image_url`)
- Judul dari anime (`title`)
- Total episode yang ada (`episode`)

Modifikasi file `src/views/About.vue` sehingga seperti berikut

```html
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
```

## Additional - Environment Variable
Dalam pengembangan aplikasi kita, tentunya tidak asing mendengar kata kata `environment variable`  
bukan? Bagaimana bila seandainya kita ingin menggunakan `environment variable` dalam pengembangan  
aplikasi dengan Vue CLI ini?

Kebetulan sekali Vue CLI juga sudah menerapkan penggunaan `dotenv` ini dengan baik dengan beberapa  
cara penggunaan:

Berikut adalah informasi tentang `dotenv` yang dikutip dari situs vue cli:
```
.env                # loaded in all cases
.env.local          # loaded in all cases, ignored by git
.env.[mode]         # only loaded in specified mode
.env.[mode].local   # only loaded in specified mode, ignored by git
```

dan di sini ada sedikit syarat dan ketentuan penggunaan:
- Variable yang akan dibuild hanyalah variable dengan nama `NODE_ENV` dan `BASE_URL` saja
- Variable lainnya yang ingin ikut untuk dibuild harus diikuti dengan prefix `VUE_APP_`

Jadi pastikan ketika mendefinisikan environment variable, pastikan ada prefix `VUE_APP_` yah !

(Tentang environment variable ini tidak dicontohkan, silahkan dicoba untuk eksplorasi sendiri yah !)

## References

- https://github.com/browserslist/browserslist
- https://eslint.org/docs/user-guide/configuring/
- https://babeljs.io/docs/en/configuration
- https://cli.vuejs.org/guide/installation.html
- https://tailwindcss.com/docs/installation
- https://awesomejs.dev/for/vue-cli/