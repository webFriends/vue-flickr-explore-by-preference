<template>
  <div class="explore">
    <ExploreHeader class="explore__header mobile-only" @headerFocused="headerFocused"/>
    <ExplorePreloader class="explore__preloader" v-show="showPreloader" :loadingMessage="fetchedStatus" />
    <ExploreSelectedTags
      :class="['explore__selected-tags', {'explore__selected-tags--more-height ': isTagsListShown}, 'mobile-only','scroll-target']"
      v-show="showSelectedTags"
      :selectedTags="selectedTags"
      @deleteAllSelectedTags="deleteAllSelectedTags"
      @sendRemovedTag="removeTag"
      @isTagsListShown="tagsListButtom"
    />
    <ExplorePhotos
      id="top"
      :class=" [{'explore__interestingness-wall--translate': showSelectedTags }, 'explore__interestingness-wall', 'scroll-target']"
      :photos="photos"
      @sendClickedTag="chooseTag"
    />
    <ExploreTags
      class="explore__search-wall desktop-only"
      :tags="getTagsInfo"
      :selectedTags="selectedTags"
      @chooseTag="chooseTag"
      @removeTag="removeTag"
    />
    <button class="return-top desktop-only" v-scroll-to="{ el: '#top', duration: 1000}">Top</button>
    <ExploreTagsMobile
      :class="['explore__footer-tags-tab',{'explore__interestingness-wall--translate': showSelectedTags},'mobile-only']"
      v-show="isTagsTabSelected" :tags="getTagsInfo"
      :selectedTags="selectedTags"
      @chooseTag="chooseTag"
      @removeTag="removeTag"
    />
    <ExploreFooter class="explore__footer mobile-only" @footerTabSelected="footerTabSelected" :isHeaderFocused="isHeaderFocused"/>
  </div>
</template>

<script>
import axios from 'axios'
import _ from 'lodash'
import { isScrollBarReachBottom } from 'src/util/comm.js'
import { fetchMessages } from 'src/constants/index.js'
import ExploreHeader from 'src/components/mobile/ExploreHeader.vue'
import ExplorePreloader from 'src/components/ExplorePreloader.vue'
import ExploreSelectedTags from 'src/components/mobile/ExploreSelectedTags.vue'
import ExplorePhotos from 'src/components/ExplorePhotos.vue'
import ExploreTags from 'src/components/ExploreTags.vue'
import ExploreTagsMobile from 'src/components/mobile/ExploreTagsMobile.vue'
import ExploreFooter from 'src/components/mobile/ExploreFooter.vue'

