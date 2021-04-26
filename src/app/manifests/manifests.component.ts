import { Component, OnInit, ViewChild } from '@angular/core';
import { Manifest } from '../manifest';
import { Order } from '../order';
import { MatAccordion } from '@angular/material/expansion';

@Component({
  selector: 'app-manifests',
  templateUrl: './manifests.component.html',
  styleUrls: ['./manifests.component.css']
})
export class ManifestsComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  manifest: Manifest = { id: 1, name: '3' };
  
  constructor() { }

  ngOnInit(): void {
  }

}
