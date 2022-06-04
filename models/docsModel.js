const mongoose = require('mongoose');
const {Schema} = mongoose;

const docsSchema = new Schema({
  // name: {
  //   type: String,
  //   required: [true, 'A title is required.'],
  //   minlength:[1,'Minimun length for the title is 1 characters.']
  // },
  // email: {
  //   type: String,
  //   required: [true, 'A title is required.'],
  //   minlength:[1,'Minimun length for the title is 1 characters.']
  // },
  title: {
    type: String,
    required: [true, 'A title is required.'],
    minlength:[1,'Minimun length for the title is 1 characters.']
  },
  subject: {
    type: String,
    required: [true, 'A subject is required.'],
    minlength:[5,'Minimun length for subject is 5 characters.']
  },
  date: {
    type: String,
    required: [true, 'The date is required.'],
    min: [1, 'Minimun lenght for the date is 1']
  },
  location: {
    type: String,
    required: [true, 'The location is required.'],
    min: [1, 'Minimun lenght for the location is 1']
  },
  pages: {
    type: Number,
    required: [true, 'The number of pages is required.'],
    min: [1, 'Minimun number of pages is 1']
  },
  source: {
    type: String,
    required: [true, 'A source is required.'],
    minlength:[1,'Minimun length for the source is 1 characters.']
  },
  type: {
    type: String,
    required: [true, 'A type is required.'],
  },
  synopsis: {
    type: String,
  },
  imageUrl: {
    type: String,
  },
});

const Docs = mongoose.model('Docs', docsSchema);

module.exports = Docs;