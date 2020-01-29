const mongoose = require('mongoose')
var moment = require('moment');
const Schema = mongoose.Schema

const BookInstanceSchema = new Schema(
  {
    book: { type: Schema.Types.ObjectId, ref: 'Book', required: true }, // reference to the associated book
    imprint: { type: String, required: true },
    status: { type: String, required: true, enum: ['Available', 'Maintenance', 'Loaned', 'Reserved'], default: 'Maintenance' },
    due_back: { type: Date, default: Date.now }
  }
)

// Virtual for bookinstance's URL
BookInstanceSchema
  .virtual('url')
  .get(function () {
    return '/catalog/bookinstance/' + this._id
  })

// Virtual for due date
BookInstanceSchema
  .virtual('due_back_formatted')
  .get(function () {
    return moment(this.due_back).format('Do MMMM, YYYY')
  })

// Export model
module.exports = mongoose.model('BookInstance', BookInstanceSchema)
