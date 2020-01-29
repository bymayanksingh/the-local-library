var async = require('async')
var Genre = require('../models/genre')
var Book = require('../models/book')
var mongoose = require('mongoose')
// Display list of all genres
exports.genre_list = function (req, res) {
  Genre
    .find()
    .sort([['name', 'ascending']])
    .exec(function (err, list_genres) {
      if (err) { return next(err) }
      res.render('genre_list', { title: 'Genre List', genre_list: list_genres })
    })
}
// Display detail page for specific genre
exports.genre_detail = function (req, res) {
  var id = mongoose.Types.ObjectId(req.params.id)
  async.parallel({
    genre: function (callback) {
      Genre.findById(id).exec(callback)
    },
    genre_books: function (callback) {
      Book.find({ 'genre': id }).exec(callback)
    }
  }, function (err, results) {
    if (err) { return err }
    if (results.genre == null) {
      var err = new Error("this genre doesn't exist")
      err.status = 404
      return next(err)
    }
    res.render('genre_detail', { title: 'Genre Detail', genre: results.genre, genre_books: results.genre_books })
  })
}
// Display genre create form on GET
exports.genre_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: genre CREATE GET')
}
// Handle genre create on POST
exports.genre_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: genre CREATE POST')
}
// Display genre delete form on GET
exports.genre_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: genre DELETE GET')
}
// Handle genre delete on POST
exports.genre_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: genre DELETE POST')
}
// Display genre update form on GET
exports.genre_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: genre UPDATE GET')
}
// Handle genre update on POST
exports.auhtor_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: genre UPDATE POST')
}
