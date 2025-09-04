//separar lógica de negocio como crear, editar y eliminar contactos
import { inject, Inject, Injectable } from '@angular/core'; //para que se pueda inyectar en otros componentes
import {
  DocumentData,
  Firestore,
  addDoc,
  collection,
  deleteDoc,
  doc,
  updateDoc,
  getDoc,
  DocumentReference,
  orderBy,
  query,
  collectionData,
} from '@angular/fire/firestore';

import { Contact } from './contact.interfaces';

import { APP_CONSTANTS } from '@shared/constants';

import { Observable } from 'rxjs'; //son objetos que emiten valores en el tiempo y se utilizan para manejo de eventos asíncronos
@Injectable({
  providedIn: 'root',
})
export class ContactService {
  private readonly _firestore = inject(Firestore); //DB Firestore, inyectamos el servicio de Firestore con la base de datos de Firebase

  private readonly _contactsCollection = collection(
    this._firestore,
    APP_CONSTANTS.COLLECTION_NAME
  );

  //Metodo para crear un nuevo contacto
  newContact(
    contact: Partial<Contact>
  ): Promise<DocumentReference<DocumentData>> {
    return addDoc(this._contactsCollection, {
      ...contact,
      created: Date.now(),
      updated: Date.now(),
    });
  }

  //Método para actualizar un contacto
  updateContact(id: string, contact: Contact): void {
    const docRef = this._getDocRef(id);
    updateDoc(docRef,{...contact});//...contact:se va utilizar para destructurar e objeto Contact y enviarlo como un objeto independiente
  }


  //Método para obtener un contacto por id
  deleteContact(id:string):void{
    const docRef = this._getDocRef(id);//doc(db,"cities","id")
    deleteDoc(docRef);
  }



  async getContactById(id: string): Promise<Contact> {
    const docRef = this._getDocRef(id);
    const documentData = await getDoc(docRef);
    return documentData.data() as Contact;
  }


  //Método para obtener todos los contactos
  getAllContacts(): Observable<Contact[]> {
    const queryFn = query(this._contactsCollection, orderBy('name', 'desc')); //ordenar por nombre ascendente
    return collectionData(queryFn, { idField: 'id' }) as Observable<Contact[]>;
  }

  //Método para eliminar un contacto por id

  //observable-->mostrar datos en tiempo real

  //metodo privado para obtener la referencia
  private _getDocRef(id: string) {
    return doc(this._firestore, APP_CONSTANTS.COLLECTION_NAME, id);
  }
}
//nos permite inyectar el servicio en otros componentes de nuestra aplicación
// es un singleton que quiere decir que solo existe una instancia de este servicio en toda la aplicación
