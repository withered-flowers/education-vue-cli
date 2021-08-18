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
