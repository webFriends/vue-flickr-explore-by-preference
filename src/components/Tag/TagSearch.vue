<template>
  <div class="tag-search">
    <div class="tag-search__img">🔍</div>
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
  align-items: center;
}

.tag-search__img {
  width: 20px;
  height: 20px;
  margin-left: 10px;
  display: flex;
  align-items: center;
}

.tag-search__text {
  height: 20px;
  width: 241px;
  border: none;
  font-family: Helvetica-Bold, sans-serif;
  color: #999999;
  font-size: 16px;
  margin-left: 6px;
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