export default {
  watch: {
    isScrollReachBottom () {
      if (this.isScrollReachBottom && this.isPageOneFetched && !this.isFetchingData) {
        this.fetchDataFromFlickr()
      }
    }
  },
  data () {
    return {
      photosData: [],
      selectedTags: [],
      fetchedStatus: 'loading',
      isPageOneFetched: false,
      isScrollReachBottom: false,
      isTagsTabSelected: false,
      isHeaderFocused: false,
      isTagsListShown: false,
      isFetchingData: false,
      page: 1
    }
  },

  components: {
    ExplorePhotos,
    ExploreTags,
    ExplorePreloader,
    ExploreHeader,
    ExploreFooter,
    ExploreTagsMobile,
    ExploreSelectedTags
  },

  beforeMount () {
    this.fetchDataFromFlickr()
  },

  mounted () {
    window.onscroll = () => {
      this.isScrollReachBottom = isScrollBarReachBottom()
    }
  },

  methods: {
    fetchDataFromFlickr () {
      this.isFetchingData = true;
      axios
        .get(`/api/interestingness/getList?page=${this.page}&per_page=20`)
        .then(response => {
          if (_.isEmpty(response.data.photos.photo)) {
            this.fetchedStatus = 'empty'
          } else {
            let newPhotosDataResponse = response.data.photos.photo
            newPhotosDataResponse.forEach(photo => {
              photo.tagsArray = this.getSplitString(photo.tags)
            })
            if (this.isPageOneFetched === false) {
              this.isPageOneFetched = true
            }
            this.photosData.push(...newPhotosDataResponse)
            this.page += 1
          }
          this.isFetchingData =  false
        })
        .catch(err => {
          console.log(err)
          this.fetchedStatus = 'error'
          this.isFetchingData =  false
        })
    },
    getSplitString (text) {
      return text !== '' ? text.split(' ') : []
    },
    turnTagStrIntoArray (tags) {
      return tags.map(element => this.getSplitString(element))
    },
    findUniqTags (tags) {
      return _.uniq(_.flatten(tags))
    },
    chooseTag (tag) {
      this.selectedTags.push(tag)
      this.selectedTags = _.uniq(this.selectedTags)
    },
    removeTag (tag) {
      this.selectedTags.splice(this.selectedTags.indexOf(tag), 1)
    },
    filterPhoto () {
      return this.photosData.filter(photo => {
        return this.selectedTags.length === _.intersection(photo.tagsArray, this.selectedTags).length
      })
    },
    footerTabSelected (tab) {
      this.isTagsTabSelected = (tab === 'tags')
      this.isHeaderFocused = false
    },
    headerFocused (value) {
      this.isTagsTabSelected = value
      this.isHeaderFocused = value
    },
    deleteAllSelectedTags () {
      this.selectedTags = []
      this.isTagsListShown = false
    },
    tagsListButtom (value) {
      this.isTagsListShown = value
    }
  },

  computed: {
    getTagsInfo () {
      if (_.isEmpty(this.selectedTags)) {
        return this.findUniqTags(this.photosData.map(obj => obj.tagsArray)).sort()
      } else {
        return _.difference(
          this.findUniqTags(this.filterPhoto().map(obj => obj.tagsArray)).sort(), this.choosedTag
        )
      }
    },
    photos () {
      return _.isEmpty(this.selectedTags) ? this.photosData : this.filterPhoto()
    },
    fetchMessage () {
      return fetchMessages[this.fetchedStatus]
    },
    showPreloader () {
      return !this.isPageOneFetched || this.fetchedStatus === 'empty' || this.fetchedStatus === 'error'
    },
    showSelectedTags () {
      return !_.isEmpty(this.selectedTags)
    }
  }
}
</script>

<style scoped>
@media screen and (min-width: 426px) {
  .explore {
    padding: 60px 0;
  }
  .mobile-only{
    display: none !important;
  }
  .explore__search-wall {
    position: fixed;
    top: 60px;
    left: calc((100vw - 614px) / 2 + 614px + 28px);
    width: 293px;
  }
  .explore__interestingness-wall {
    max-width: 614px;
    margin: 0 auto;
    background-color: #FAFAFA;
  }
  .explore__preloader {
   height: 1200px;
    top: -20px;
    position: relative;
    margin: 0 auto;
  }
  .return-top {
    background-color: #000;
    border-radius: 50%;
    bottom: 55px;
    color: #fff;
    font-size: 20px;
    height: 50px;
    line-height: 50px;
    outline: 0;
    position: fixed;
    right: 60px;
    text-align: center;
    width: 50px;
    text-decoration: none;
  }
  .return-top:hover {
    background-color: grey;
  }
}

@media screen and (max-width: 425px) {
  .explore {
    position: flex;
    width: 100%;
    height: 100%;
  }
  .desktop-only {
    display: none !important;
  }
  .explore__header {
    position: fixed;
    top: 0;
    left: 0;
    width:100%;
    height: 48px;
    z-index: 3;
    border-bottom: 1px solid #d8d8d8;
  }
  .explore__footer{
    border-top: 1px solid #d8d8d8;
    z-index: 3;
    width: 100%;
    position: fixed;
    bottom: 0;
    left: 0;
    height: 46px;
  }
  .explore__interestingness-wall {
    width: 100%;
    padding-top: 48px;
    padding-bottom: 46px;
    background-color: #fff;
  }
  .explore__preloader {
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
  }
  .explore__selected-tags {
    position: fixed;
    top: 48px;
    left: 0;
    width: 100%;
    height: 35px;
    z-index: 2;
  }
  .explore__footer-tags-tab {
    width: 100%;
    height: 100vh;
    margin: 0 auto;
    top: 0;
    left: 0;
    position: fixed;
    padding-bottom: 46px;
    padding-top: 48px;
    z-index: 1;
  }
  .explore__interestingness-wall--translate {
    transform: translateY(35px)
  }
  .explore__selected-tags--more-height {
    height: calc(100vh - 94px);
  }
}

</style>
