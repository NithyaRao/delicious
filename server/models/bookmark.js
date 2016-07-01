/* eslint-disable func-names */

import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const bookmarkSchema = new Schema({
  title: { type: String, required: true },
  url: { type: String, required: true },
  description: { type: String, required: true },
  isProtected: { type: Boolean, default: false },
  datePublished: { type: Date },
  stars: { type: Number, default: 1 },
  tags: [String],
  dateCreated: { type: Date, default: Date.now },
});

module.exports = mongoose.model('Bookmark', bookmarkSchema);
