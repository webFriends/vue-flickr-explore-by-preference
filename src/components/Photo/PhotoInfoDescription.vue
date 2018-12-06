<template>
  <div class="description">
    <p class="description__photo-title"> {{ photoTitle }}</p>
    <div class="description__photo-tags photo-tags">
      <span class="photo-tags__tag" v-for="(tag, i) in photoTags" :key="i" @click="sendClickedTag(tag) ">#{{ tag }}</span>
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
  font-size: 14px;
  color: #262626;
}

.photo-tags__tag{
  font-family: Helvetica, sans-serif;
  cursor: pointer;
  border-radius: 2px;
  margin-right: 6px;
  margin-bottom: 12px;
  font-weight: bold;
  word-break:break-all;
  word-wrap:break-word;
  color:rgb(98, 96, 96);
}

.description__photo-title {
  width: 100%;
  font-family: Helvetica;
  font-size: 16px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #262626;
  word-break:break-all;
  word-wrap:break-word;
  margin-bottom: 16px;
}

</style>
