var mongoose = require('mongoose')

var Schema = mongoose.Schema

var AuthorSchema = new Schema({
  first_name: {
    type: String,
    required: true,
    max: 100
  },
  family_name: {
    type: String,
    required: true,
    max: 100
  },
  date_of_birth: {
    type: Date
  },
  date_of_death: {
    type: Date
  }
})

// Virtual
// name
AuthorSchema.virtual('name').get(function () {
  return this.family_name + ', ' + this.first_name
})
// lifespan
AuthorSchema.virtual('lifespan').get(function () {
  return (this.date_of_death.getYear() - this.date_of_birth.getYear()).toString()
})
// url
AuthorSchema.virtual('url').get(function () {
  return '/catalog/author/' + this._id
})

// export model
module.exports = mongoose.model('Author', AuthorSchema)