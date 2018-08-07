import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

import { ArtistInfoComponent } from '../views/artist-info/artist-info.component';
import { ArtistMerchComponent } from '../views/artist-merch/artist-merch.component';


/**
 * The complete set of View routes.
 */
const routes: Routes = [
    {
      path: 'app/artistInfo',
      component: ArtistInfoComponent
    },
    {
      path: 'app/artistMerch',
      component: ArtistMerchComponent
    },
    {
      path: '',
      redirectTo: '/app/artistInfo',
      pathMatch: 'full'
    },
    {
      path: '**',
      redirectTo: '/app/artistInfo',
      pathMatch: 'full'
    }
  ];

  /**
 * Angular module for the application's View routes.
 * @class
 */
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
  })
  export class AppRoutingModule {
  }
  