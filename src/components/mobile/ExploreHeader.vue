<template>
  <div class="header">
    <TagSearch class="tags-search" @focus.native.capture="headerFocused"/>
  </div>
</template>

<script>
import TagSearch from 'src/components/Tag/TagSearch.vue'
export default {
  components: {
    TagSearch
  },
  methods: {
    headerFocused () {
      this.$emit('headerFocused', true)
    }
  }
}
</script>

<style scoped>
.header {
  background-color: #fafafa;
  display: flex;
  justify-content: center;
  align-items:center;
}

</style>
