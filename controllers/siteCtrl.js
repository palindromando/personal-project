const User = require('../models/userModel');
const siteData = require('../data/siteData');
const passport = require('passport');

module.exports = {
  index: (request, response) => {
    response.render('pages/index', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  },
  about: (request, response) => {
    response.render('pages/about', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  },
  thankyou: (request, response) => {
    response.render('pages/thankyou', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  },
  map: (request, response) => {
    response.render('pages/map', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  },
  submission: (request, response) => {
    response.render('pages/submission', {
        name: siteData.userName,
        copyrightYear: siteData.year,
        signedIn: siteData.signedIn
    });
  },
  // submission_post: (request, response) => {
  //   const {title, subject, date, location, pages, source, type, synopsis, imageUrl} = request.body;
  //   const newDocs = new Docs ({
  //     title: title,
  //     subject: subject,
  //     date: date,
  //     location: location,
  //     pages: pages,
  //     source: source,
  //     type: type,
  //     synopsis: synopsis,
  //     imageUrl: imageUrl,
  //   });
    
  //   newDocs.save();

  //   response.redirect("pages/submission"); 
  // },
  register_get:(request, response) => {
    response.render('pages/register', {
      copyrightYear: siteData.year
    });
  },
  register_post:(request, response) => {
    const {username, password} = request.body;
    User.register({username: username}, password, (error, user) => {
      if (error) {
        console.log(error);
        response.redirect('/register');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/login');
        });
      }
    }); 
  },
  login_get: (request, response) => {
    response.render('pages/login', {
      copyrightYear: siteData.year
    });
  },
  login_post: (request, response) => {
    const {username, password} = request.body;
    const user = new User({
      username: username,
      password: password
    });

    request.login(user, (error) => {
      if (error) {
        console.log(error)
        response.redirect('/login');
      } else {
        passport.authenticate('local')(request, response, () => {
          response.redirect('/admin');
        });
      }
    });
  },
  logout:(request, response) => {
    request.logout();
    response.redirect('/');
  },
  google_get: passport.authenticate('google', {scope: ['openid', 'profile', 'email']}),
  google_redirect_get: [
    passport.authenticate('google', {failureRedirect: '/login'}),
    function(request, response) {
      response.redirect('/admin');
    }
  ]
}