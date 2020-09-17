// tslint:disable
import * as Sequelize from 'sequelize';


// table: customers_lut
export interface customers_lutAttribute {
  value?:string;
  text?:string;
  align?:string;
  sortable?:number;
  width?:string;
  visible?:number;
}
export interface customers_lutInstance extends Sequelize.Instance<customers_lutAttribute>, customers_lutAttribute { }
export interface customers_lutModel extends Sequelize.Model<customers_lutInstance, customers_lutAttribute> { }

// table: de_plz_lut
export interface de_plz_lutAttribute {
  nation?:string;
  postalcode?:string;
  city?:string;
  province?:string;
  province_short?:string;
  additinal_province_info?:string;
  field7?:string;
  additonal_province_info2?:string;
  field9?:string;
  latitude?:string;
  longitude?:string;
}
export interface de_plz_lutInstance extends Sequelize.Instance<de_plz_lutAttribute>, de_plz_lutAttribute { }
export interface de_plz_lutModel extends Sequelize.Model<de_plz_lutInstance, de_plz_lutAttribute> { }

// table: pets_lut
export interface pets_lutAttribute {
  value?:string;
  text?:string;
  align?:string;
  sortable?:number;
  width?:string;
  visible?:number;
}
export interface pets_lutInstance extends Sequelize.Instance<pets_lutAttribute>, pets_lutAttribute { }
export interface pets_lutModel extends Sequelize.Model<pets_lutInstance, pets_lutAttribute> { }

// table: customers
export interface customersAttribute {
  surname?:string;
  givennames?:string;
  title?:string;
  gender?:string;
  street?:string;
  postalcode?:string;
  city?:string;
  phone?:string;
  workphone?:string;
  homephone?:string;
  cellphone?:string;
  fax?:string;
  email?:string;
  primaryvet?:string;
  dsgvo?:number;
  admission?:number;
  birthdate?:string;
  note?:any;
  idx?:number;
}
export interface customersInstance extends Sequelize.Instance<customersAttribute>, customersAttribute { }
export interface customersModel extends Sequelize.Model<customersInstance, customersAttribute> { }

// table: gender_lut
export interface gender_lutAttribute {
  idx?:number;
  gender?:string;
}
export interface gender_lutInstance extends Sequelize.Instance<gender_lutAttribute>, gender_lutAttribute { }
export interface gender_lutModel extends Sequelize.Model<gender_lutInstance, gender_lutAttribute> { }

// table: title_lut
export interface title_lutAttribute {
  idx?:number;
  title?:string;
}
export interface title_lutInstance extends Sequelize.Instance<title_lutAttribute>, title_lutAttribute { }
export interface title_lutModel extends Sequelize.Model<title_lutInstance, title_lutAttribute> { }

// table: pets
export interface petsAttribute {
  pet.name?:string;
  pet.species?:string;
  pet.breed?:string;
  pet.sex?:string;
  pet.neutered?:string;
  pet.color?:string;
  pet.birthdate?:string;
  pet.deathdate?:string;
  pet.comment?:any;
  pet.transponder?:string;
  pet.eupassport?:string;
  tassoid?:string;
  features?:any;
  fur?:string;
  client.surname?:string;
  client.givennames?:string;
  customer_id?:number;
  idx?:number;
}
export interface petsInstance extends Sequelize.Instance<petsAttribute>, petsAttribute { }
export interface petsModel extends Sequelize.Model<petsInstance, petsAttribute> { }
