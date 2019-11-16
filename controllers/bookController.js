var Book = require('../models/book')

exports.index = function (req, res) {
  res.send('NOT IMPLEMENTED: SITE HOME PAGE')
}

// Display list of all Books
exports.book_list = function (req, res) {
  res.send('NOT IMPLEMENTED: Book LIST')
}
// Display detail page for specific book
exports.book_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: Book DETAIL:' + req.params.id)
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
