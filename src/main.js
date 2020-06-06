// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from '@/store'
import AppDate from '@/components/AppDate'
import firebase from 'firebase'

Vue.component('AppDate', AppDate)

Vue.config.productionTip = false

<script>
  // Your web app's Firebase configuration
  var firebaseConfig = {
    apiKey: "AIzaSyB_lwl3M4BKhWycMbCxupxV13FQIGC4BXM",
    authDomain: "vue-school-forum-f17d2.firebaseapp.com",
    databaseURL: "https://vue-school-forum-f17d2.firebaseio.com",
    projectId: "vue-school-forum-f17d2",
    storageBucket: "vue-school-forum-f17d2.appspot.com",
    messagingSenderId: "507714797983",
    appId: "1:507714797983:web:02dd9ca0d9ac15d9293daa",
    measurementId: "G-611E461HV9"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  firebase.analytics();
</script>

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  template: '<App/>',
  components: { App }
})
