import { Component, OnInit, ViewChild } from '@angular/core';
import { Manifest } from '../manifest';
import { Order } from '../order';
import { MatAccordion } from '@angular/material/expansion';
import { MANIFESTS } from '../mock-manifests';
import { MarkerService } from '../marker.service';

@Component({
  selector: 'app-manifests',
  templateUrl: './manifests.component.html',
  styleUrls: ['./manifests.component.css']
})
export class ManifestsComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  manifests= MANIFESTS;

  onSelect(manifest: Manifest): void {
    if (manifest.added != true)
      this.markerService.addOrders(manifest.orders);
    manifest.added = true;
  }
  
  constructor(
      private markerService: MarkerService
  ) {}

  ngOnInit(): void {
  }

}
