/**
 * Recordlist.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    recordName: { type: 'string', required: true, unique: true, columnType: 'varchar(100) CHARACTER SET utf8mb4' },
    filePath: { type: 'string', required: true },
    kind: { type: 'number', required: true }

  },

};

