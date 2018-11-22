<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"/>
    </transition>
  </div>
</template>

<style>
* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}
#app {
  height: 100%;
  background-color:#FAFAFA;
}
</style>
