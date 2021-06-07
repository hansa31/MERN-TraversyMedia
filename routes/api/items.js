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

/*
@route  POST api/items
@desc Create a item
@acess public
*/

router.post('/',(req,res) => {           //server.app <-> items.router, '/' -> inside api/items
    const newItem = new Item({
        name: req.body.name
    })

    //save it to the database (promise based)
    newItem.save()
        .then(item => {
            res.json(item)
        })
})

/*
@route  DELETE api/items/:id
@desc Delete an item
@acess public
*/

router.delete('/:id',(req,res) => {           //server.app <-> items.router, '/' -> inside api/items
    Item.findById(req.params.id)
        .then(itemfound => itemfound.remove().then(()=> res.json({sucess: true})))
        .catch(err => res.status(404).json({sucess: false}))
})


//export router
module.exports = router