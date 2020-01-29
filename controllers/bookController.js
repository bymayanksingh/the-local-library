var Book = require('../models/book')
var Author = require('../models/author')
var Genre = require('../models/genre')
var BookInstance = require('../models/bookinstance')
var mongoose = require('mongoose')

var async = require('async')

//Index page
exports.index = function (req, res) {
  async.parallel({
    book_count: function (callback) {
      Book.countDocuments({}, callback)
    },
    book_instance_count: function (callback) {
      BookInstance.countDocuments({}, callback)
    },
    book_instance_available_count: function (callback) {
      BookInstance.countDocuments({ status: 'Available' }, callback)
    },
    author_count: function (callback) {
      Author.countDocuments({}, callback)
    },
    genre_count: function (callback) {
      Genre.countDocuments({}, callback)
    }
  }, function (err, results) {
    res.render('index', { title: 'Local Library Home', error: err, data: results })
  })
}
// Display list of all Books
exports.book_list = function (req, res) {
  Book.find({}, 'title author')
    .populate('author')
    .exec(function (err, list_books) {
      if (err) { return next(err) }
      res.render('book_list', { title: 'Book List', book_list: list_books })
    })
}
// Display detail page for specific book
exports.book_detail = function (req, res, next) {
  async.parallel({
    book: function (callback) {
      Book.findById(req.params.id)
        .populate('author')
        .populate('genre')
        .exec(callback)
    },
    book_instance: function (callback) {
      BookInstance
        .find({ 'book': req.params.id })
        .exec(callback)
    }
  }, function (err, results) {
    if (err) {
      return next(err);
    }
    if (results.book == null) {
      var err = new Error('Book not found')
      err.status = 404
      return next(err)
    }
    res.render('book_detail', { title: results.book.title, book: results.book, book_instances: results.book_instance })
  })
}
// Display book create form on GET
exports.book_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Book CREATE GET')
}
// Handle book create on POST
exports.book_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Book CREATE POST')
}
// Display book delete form on GET
exports.book_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Book DELETE GET')
}
// Handle book delete on POST
exports.book_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Book DELETE POST')
}
// Display book update form on GET
exports.book_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: Book UPDATE GET')
}
// Handle book update on POST
exports.auhtor_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: Book UPDATE POST')
}
