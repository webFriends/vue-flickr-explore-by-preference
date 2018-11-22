<template>
  <div>
    <Photo
      v-for="(photo) in photos"
      :key="photo.id"
      class="photo-block"
      :photo="photo"
      @sendClickedTag="sendClickedTag"
    />
  </div>
</template>

<script>
import Photo from './Photo/Photo.vue'
export default {
  props: {
    photos: {
      type: Array,
      default () {
        return []
      }
    }
  },
  components: {
    Photo
  },
  data () {
    return {

    }
  },
  methods: {
    sendClickedTag (tag) {
      this.$emit('sendClickedTag', tag)
    }
  }
}
</script>

<style scoped>
.photo-block {
  width: 100%;
}
</style>
