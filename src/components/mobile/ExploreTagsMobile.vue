<template>
  <div class="tab-tags">
    <TagList :tags="showTags" :selectedTags="selectedTags" @chooseTag="chooseTag" @deleteTag="deleteSelectedTag"/>
  </div>
</template>
<script>
import TagList from 'src/components/Tag/TagList.vue'
export default {
  components: {
    TagList
  },
  props: {
    tags: {
      type: Array,
      required: true
    },
    selectedTags: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  methods: {
    chooseTag (tag) {
      this.$emit('chooseTag', tag)
    },
    deleteSelectedTag (tag) {
      this.$emit('removeTag', tag)
    }
  },
  computed: {
    showTags () {
      return this.tags
    }
  }
}
</script>
<style scoped>
.tab-tags {
  width: 100%;
  height: 100%;
  background-color: rgba(255, 255, 255, 0.9);
}
</style>
