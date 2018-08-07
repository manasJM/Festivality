import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';



@Injectable()
export class ArtistService {

    constructor(private http: HttpClient) {

    }
   
    submitForm(formData) {
    
          let artist ={"type":"artist-application",
          "title":{"en":"test"},"description":{"en":"test"},"members":"test","country":"EE","peopleOnStage":"2","peopleTravelling":"4","acceptTerms":true}
          return this.http.post('https://api.festivality.co/inbound', formData);
    }

    getCountries() {
        return this.http.get('https://api.festivality.co/v2/country');

    }

    uploadImage(request) {
        const params ={
            'targetType':  'artist-application',
            'type': 'image'
            
        }
        return this.http.post('https://api.festivality.co/v2/media', request, {params: params})
    }
}