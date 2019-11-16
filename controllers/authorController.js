var Author = require('../models/author')

// Display list of all Authors
exports.author_list = function (req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR LIST')
}
// Display detail page for specific Author
exports.author_detail = function (req, res) {
  res.send('NOT IMPLEMENTED: AUTHOR DETAIL:' + req.params.id)
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
