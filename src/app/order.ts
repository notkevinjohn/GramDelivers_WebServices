export interface Order {
  job_number: number;
  driver_id?: number;
  contact_name: string;
  requested_pickup_location: string;
  requested_pickup_longtiude: number;
  requested_pickup_latitude: number;
  pickup_datetime: string;
  requested_dropoff_location: string;
  requested_dropoff_longtiude: number;
  requested_dropoff_latitude: number;
  assigned_route: string;
}