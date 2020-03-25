/**
 * Mysetting.js
 *
 * @description :: A model definition represents a database table/collection.
 * @docs        :: https://sailsjs.com/docs/concepts/models-and-orm/models
 */

module.exports = {

  attributes: {

    eMail: { type: 'string', required: true, unique: true, columnType: 'varchar(100) CHARACTER SET utf8mb4' },
    password: { type: 'string', required: true },
    item1: { model: 'recordlist', required: true },
    item2: { model: 'recordlist', required: true },
    item3: { model: 'recordlist', required: true },
    item4: { model: 'recordlist', required: true }

  },

};

