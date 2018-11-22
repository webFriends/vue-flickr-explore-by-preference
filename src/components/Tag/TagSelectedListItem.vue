<template>
  <div class="tag" @click="sendRemovedTag(tag)" @mouseover="showCrossSign" @mouseout="hideCrossSign">
    <span v-show="!isMouseOver">#</span>
    <img v-show="isMouseOver" class="cross-sign" src="../../img/cancel.png">
    <span class="tag-name">{{ tag }}</span>
  </div>
</template>
<script>
export default {
  props: {
    tag: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      isMouseOver: false
    }
  },
  methods: {
    sendRemovedTag (tag) {
      this.$emit('sendRemovedTag', tag)
    },
    showCrossSign () {
      this.isMouseOver = true
    },
    hideCrossSign () {
      this.isMouseOver = false
    }
  }
}
</script>
<style>
.tag {
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  line-height: 1;
  letter-spacing: normal;
  color: #262626;
  margin: 10px;
  font-weight: bold;
  cursor:pointer;
}
.cross-sign {
  width: 8px;
  height: 8px;
}
.tag-name {
  margin-left:4px;
}
</style>
