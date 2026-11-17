import { initFederation } from '@angular-architects/native-federation';
import { environment } from './environments/environment';

  /**
   *declara urls de repositirios externos
   */
initFederation({
  'mfe-a': environment.remoteMfeA
})
  .catch(err => console.error(err))
  .then(_ => import('./bootstrap'))
  .catch(err => console.error(err));
