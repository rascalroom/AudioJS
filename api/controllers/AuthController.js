/**
 * AuthController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

var request = require('request');

module.exports = {
  

  /**
   * `AuthController.login()`
   */
  login: async function (req, res) {
    return res.view({
      message: 'login display'
    });
  },

  /**
   * `AuthController.loginSend()`
   */
  loginSend: async function (req, res) {

    let eMail = req.body.eMail;
    let password = req.body.password;

    let result = await Mysetting.findOne({ eMail: eMail, password: password });

    if(!result) return res.redirect('/login');

    console.log(result.eMail);
    res.cookie('eMail', result.eMail);

    let url = '/lsSave';

    return res.redirect(url);
  },

  /**
   * `AuthController.lsSave()`
   */
  lsSave: async function (req, res) {
    return res.view(req.body);
  },

  /**
   * `AuthController.logout()`
   */
  logout: async function (req, res) {

    res.clearCookie('eMail');

    return res.redirect('/login');
  },

  /**
   * `AuthController.createAccount()`
   */
  createAccount: async function (req, res) {
    return res.view({
      message: 'createAccount display'
    });
  },

  /**
   * `AuthController.createAccountSend()`
   */
  createAccountSend: async function (req, res) {

    let eMail = req.body.eMail;
    let password = req.body.password;

    let options = {
      eMail: eMail,
      password: password,
      item1: 1,
      item2: 2,
      item3: 3,
      item4: 4
    };

    let check = await Mysetting.findOne({ eMail: eMail });
    if(check) return res.redirect('/createAccount');

    let createAccount = await Mysetting.create(options).fetch();
    console.log(createAccount);

    return res.redirect('/login');
  }

};

