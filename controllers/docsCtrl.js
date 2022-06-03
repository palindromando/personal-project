const siteData = require('../data/siteData');
const Docs = require('../models/docsModel');

module.exports = {
  all_docs: (request, response) => {
    Docs.find({}, (error, allDocs) => {
      if(error){
        return error;
      } else {
        console.log(allDocs[0]);
        console.log(allDocs[0].imageUrl);
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
    const {title, author, price, starRating, synopsis} = request.body;
    const newBook = new Docs ({
      title: title,
      author: author,
      price: price,
      starRating: starRating,
      synopsis: synopsis
    });

    newDocs.save();

    response.redirect("/admin/admin-docs"); 
  },
  docs_update_put: (request, response) => {
    const {_id} = request.params;
    
    const {title, author, price, starRating, synopsis} = request.body;

    Docs.findByIdAndUpdate(_id, {$set: {
      title: title,
      author: author,
      price: price,
      starRating: starRating,
      synopsis: synopsis
    }}, {new: true}, error => {
      if(error) {
        return error;
      } else {
        response.redirect('/admin/admin-docs');
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