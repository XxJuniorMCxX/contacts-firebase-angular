//separar lógica de negocio como crear, editar y eliminar contactos
import { Inject,Injectable }from "@angular/core";
import { DocumentData,Firestore,addDoc,collection,deleteDoc,doc,updateDoc,
    getDoc,DocumentReference,orderBy,query,collectionData
 } from "@angular/fire/firestore";
import { Observable } from "rxjs";//son objetos que emiten valores en el tiempo y se utilizan para manejo de eventos asíncronos
@Injectable({
  providedIn: 'root'
})
export class ContactService {

}
//nos permite inyectar el servicio en otros componentes de nuestra aplicación
// es un singleton que quiere decir que solo existe una instancia de este servicio en toda la aplicación