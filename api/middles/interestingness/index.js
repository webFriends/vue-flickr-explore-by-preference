const express = require('express')
const router = express.Router()
const axios = require('axios')
const { get } = require('lodash')

let FLICKR_APP_API_KEY
if (process.env.NODE_ENV === 'production') {
  FLICKR_APP_API_KEY = process.env['FLICKR_APP_API_KEY']
} else {
  FLICKR_APP_API_KEY = require('../../config')
}

router.get('/getList', (req, res) => {
  // const extras = 'description, license, date_upload, date_taken, owner_name, icon_server, original_format, last_update, geo, tags, machine_tags, o_dims, views, media, path_alias, url_sq, url_t, url_s, url_q, url_m, url_n, url_z, url_c, url_l, url_o'
  const extras = 'owner_name, icon_server, tags, url_z'
  const page = get(req.query, 'page', 1)
  const perPage = get(req.query, 'per_page', 25)
  const url = `https://api.flickr.com/services/rest/?method=flickr.interestingness.getList&api_key=${FLICKR_APP_API_KEY}&extras=${extras}&page=${page}&per_page=${perPage}&format=json&nojsoncallback=1`

  axios.get(url)
    .then(resData => res.status(200).send(resData.data))
    .catch(err => {
      console.error('error when GET /api/interestingness/getList:')
      console.error(err)
      res.status(500).send('error when GET /api/interestingness/getList:')
    })
})

module.exports = router
