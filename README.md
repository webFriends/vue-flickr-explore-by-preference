# vue-flickr-explore-by-preference
vue-flickr-explore-by-preference is an app built with Vue 2.0, based on vue-hackernews-2.0 and use [flickr.interestingness.getList](https://www.flickr.com/services/api/explore/flickr.interestingness.getList). 

The feature of tags-list is added by this app to help users find the relevant photos more easily when looking over the entire Explore showcase. The initial state of tag list is the collection of tags of today's photos. With infinite scroll, more photos will be loaded and the tag-list data will be updated through user browsing.

Future work: Add "Flickr's Login" and "Add to Favorite" functions 

## Caveat
Before you start, you should provide your own `config.js` file in `api/config.js` like this:
```
const FLICKR_APP_API_KEY = 'YOUR_FLICKR_APP_API_KEY'
const FLICKR_APP_SECRET = 'YOUR_FLICKR_APP_SECRET'

module.exports = {
  FLICKR_APP_API_KEY,
  FLICKR_APP_SECRET
}
```
