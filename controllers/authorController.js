var Author = require('../models/author')
var Book = require('../models/book')
var async = require('async')

// Display list of all Authors
exports.author_list = function (req, res) {

  Author.find()
    .sort([['family_name', 'ascending']])
    .exec(function (err, list_authors) {
      if (err) { return next(err) }
      res.render('author_list', { title: 'Author List', author_list: list_authors })
    })
}
// Display detail page for specific Author
exports.author_detail = function (req, res) {
  async.parallel({
    author: function (callback) {
      Author.findById(req.params.id)
        .exec(callback)
    },
    authors_books: function (callback) {
      Book.find({ 'author': req.params.id }, 'title summary')
        .exec(callback)
    }
  }, function (err, results) {
    if (err) { return err }
    if (results.author == null) {
      var err = new Error('Author not found')
      err.status = 404;
      return next(err)
    }
    res.render('author_detail', { title: 'Author Detail', author: results.author, author_books: results.authors_books })
  })
}
// Display Author create form on GET
exports.author_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR CREATE GET')
}
// Handle Author create on POST
exports.author_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR CREATE POST')
}
// Display Author delete form on GET
exports.author_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR DELETE GET')
}
// Handle Author delete on POST
exports.author_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR DELETE POST')
}
// Display Author update form on GET
exports.author_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR UPDATE GET')
}
// Handle Author update on POST
exports.auhtor_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR UPDATE POST')
}
