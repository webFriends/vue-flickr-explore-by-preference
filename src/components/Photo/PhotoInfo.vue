<template>
  <div class="photo-info">
    <PhotoInfoDescription
      :photoTags="photoTags"
      :photoTitle="photoTitle"
      class="photo-info__description"
      @sendClickedTag="sendClickedTag"
    />
    <!-- <PhotoInfoFollow class="photo-info__fav-sign"/> -->
  </div>
</template>

<script>
import PhotoInfoDescription from './PhotoInfoDescription.vue'
// import PhotoInfoFollow from './PhotoInfoFollow.vue'
export default {
  components: {
    PhotoInfoDescription
    // PhotoInfoFollow
  },
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
.photo-info {
  width: 100%;
  background-color: white;
  display: flex;
  justify-content: space-between;
  border-bottom: solid 1px rgba(0, 0, 0, 0.15);
  border-left: solid 1px rgba(0, 0, 0, 0.15);
  border-right: solid 1px rgba(0, 0, 0, 0.15);
}

@media screen and (max-width: 425px) {
  .photo-info {
    border: none;
  }
}

.photo-info__description {
  /* width:calc(100% - 46px); */
  /*for .photo-info__fav-sign */
  width:100%;
}

/* .photo-info__fav-sign {
  width: 46px;
  height: 100%;
  padding-right: 16px;
  padding-top: 16px;
  margin: 0 auto;
  text-align: right;
} */
</style>
