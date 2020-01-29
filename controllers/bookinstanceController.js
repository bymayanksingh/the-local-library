var BookInstance = require('../models/bookinstance')

// Display list of all BookInstances
exports.bookinstance_list = function (req, res) {
  BookInstance.find().
    populate('book').
    exec(function (err, list_bookinstances) {
      if (err) { return next(err); }

      res.render('bookinstance_list', { title: 'Book Instance List', bookinstance_list: list_bookinstances })
    })
}
// Display detail page for a specific BookInstance.
exports.bookinstance_detail = function (req, res, next) {

  BookInstance.findById(req.params.id)
    .populate('book')
    .exec(function (err, bookinstance) {
      if (err) { return next(err); }
      if (bookinstance == null) { // No results.
        var err = new Error('Book copy not found');
        err.status = 404;
        return next(err);
      }
      // Successful, so render.
      res.render('bookinstance_detail', { title: 'Copy: ' + bookinstance.book.title, bookinstance: bookinstance });
    })

};
// Display bookinstance create form on GET
exports.bookinstance_create_get = function (req, res) {
  res.send('NOT IMPLEMENTED: BookInstance CREATE GET')
}
// Handle bookinstance create on POST
exports.bookinstance_create_post = function (req, res) {
  res.send('NOT IMPLEMENTED: BookInstance CREATE POST')
}
// Display bookinstance delete form on GET
exports.bookinstance_delete_get = function (req, res) {
  res.send('NOT IMPLEMENTED: BookInstance DELETE GET')
}
// Handle bookinstance delete on POST
exports.bookinstance_delete_post = function (req, res) {
  res.send('NOT IMPLEMENTED: BookInstance DELETE POST')
}
// Display bookinstance update form on GET
exports.bookinstance_update_get = function (req, res) {
  res.send('NOT IMPLEMENTED: BookInstance UPDATE GET')
}
// Handle bookinstance update on POST
exports.auhtor_update_post = function (req, res) {
  res.send('NOT IMPLEMENTED: BookInstance UPDATE POST')
}
