import { Routes } from '@angular/router';

export const routes: Routes = [

{
    path: '',//este es el path de la aplicacion
    redirectTo: '/contacts',//Redirect a la ruta de contactos
    pathMatch: 'full',//redirige a la ruta/contacts cuando la ruta es vacia
  },

  {
    path:'contacts',//esta es la ruta /contacts
    loadChildren: () => import('./features/contacts/contacts.routes')
    },

  {
    path: '**',//cualquier otra ruta no definida 
    redirectTo: '/contacts',//redirige a la ruta / contacts
    
  },

];
