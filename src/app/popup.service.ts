import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  makePopup(data: any): string {
    return `` +
    `<div>Contact: ${ data.contact_name }</div>` +
    `<div>State: ${ data.requested_dropoff_location }</div>`
  }
}
