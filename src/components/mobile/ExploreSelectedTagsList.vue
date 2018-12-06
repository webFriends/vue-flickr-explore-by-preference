<template>
  <div class="selected-list">
    <div v-for="(tag,i) in selectedTags" class="selected-list__tag" :key="i" @click="sendRemovedTag(tag)">
      <img class="cross-sign" src="~src/img/cancel.png">
      {{ tag }}
    </div>
  </div>
</template>
<script>

export default {
  components: {

  },
  props: {
    selectedTags: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    sendRemovedTag (tag) {
      this.$emit('sendRemovedTag', tag)
    }
  }
}
</script>

<style scoped>
.selected-list {
  padding: 11px;
  display: flex;
  flex-direction: column;
}
.selected-list__tag {
  margin-bottom: 16px;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  word-break: break-all;
  word-wrap: break-word;
  display: flex;
  align-items: center;
}
.cross-sign {
  width: 12px;
  height: 12px;
  margin-right: 3px;
}

</style>
