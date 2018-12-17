<template>
  <div id="app">
    <transition name="fade" mode="out-in">
      <router-view class="view"/>
    </transition>
  </div>
</template>

<script>
export default {
  mounted () {
    /* eslint-disable no-undef */
    // if (location && location.hostname !== 'localhost') {
    require('autotrack')
    ga('require', 'cleanUrlTracker')
    ga('require', 'eventTracker')
    ga('require', 'pageVisibilityTracker')
    ga('send', 'pageview')
    // }
  }
}
</script>

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
