
import {CommonModule} from '@angular/common';
import {NgModule} from '@angular/core';
import {FormsModule} from "@angular/forms";

import { ArtistInfoComponent } from './artist-info/artist-info.component';
import { ArtistMerchComponent } from './artist-merch/artist-merch.component';
import {ArtistService} from '../services/artist.service';

import {MatButtonModule, MatCardModule, MatInputModule, 
        MatSelectModule, MatDialogModule, MatProgressSpinnerModule} from '@angular/material';



@NgModule({
    declarations: [
      ArtistInfoComponent,
      ArtistMerchComponent
    ],
  
    providers: [
      ArtistService
    ],
  
    imports: [
        CommonModule,
        FormsModule,
        // material modules
        MatCardModule,
        MatInputModule,
        MatButtonModule,
        MatSelectModule,
        MatDialogModule,
        MatProgressSpinnerModule
    ]
  })
  export class ViewsModule { }
  