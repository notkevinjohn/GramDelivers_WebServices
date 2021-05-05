import { Component, OnInit, ViewChild } from '@angular/core';
import { Manifest } from '../manifest';
import { Order } from '../order';
import { MatAccordion } from '@angular/material/expansion';
import { MANIFESTS } from '../mock-manifests';

@Component({
  selector: 'app-manifests',
  templateUrl: './manifests.component.html',
  styleUrls: ['./manifests.component.css']
})
export class ManifestsComponent implements OnInit {

  @ViewChild(MatAccordion) accordion: MatAccordion;

  manifests= MANIFESTS;
  
  constructor() { }

  ngOnInit(): void {
  }

}
