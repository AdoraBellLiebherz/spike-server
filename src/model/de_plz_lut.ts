/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {de_plz_lutInstance, de_plz_lutAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<de_plz_lutInstance, de_plz_lutAttribute>('de_plz_lut', {
    nation: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    postalcode: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    city: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    province: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    province_short: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    additinal_province_info: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    field7: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    additonal_province_info2: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    field9: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    latitude: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    longitude: {
      type: DataTypes.TEXT,
      allowNull: true
    }
  }, {
    sequelize,
    tableName: 'de_plz_lut'
  });
};
