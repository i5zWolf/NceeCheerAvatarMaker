/* eslint-disable no-console */
import axios from "axios";

// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // api 的 base_url
  timeout: 15000, // request timeout
  validateStatus: function(status) {
    return status >= 200 && status < 300; // default
  }
});

export default service;
