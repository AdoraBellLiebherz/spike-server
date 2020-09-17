// tslint:disable
import * as path from 'path';
import * as sequelize from 'sequelize';
import * as def from './db';

export interface ITables {
  customers: def.customersModel;
  customers_lut: def.customers_lutModel;
  de_plz_lut: def.de_plz_lutModel;
  gender_lut: def.gender_lutModel;
  pets: def.petsModel;
  pets_lut: def.pets_lutModel;
  title_lut: def.title_lutModel;
}

export const getModels = function(seq: sequelize.Sequelize): ITables {

  function load(filePath: string) {
    return seq.import(path.join(__dirname, filePath));
  }

  //@ts-ignore
  return {
    customers: load('customers'),
    customers_lut: load('customers_lut'),
    de_plz_lut: load('de_plz_lut'),
    gender_lut: load('gender_lut'),
    pets: load('pets'),
    pets_lut: load('pets_lut'),
    title_lut: load('title_lut'),
  } as ITables;
};