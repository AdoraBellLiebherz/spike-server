/* jshint indent: 2 */
// tslint:disable
import * as sequelize from 'sequelize';
import {DataTypes} from 'sequelize';
import {petsInstance, petsAttribute} from './db';

module.exports = function(sequelize: sequelize.Sequelize, DataTypes: DataTypes) {
  return sequelize.define<petsInstance, petsAttribute>('pets', {
    'pet.name': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'pet.species': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'pet.breed': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'pet.sex': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'pet.neutered': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'pet.color': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'pet.birthdate': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'pet.deathdate': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'pet.comment': {
      type: 'BLOB',
      allowNull: true
    },
    'pet.transponder': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'pet.eupassport': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    tassoid: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    features: {
      type: 'BLOB',
      allowNull: true
    },
    fur: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'client.surname': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    'client.givennames': {
      type: DataTypes.TEXT,
      allowNull: true
    },
    customer_id: {
      type: DataTypes.INTEGER,
      allowNull: true
    },
    idx: {
      autoIncrement: true,
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      unique: true
    }
  }, {
    sequelize,
    tableName: 'pets'
  });
};
