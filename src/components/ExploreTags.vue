<template>
  <div>
    <TagSearch class="tags-search" @updateSearch="updateSearch"/>
    <TagSelectedList class="tags-selected-list" :selectedTags="selectedTags" @sendRemovedTag="deleteSelectedTag"/>
    <TagList :tags="showTags" class="tags-selection" @chooseTag="chooseTag"/>
    <a class="external-link" target="_blank" href="https://gitlab.com/web-friends/vue-flickr-explore-by-preference"><p class="link-text"> Gitlab Project </p></a>
    <a class="external-link" target="_blank" href="https://www.flickr.com/explore"><p class="link-text"> Official Flickr Explore </p></a>
  </div>
</template>

<script>
import TagSelectedList from 'src/components/Tag/TagSelectedList.vue'
import TagSearch from 'src/components/Tag/TagSearch.vue'
import TagList from 'src/components/Tag/TagList.vue'

export default {
  components: {
    TagSearch,
    TagList,
    TagSelectedList
  },
  props: {
    tags: {
      type: Array,
      required: true
    },
    selectedTags: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      search: ''
    }
  },
  methods: {
    updateSearch (search) {
      this.search = search
    },
    chooseTag (tag) {
      this.$emit('chooseTag', tag)
      this.search = ''
    },
    deleteSelectedTag (tag) {
      this.$emit('removeTag', tag)
    }
  },
  computed: {
    showTags () {
      return this.tags.filter(tag => tag.includes(this.search.toLowerCase()))
    }
  }
}
</script>

<style scopped>
.tags-search {
  border-bottom: 1px solid #d8d8d8;
}
.link-text {
  margin-bottom: 12px;
  font-family: Helvetica, sans-serif;
  font-size: 14px;
  width: 293px;
  height: 14px;
  font-weight: normal;
  font-style: normal;
  font-stretch: normal;
  line-height: 1;
  letter-spacing: normal;
  color: #262626;
}
.external-link:link,
.external-link:visited{
  text-decoration:none;
}
.tags-selection {
  border-top: 1px solid #d8d8d8;
  border-bottom: 1px solid #d8d8d8;
  margin: 12px 0;
}
.tags-selected-list {
  margin-top:12px;
}

</style>
