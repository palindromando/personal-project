const siteData = require('../data/siteData');
const Docs = require('../models/docsModel');


module.exports = {
  admin: (request, response) => {
    if(request.isAuthenticated()){
      Docs.find({}, (error, allDocs) => {
        if(error){
          return error;
        } else {
          response.render('pages/admin', {
            copyrightYear: siteData.year,
            inventoryArray: allDocs
          });
        }
      })
    } else {
      response.redirect('/login')
    }
  },
  submission: (request, response) => {
    if (request.isAuthenticated()) {
      response.render('pages/submission', {
        copyrightYear: siteData.year,
      });
    } else {
      response.redirect('/login')
    }
  },
  docs_update_get: (request, response) => {
    if(request.isAuthenticated()){
      const { _id } = request.params;
      Docs.findOne({_id: _id}, (error, foundDocs) => {
        if(error) {
          return error;
        } else {
          console.log(foundDocs)
          response.render('pages/updateDocs', {
            copyrightYear: siteData.year,
            foundDocs: foundDocs
          });
        }
      });
    } else {
      response.redirect('/login')
    }
  },
}