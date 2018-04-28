<template>
<!-- phần cũ tạo router -->
  <!-- <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div> -->


<!-- phần mới với VUEX -->

  <div id="app">
    <!-- <list-one v-bind:products="products"></list-one>
    <list-two v-bind:products="products"></list-two> -->
<!-- bắt đầu vuex (store) -->
    <list-one></list-one>
    <list-two></list-two>
  </div>
</template>

<script>
import ProductListOne from './components/product-list-one.vue'
import ProductListTwo from './components/product-list-two.vue'

export default {
  components:{
    'list-one':ProductListOne,
    'list-two':ProductListTwo
  },

  name: 'App',

  data(){
    return {
      /*products:[                  //chuyển sang store.js  (vuex)
        {name:'Yellow',price:20},
        {name:'Red',price:40},
        {name:'Green',price:60},
        {name:'Pink',price:80}
      ]*/
    }
  }
}
</script>

<style>
/* #app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
} */


body {
    font-family: Ubuntu;
    color: #555;
}
</style>
