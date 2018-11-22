<template>
  <div class="selected-list">
    <TagSelectedListItem v-for="(tag,i) in selectedTags" :key="i" :tag="tag" @sendRemovedTag="sendRemovedTag"/>
  </div>
</template>

<script>
import TagSelectedListItem from './TagSelectedListItem.vue'
export default {
  components: {
    TagSelectedListItem
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

<style>
.selected-list {
    display: flex;
    width: 293px;
    flex-wrap: wrap;
}
@media screen and (max-width: 425px) {
  .selected-list {
    flex-wrap: nowrap;
    overflow-y: scroll;
  }
}

</style>
