import Vue from 'vue'
import axios from 'axios'

const axiosConfig = {
    baseURL: 'http://127.0.0.1:8000/api'
}

Vue.use({
    install(vue){
        vue.prototype.$axios = axios.create(axiosConfig)
    }
})