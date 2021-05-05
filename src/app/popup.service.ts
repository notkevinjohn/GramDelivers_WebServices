import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makePopup(data: any): string {
    return `` +
    `<div>Contact: ${ data.contact_name }</div>` +
    `<div>Dropoff Address: ${ data.requested_dropoff_location }</div>` +
    `<div>Route: red</div>`
  }
}
