/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {customers_lutInstance, customers_lutAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<customers_lutInstance, customers_lutAttribute>('customers_lut', {
    value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    text: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    align: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    sortable: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    width: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    visible: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  }, {
    sequelize,
    tableName: 'customers_lut'
  });
};
