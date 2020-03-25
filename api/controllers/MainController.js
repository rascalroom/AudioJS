/**
 * MainController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  
  /**
   * `MainController.top()`
   */
  top: async function (req, res) {

    if(!req.query.ls) return res.redirect('/lsSave');
    res.cookie('eMail', req.query.ls);

    return res.view({
      message: req.query
    });
  },

  /**
   * `MainController.mypage()`
   */
  mypage: async function (req, res) {

    if(!req.cookies.eMail) return res.redirect('/login');
    if(!req.query.ls) return res.redirect('/mypage?ls=' + req.cookies.eMail);

    return res.view({
      message: req.query
    });
  },

  /**
   * `MainController.record()`
   */
  record: async function (req, res) {

    if(!req.cookies.eMail) return res.redirect('/login');
    if(!req.query.ls) return res.redirect('/record?ls=' + req.cookies.eMail);

    return res.view({
      message: req.query
    });
  }

};

