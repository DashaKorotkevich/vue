<template>
  <navbar></navbar>
  <div class="app">
    <router-view></router-view><!--Сюда встраиваются компоненты, которые мы прописали в router.js-->
  </div>
</template>

<script>
import Navbar from '@/components/Navbar.vue';
export default {
  components: {
    Navbar
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
.app{
  padding: 20px;
}
</style>