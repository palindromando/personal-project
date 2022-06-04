const siteData = require('../data/siteData');
const Docs = require('../models/docsModel');

module.exports = {
  all_docs: (request, response) => {
    Docs.find({}, (error, allDocs) => {
      if(error){
        return error;
      } else {
        response.render('pages/archive', {
            copyrightYear: siteData.year,
            inventoryArray: allDocs
        });
      }
    })
  },
  docs_detail: (request, response) => {
    const {_id} = request.params;
    Docs.findOne({_id: _id}, (error, foundDocs) => {
      if(error) {
        return error;
      } else {
        response.render('pages/card', {
          copyrightYear: siteData.year,
          inventoryItem : foundDocs
        });
      }
    })
  },
  docs_create_post: (request, response) => {
    const {title, subject, date, location, pages, source, type, synopsis, imageUrl} = request.body;
    const newDocs = new Docs ({
      title: title,
      subject: subject,
      date: date,
      location: location,
      pages: pages,
      source: source,
      type: type,
      synopsis: synopsis,
      imageUrl: imageUrl,
    });

    newDocs.save();

    response.redirect("/thankyou"); 
  },
  docs_update_put: (request, response) => {
    const {_id} = request.params;
    
    const {title, subject, date, location, pages, source, type, synopsis, imageUrl} = request.body;

    Docs.findByIdAndUpdate(_id, {$set: {
      title: title,
      subject: subject,
      date: date,
      location: location,
      pages: pages,
      source: source,
      type: type,
      synopsis: synopsis,
      imageUrl: imageUrl,
    }}, {new: true}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/docs/archive');
      }
    })
  },
  docs_delete: (request, response) => {
    const { _id } = request.params;
    Docs.deleteOne({_id: _id}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/admin')
      }
    }); 
  }
}