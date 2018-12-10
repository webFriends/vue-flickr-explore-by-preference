<template>
  <div>
    <div class="header">
      <TagSearch class="tags-search" @updateSearch="updateSearch" @focus.native.capture="headerFocused" />
    </div>
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
    },
    updateSearch (value) {
      this.$emit('mobileUpdateSearch', value)
    }
  }
}
</script>

<style scoped>
  .header {
    width: 100%;
    height: 100%;
    background-color: #fafafa;
    display: flex;
    justify-content: center;
    align-items: center;
  }
</style>
