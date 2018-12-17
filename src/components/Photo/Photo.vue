<template>
  <div class="photo">
    <PhotoUserProfile
      class="photo__up-banner"
      :ownerName="photo.ownername"
      :nsid="photo.owner"
      :iconfarm="photo.iconfarm"
      :iconserver="photo.iconserver"
    />
    <img
      ga-on="click"
      ga-event-category="photo"
      ga-event-action="link back to flickr"
      class="photo__middle-photo"
      v-lazy="photo.url_z"
      @click="linktoPhoto"
    >
    <PhotoInfo class="photo__below-explanation" :photoTags="photo.tagsArray" :photoTitle="photo.title" @sendClickedTag="sendClickedTag"/>
  </div>
</template>

<script>
import PhotoUserProfile from './PhotoUserProfile.vue'
import PhotoInfo from './PhotoInfo.vue'
export default {
  props: {
    photo: {
      type: Object,
      required: true
    }
  },
  components: {
    PhotoUserProfile,
    PhotoInfo
  },
  data () {
    return {

    }
  },
  methods: {
    linktoPhoto () {
      window.open(`https://www.flickr.com/photos/${this.photo.owner}/${this.photo.id}`)
    },
    sendClickedTag (tag) {
      this.$emit('sendClickedTag', tag)
    }
  }
}
</script>

<style>
.photo + .photo {
  margin: 60px 0 0 0;
}

.photo {
  display: flex;
  flex-direction: column;
}

.photo__middle-photo {
  width: 100%;
  cursor: pointer;
  border-left: solid 1px rgba(0, 0, 0, 0.15);
  border-right: solid 1px rgba(0, 0, 0, 0.15);
}

.photo__below-explanation {
  width: 100%;
}
</style>
