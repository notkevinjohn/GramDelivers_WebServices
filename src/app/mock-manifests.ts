import { Manifest } from './manifest';
import { Order } from './order';

export const MANIFESTS: Manifest[] = [
  {
    id: 1, file_name: 'm1249.csv',
    orders:
[
      {	job_number: 17, driver_id: 7427, contact_name: "Ed Dow", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/11/2021 @ 12:50", requested_dropoff_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, United States", requested_dropoff_longtiude: 41.72907, requested_dropoff_latitude: -71.17287 }
    ]
  },
  {
    id: 2, file_name: 'last minute.csv',
    orders: [/*      {	job_number: 15, driver_id: 0, contact_name: "Polar Seltzer", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/09/2021 @ 12:49", requested_dropoff_location: "49 Randall Ave, Somerset, MA 02726, United States", requested_dropoff_longtiude: 41.73508, requested_dropoff_latitude: -71.16724 }
	      */]
  },
  {
    id: 3, file_name: 'scheduled.csv',
    orders: [/*
      {	job_number: 21, driver_id: 0, contact_name: "George Barber", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/05/2021 @ 12:55", requested_dropoff_location: "23 Charlotte St, Somerset, MA 02726, United States", requested_dropoff_longtiude: 41.7493, requested_dropoff_latitude: -71.14083 }*/ ]
  }
];