/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {customersInstance, customersAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<customersInstance, customersAttribute>('customers', {
    surname: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    givennames: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    title: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    gender: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    street: {
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
    phone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    workphone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    homephone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    cellphone: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    fax: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    email: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    primaryvet: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    dsgvo: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    admission: {
      type: DataTypes.INTEGER,
      allowNull: false,
      defaultValue: 0
    },
    birthdate: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    note: {
      type: 'BLOB',
      allowNull: true
    },
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true
    }
  }, {
    sequelize,
    tableName: 'customers'
  });
};
