/**
 * ManifestController
 *
 * @description :: Server-side actions for handling incoming requests.
 * @help        :: See https://sailsjs.com/docs/concepts/actions
 */

module.exports = {
  

  /**
   * `ManifestController.manifest()`
   */
  manifest: async function (req, res) {
    var data = {
      "short_name": "i!wake",
      "name": "i!wake",
      "start_url": "http://192.168.0.5:1500",
      "display": "standalone",
    }

    return res.json(data);

  },

};

