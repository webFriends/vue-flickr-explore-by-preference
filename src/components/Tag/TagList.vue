<template>
  <div class="tag-list">
    <div v-for="(tag,i) in tags" :key="i" class="tag-list__tag tag" @click="clickTag(tag)">
      <img v-show="isTagSelected(tag)" class="tag__icon-checked mobile-only" src="public/check.png">
      <span v-show="!isTagSelected(tag)"># </span>
      <span class="tag__tag-name">{{ tag }}</span>
    </div>
  </div>
</template>

<script>
export default {
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
    isTagSelected (tag) {
      return this.selectedTags.includes(tag)
    },
    clickTag (value) {
      this.isTagSelected(value) ? this.$emit('deleteTag', value) : this.$emit('chooseTag', value)
    }
  }
}
</script>

<style scoped>

.mobile-only {
  display: none;
}
.tag-list{
  height: 450px;
  width:100%;
  overflow: auto;
}
.tag__tag-name {
  margin: 12px 0;
  font-family: Helvetica-Bold, sans-serif;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #262626;
  word-break: break-all;
  word-wrap: break-word;
}
.tag-list__tag:hover {
  cursor: pointer;
}
@media screen and (max-width: 425px) {
  .tag-list{
    height: 100%;
    width: 100%;
    background-color: #fafafa;
  }
  .tag-list__tag {
    width: 100%;
    padding: 10px;
    margin: auto 0;
  }
  .tag__tag-name {
    margin: auto 0;
  }
  .tag-list__tag + .tag-list__tag {
    border-top: 0.1px solid #d8d8d8
  }
  .tag__icon-checked{
    display: initial;
    width: 12px;
    height: 12px;
    margin: auto 0;
    margin-right: 2px;
  }
}
</style>
