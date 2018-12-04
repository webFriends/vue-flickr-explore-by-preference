<template>
  <div>
    <div class="footer">
      <div class="footer__tab tab" @click="selectTab('photos')">
        <img class="tab__img" :src="photosTabImg">
        <p :class="['tab__title', {'tab__title--color-grey':isTagsTabSelected}]">Photos</p>
      </div>
      <div class="footer__tab tab" @click="selectTab('tags')">
        <img class="tab__img" :src="tagsTabImg">
        <p :class="['tab__title', {'tab__title--color-grey':!isTagsTabSelected}]">Tags</p>
      </div>
    <!-- <div class="footer__tab tab">
      <img class="tab__img" src="public/mobile/member-icon.png">
      <p class="tab__title">Login</p>
    </div> -->
    </div>
  </div>
</template>

<script>
export default {
  watch: {
    isHeaderFocused () {
      if (this.isHeaderFocused) {
        this.isTagsTabSelected = true
      }
    }
  },
  props: {
    isHeaderFocused: {
      type: Boolean,
      required: true
    }
  },
  data () {
    return {
      isTagsTabSelected: false
    }
  },
  methods: {
    selectTab (tab) {
      this.isTagsTabSelected = (tab === 'tags')
      this.$emit('footerTabSelected', tab)
    }
  },
  computed: {
    tagsTabImg () {
      return this.isTagsTabSelected ? 'public/mobile/tags-icon-dark.png' : 'public/mobile/tags-icon-light.png'
    },
    photosTabImg () {
      return this.isTagsTabSelected ? 'public/mobile/photos-icon-light.png' : 'public/mobile/photos-icon-dark.png'
    }
  }
}
</script>

<style scoped>
.footer {
  display: flex;
  flex-wrap: wrap;
}
.footer__tab {
  background-color: #fafafa;
  flex:1;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.footer__tab:first-child {
  border-right: 0.1px solid #d8d8d8;
}
.footer__tab:nth-last-child(1){
  border-left: 0.1px solid #d8d8d8;
}
.tab__img {
  width: 24px;
  height: 24px;
  margin: 0 auto;
}
.tab__title {
  margin-top:3px;
  text-align: center;
  width: 100%;
  font-family: Helvetica;
  font-size: 8px;
  font-weight: bold;
  font-style: normal;
  font-stretch: normal;
  letter-spacing: normal;
  color: #000000;
}

.tab__title--color-grey{
  color: grey;
}

</style>
