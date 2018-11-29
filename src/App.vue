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
  min-height: 100vh;
  background-color:#FAFAFA;
}

</style>
