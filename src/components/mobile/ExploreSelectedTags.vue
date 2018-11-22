<template>
  <div>
    <ExploreSelectedTagsStatus
      class="explore__selected-tags-status"
      :selectedTags="selectedTags"
      @clickTriangle="clickTriangle"
      @deleteAllSelectedTags="deleteAllSelectedTags"
    />
    <ExploreSelectedTagsList
      v-show="showSelectedTagList"
      class="explore__selected-tags-list"
      :selectedTags="selectedTags"
      @sendRemovedTag="sendRemovedTag"
    />
  </div>
</template>
<script>
import ExploreSelectedTagsStatus from 'src/components/mobile/ExploreSelectedTagsStatus.vue'
import ExploreSelectedTagsList from 'src/components/mobile/ExploreSelectedTagsList.vue'
import _ from 'lodash'
export default {
  components: {
    ExploreSelectedTagsList,
    ExploreSelectedTagsStatus
  },
  props: {
    selectedTags: {
      type: Array,
      default: function () {
        return []
      }
    }
  },
  data () {
    return {
      isSelectedToShowTagsList: false
    }
  },
  computed: {
    showSelectedTagList () {
      return !_.isEmpty(this.selectedTags) && this.isSelectedToShowTagsList
    }
  },
  methods: {
    clickTriangle () {
      this.isSelectedToShowTagsList = !this.isSelectedToShowTagsList
      this.isSelectedToShowTagsList ? this.$emit('isTagsListShown', true) : this.$emit('isTagsListShown', false)
    },
    deleteAllSelectedTags () {
      this.$emit('deleteAllSelectedTags')
      this.isSelectedToShowTagsList = false
    },
    sendRemovedTag (tag) {
      this.$emit('sendRemovedTag', tag)
    }
  }
}
</script>
<style scoped>
.explore__selected-tags-status {
  height: 35px;
  width: 100%;
}

.explore__selected-tags-list {
  background-color: rgba(255, 255, 255, 0.9);
  width: 100%;
  height: calc(100% - 35px);
}
</style>
