<template>
  <div class="interestness-wall">
    <p class="loading-text">{{ loadingMessage }}</p>
  </div>
</template>
<script>

export default {
  props: {
    loadingMessage: {
      type: String,
      required: true
    }
  }
}
</script>
<style scoped>
.interestness-wall {
  display: flex;
  justify-content: center;
  align-items: center;
}

.loading-text {
    font-family:'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
    text-align: center;
    font-size:30px;
}
</style>
