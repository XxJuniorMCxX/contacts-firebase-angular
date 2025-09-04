import { Timestamp } from "@angular/fire/firestore"

export type ColumnKeys<T> = Array<keyof T>;
//ColumnKeys<T> es un tipo generico que representa las claves de un objeto como un array
//Keyof<T> es un tipo que representa las claves de un objeto y devuelve un objeto tambien
export interface Contact {
  id: number,
  name: string,
  email: string,
  phone: number,
  country: string,
  actions:string,
  created: Timestamp,
  updated: Timestamp
}
//una interface define la forma de un objeto
