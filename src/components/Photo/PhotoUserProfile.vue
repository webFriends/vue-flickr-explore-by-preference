<template>
  <div class="profile">
    <img class="profile__image" @click="linktoPhotoStream" v-lazy="getProfileImg" >
    <p class="profile__name" @click="linktoPhotoStream">{{ ownerName }}</p>
  </div>
</template>

<script>
export default {
  props: {
    ownerName: {
      type: String,
      default: ''
    },
    nsid: {
      type: String,
      default: ''
    },
    iconfarm: {
      type: Number,
      default: 0
    },
    iconserver: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
    }
  },
  computed: {
    getProfileImg () {
      if (this.iconfarm !== 0) {
        return `https://farm${this.iconfarm}.staticflickr.com/${this.iconserver}/buddyicons/${this.nsid}.jpg`
      } else {
        return 'https://www.flickr.com/images/buddyicon.gif'
      }
    }
  },
  methods: {
    linktoPhotoStream () {
      window.open(`https://www.flickr.com/photos/${this.nsid}/`)
    }
  }
}
</script>

<style scoped>
.profile {
  height: 60px;
  padding: 16px;
  background-color: white;
  display: flex;
  align-items: center;
  border-top: solid 1px rgba(0, 0, 0, 0.15);
  border-left: solid 1px rgba(0, 0, 0, 0.15);
  border-right: solid 1px rgba(0, 0, 0, 0.15);
}
@media screen and (max-width: 425px) {
  .profile{
    border: none;
  }
}

.profile__image {
  width: 30px;
  height: 30px;
  border-radius: 30px;
  margin-right: 12px;
  cursor: pointer;
}

.profile__image:hover {
  width: 32px;
  height: 32px;
}

.profile__name {
  font-family: Helvetica-Bold, sans-serif;
  font-size: 14px;
  cursor: pointer;
}

.profile__name:hover {
  font-size: 15px;
}

a:link, a:visited, a:active{
  color: black;
  text-decoration: none;
}

</style>
