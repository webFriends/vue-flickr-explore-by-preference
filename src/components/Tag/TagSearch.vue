<template>
  <div class="tag-search">
    <p class="tag-search__img">🔍</p>
    <input class="tag-search__text" placeholder="Search Tag" v-model="filter" @keyup="updateSearch(filter)">
  </div>
</template>

<script>
export default {
  data () {
    return {
      filter: ''
    }
  },
  methods: {
    updateSearch (value) {
      this.$emit('updateSearch', value)
    }
  }
}
</script>

<style scopped>
.tag-search {
  width: 293px;
  height: 28px;
  border-radius: 7px;
  border: 1px solid #d8d8d8;
  background-color: #ffffff;
  display: flex;
}

.tag-search__img {
  width: 16px;
  height: 16px;
  margin: 0 10px;
}

.tag-search__text {
  height: 18px;
  width: 241px;
  margin: 5px 10px 5px 0px;
  border: none;
  font-family: Helvetica-Bold, sans-serif;
  color: #999999
}

@media screen and (max-width: 425px) {
  .tag-search {
    width: 95%;
  }
  .tag-search__text {
    width: 90%;
  }
}
</style>
