/* eslint-disable new-cap, no-param-reassign, consistent-return */

import express from 'express';
import Bookmark from '../models/bookmark';
import createValidator from '../validators/bookmarks/create';
import deleteValidator from '../validators/bookmarks/delete';
import findValidator from '../validators/bookmarks/find';
const router = module.exports = express.Router();

// create
router.post('/', createValidator, (req, res) => {
  Bookmark.create(res.locals, (err, bookmark) => {
    res.send({ bookmark });
  });
});

// delete
router.delete('/:id', deleteValidator, (req, res) => {
  Bookmark.findByIdAndRemove(req.params.id, (err, bookmark) => {
    if (bookmark) {
      res.send({ id: bookmark._id });
    } else {
      res.status(400).send({ messages: ['id not found'] });
    }
  });
});

// create
router.get('/', findValidator, (req, res) => {
  console.log('Insde get');
  Bookmark.find( (err, bookmarks) => {
    res.send({ bookmarks });
  });
});
