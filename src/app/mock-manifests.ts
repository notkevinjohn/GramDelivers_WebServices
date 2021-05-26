import { Manifest } from './manifest';

export const MANIFESTS: Manifest[] = [
  {
    id: 1, file_name: 'm1249.csv',
    orders: [
      {	job_number: 17, driver_id: 7427, contact_name: "Ed Dow", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/11/2021 @ 12:50", requested_dropoff_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, United States", requested_dropoff_longtiude: 41.72907, requested_dropoff_latitude: -71.17287, assigned_route: "red" },
      { job_number: 14, driver_id: 7427, contact_name: "Town Of Somerset", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/11/2021 @ 1:01", requested_dropoff_location: "140 Wood St, Somerset, MA 02726, United States", requested_dropoff_longtiude: 41.7513, requested_dropoff_latitude: -71.14162, assigned_route: "red" },
      { job_number: 16, driver_id: 7427, contact_name: "Steve Bowman", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/11/2021 @ 1:01", requested_dropoff_location: "33 Wales Ave, Avon, MA 02322, United States", requested_dropoff_longtiude: 42.14068, requested_dropoff_latitude: -71.05716, assigned_route: "red" }
      ]
  },
  {
    id: 2, file_name: 'last minute.csv',
    orders:
    [
      {	job_number: 15, driver_id: 0, contact_name: "Polar Seltzer", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/09/2021 @ 12:49", requested_dropoff_location: "49 Randall Ave, Somerset, MA 02726, United States", requested_dropoff_longtiude: 41.73508, requested_dropoff_latitude: -71.16724, assigned_route: "red" },
      { job_number: 15, driver_id: 0, contact_name: "Polar Seltzer", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/09/2021 @ 12:49", requested_dropoff_location: "49 Randall Ave, Somerset, MA 02726, United States", requested_dropoff_longtiude: 41.73508, requested_dropoff_latitude: -71.16724, assigned_route: "red" },
      { job_number: 15, driver_id: 0, contact_name: "Polar Seltzer", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/09/2021 @ 12:49", requested_dropoff_location: "49 Randall Ave, Somerset, MA 02726, United States", requested_dropoff_longtiude: 41.73508, requested_dropoff_latitude: -71.16724, assigned_route: "red" }
    ]
  },
  {
    id: 3, file_name: 'scheduled.csv',
    orders:
    [
      {	job_number: 21, driver_id: 0, contact_name: "George Barber", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/05/2021 @ 12:55", requested_dropoff_location: "23 Charlotte St, Somerset, MA 02726, United States", requested_dropoff_longtiude: 41.7493, requested_dropoff_latitude: -71.14083, assigned_route: "blue" },
      { job_number: 20, driver_id: 0, contact_name: "Johnny Wishbone", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/05/2021 @ 12:54", requested_dropoff_location: "468 Washington Ave, Somerset, MA 02726, United States", requested_dropoff_longtiude: 41.75127, requested_dropoff_latitude: -71.14601, assigned_route: "blue" },
  { job_number: 19, driver_id: 0, contact_name: "Warren Kettle", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/05/2021 @ 12:53", requested_dropoff_location: "1451 Read St, Somerset, MA 02726, United States", requested_dropoff_longtiude: 41.73873, requested_dropoff_latitude: -71.17847, assigned_route: "blue" },
      { job_number: 18, driver_id: 0, contact_name: "Gary Fosgobbit", requested_pickup_location: "Solar Therapeutics Dispensary, 1400 Brayton Point Rd, Somerset, MA 02725, USA", requested_pickup_longtiude: -71.17287, requested_pickup_latitude: 41.72907, pickup_datetime: "03/05/2021 @ 12:51", requested_dropoff_location: "127 Sheraton Ave, Somerset, MA 02725, United States", requested_dropoff_longtiude: 41.72889, requested_dropoff_latitude: -71.18549, assigned_route: "blue" }
    ]
  }
];