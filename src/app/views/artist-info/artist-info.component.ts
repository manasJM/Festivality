import { Component, OnInit } from '@angular/core';

import {ArtistService} from '../../services/artist.service'
import {NotificationDialogComponent} from '../../notification-dialog/notification-dialog.component'
import {MatDialog, MatDialogConfig} from '@angular/material';


/**
 * View component for the Artist Info Submit form
 *
 * @class
 */
@Component({
  selector: 'app-artist-info',
  templateUrl: './artist-info.component.html',
  styleUrls: ['./artist-info.component.scss']
})
export class ArtistInfoComponent implements OnInit {
  // view model attributes
  public artist = {
    type:"artist-application",
    title: '',
    country: '',
    description: '',
    peopleCount: ''
  };

  public countries = [];
  public members = [];
  public imageUploading = false;
  public imagesUploaded = [];


  constructor(private artistService :ArtistService,
              private dialog: MatDialog) { 
  }

  ngOnInit() {
    this.populatedropdowns();
  }

  /**
   * Populates Country and People dropdown
   */
  private populatedropdowns() : void {
    this.artistService.getCountries()
    .subscribe(
      data => {
        console.log('countries', data);
        this.countries = data['response'];
        this.members = Array.apply(null, {length:40}).map(Number.call, Number)
      }
    )
  }
  /**
   * Submit form to the API
   */
  public submitArtistForm() {
    this.artistService.submitForm(this.artist)
    .subscribe(res => {
      console.log(res);
      this.openDialog('Form Successfully Submitted');
    },
    err=> {
      this.openDialog('Error in submitting form. Please try again later')
    });
  }

  /**
   * To prevent default behaviour while dragging a file on the drop box
   * @param event
   */
  public allowFilesDrag(event) {
    event.preventDefault();
  }

  /**
   * This function is called whenever files are dropped in the drop-box area.
   * @param event
   */
  public filesDropped(event) {
    event.preventDefault();
    this.uploadImages(event.dataTransfer);
  }

  /**
   * This function is called whenever user uploads documents in the UI. We send each document individually to the server.
   * @param uploadEvent
   */
  public uploadImages(uploadEvent: any) {
    this.imageUploading = true;
    this.imagesUploaded = Object.keys(uploadEvent.files).map(function(key) {
      return uploadEvent.files[key];
    });

    // checks if valid number of documents were selected to upload at one time
    if (this.imagesUploaded.length > 0) {
      this.imagesUploaded.forEach(this.handleIndividualImageUpload.bind(this));
      }
  }

  
  /**
   * Uploads Individual documents to the server
   * @param document
   */
  private handleIndividualImageUpload(image): void {
    const formData = new FormData();
    formData.append('image', image);
      this.artistService.uploadImage(formData)
        .subscribe(
          response => {
            console.log('Image upload', response)
          },
          err => console.log('Image error', err),
          ()=> {
            this.imageUploading = false;
          });
    }

    private openDialog(message): void {
      const dialogRef = this.dialog.open(NotificationDialogComponent, <MatDialogConfig>{
        width: '400px',
        data: {
          userMessageDisplayed: message
        }
      });

      dialogRef.afterClosed().subscribe(result => {
          window.location.reload(true);
      });
  }

}
