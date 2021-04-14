import { Component, OnInit } from '@angular/core';
import { Manifest } from '../manifest';

@Component({
  selector: 'app-manifests',
  templateUrl: './manifests.component.html',
  styleUrls: ['./manifests.component.css']
})
export class ManifestsComponent implements OnInit {

  manifest: Manifest = {
    id: 1,
    name: '020404142021'
  };
  
  constructor() { }

  ngOnInit(): void {
  }

}
