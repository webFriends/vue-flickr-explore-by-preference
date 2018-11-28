<template>
  <div class="selected-tags" >
    <span class="selected-tags__count text">Selected Tags: {{ selectedTagsCount }}</span>
    <div class="selected-tags__control control">
      <span v-show="isSelectedTagsList" class="control__text-clear-all text" @click="deleteAllSelectedTags"> Clear All</span>
      <div :class="['control__triangle--right', {'control__triangle--bottom': isSelectedTagsList}]" @click="selectedTagsList"></div>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    selectedTags: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      isSelectedTagsList: false
    }
  },
  methods: {
    selectedTagsList () {
      this.isSelectedTagsList = !this.isSelectedTagsList
      this.$emit('clickTriangle')
    },
    deleteAllSelectedTags () {
      this.$emit('deleteAllSelectedTags')
      this.isSelectedTagsList = false
    }
  },
  computed: {
    selectedTagsCount () {
      return this.selectedTags.length
    }
  }
}
</script>
<style scoped>
.selected-tags {
  margin: auto 0;
  background-color: white;
  height: 35px;
  border-bottom: 1px solid #d8d8d8;
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.selected-tags__count {
  margin-left: 10px;
}
.selected-tags__control {
  display: flex;
  align-items: center;
}
.text{
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #262626;
}
.control__text-clear-all{
  margin-right: 16px;
  color:dimgrey;
}
.control__triangle--right {
  border-style: solid;
  border-width: 5px 0 5px 8.7px;
  border-color: transparent transparent transparent black;
  margin-right: 12px;
}
.control__triangle--bottom{
  border-width: 8.7px 5px 0 5px;
  border-color: black transparent transparent transparent ;
}
</style>
