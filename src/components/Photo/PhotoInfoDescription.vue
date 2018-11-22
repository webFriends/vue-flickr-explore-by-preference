<template>
  <div class="description">
    <p class="description__photo-title"> {{ photoTitle }}</p>
    <div class="description__photo-tags photo-tags">
      <span v-show="photoTags.length>0" class="photo-tags__notation">#</span>
      <span class="photo-tags__tag" v-for="(tag, i) in photoTags" :key="i" @click="sendClickedTag(tag) ">{{ tag }}</span>
    </div>
  </div>
</template>
<script>
export default {
  props: {
    photoTags: {
      type: Array,
      required: true
    },
    photoTitle: {
      type: String,
      required: true
    }
  },
  methods: {
    sendClickedTag (tag) {
      this.$emit('sendClickedTag', tag)
    }
  }
}
</script>
<style>
.description {
  padding: 16px;
  width:100%;
}
.description__photo-tags {
  margin-top: 16px;
  display: flex;
  width: 100%;
  flex-wrap: wrap;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #262626;
}
.photo-tags__notation {
  font-family: Helvetica, sans-serif;
  padding: 2px 4px;
  margin: 1px;
  font-weight: bold;
}
.photo-tags__tag{
  font-family: Helvetica, sans-serif;
  cursor: pointer;
  padding: 2px 4px;
  border-radius: 2px;
  margin: 1px;
  font-weight: bold;
  word-break:break-all;
  word-wrap:break-word;
}
.description__photo-title {
  width: 100%;
  font-family: Helvetica;
  font-size: 14px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #262626;
  word-break:break-all;
  word-wrap:break-word;
}

</style>
