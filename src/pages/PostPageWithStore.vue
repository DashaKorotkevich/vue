<template>
  <h1> Учебные примеры </h1>
  <p>{{ $store.state.likes }}</p>
  <p>{{ $store.getters.doubleLikes /* Обращаемся не как к функции, а как к свойству объекта */ }}</p>
  <div style="padding-bottom: 10px;">
    <my-button @click="$store.commit('incrementLikes')">Лайк</my-button> <!-- Обращение к методу объекта  mutations  -->
    <my-button @click="$store.commit('decrementLikes')">Дизлайк</my-button>
  </div>
  <hr>
</template>

<script>
</script>

<style>
</style>