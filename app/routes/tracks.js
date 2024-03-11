const express = require('express')
const router = express.Router()
const checkOrigin = require('../middleware/origin')
const checkAuth = require('../middleware/auth')
const checkRoleAuth = require('../middleware/roleAuth')
const { getItems, getItem, createItem, deleteItem, updateItem } = require('../controlles/tracks')
const { validateCreate } = require('../validators/users')

router.get('/', getItems) 

router.get('/:id', checkOrigin, getItem)

router.get('/history', async (req, res) => {
    const term = req.query.src;
    try {
      if (term) {

        const listAll = yourTracksArray.filter(track => track.name.toLowerCase().includes(term.toLowerCase()));
        res.send({ data: listAll });
      } else {
        throw new Error("Search term is missing.");
      }
    } catch (e) {
      httpError(res, e);
    }
});
  

//TODO: Donde recibimos data
router.post('/', checkOrigin, validateCreate, createItem)

router.patch('/:id', updateItem)

router.delete('/:id', deleteItem)


module.exports = router