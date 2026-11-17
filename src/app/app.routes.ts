import { loadRemoteModule } from '@angular-architects/native-federation';
import { Routes } from '@angular/router';


  /**
   *declara rutas de routers
   */

export const routes: Routes = [
  {
    path: 'mfe-a',
    loadComponent: () =>
      loadRemoteModule('mfe-a', './Component').then((m) => m.App),
  },


];
