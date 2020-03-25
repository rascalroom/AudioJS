/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes tell Sails what to do each time it receives a request.
 *
 * For more information on configuring custom routes, check out:
 * https://sailsjs.com/anatomy/config/routes-js
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` your home page.            *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  // '/': { view: 'pages/homepage' },

  '/': { action: 'top', controller:'Main' },
  '/mypage': { action: 'mypage', controller:'Main' },
  '/record': { action: 'record', controller:'Main' },

  // Auth
  '/login': { action: 'login', controller:'Auth' },
  '/loginSend': { action: 'loginSend', controller:'Auth' },
  '/logout': { action: 'logout', controller:'Auth' },
  '/createAccount': { action: 'createAccount', controller:'Auth' },
  '/createAccountSend': { action: 'createAccountSend', controller:'Auth' },
  '/lsSave': { action: 'lsSave', controller:'Auth' },

  // Manifest
  '/manifest': { action: 'manifest', controller:'Manifest' },

  /***************************************************************************
  *                                                                          *
  * More custom routes here...                                               *
  * (See https://sailsjs.com/config/routes for examples.)                    *
  *                                                                          *
  * If a request to a URL doesn't match any of the routes in this file, it   *
  * is matched against "shadow routes" (e.g. blueprint routes).  If it does  *
  * not match any of those, it is matched against static assets.             *
  *                                                                          *
  ***************************************************************************/


};
