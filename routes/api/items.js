//use the express router
const express = require('express')
const router = express.Router()

//bring in Item Model to make queries
const Item = require('../../models/Item')

//create some routes

/*
@route  GET api/items
@desc Get all items
@acess public
*/

router.get('/',(req,res) => {           //server.app <-> items.router, '/' -> inside api/items
    Item.find()
        .sort({date: -1})
        .then(itemsfound => res.json(itemsfound))
})

//export router
module.exports = router