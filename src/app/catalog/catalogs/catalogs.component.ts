import { Component, OnInit } from '@angular/core';
import {CatalogService} from '../../shared/catalog.service'
import {Details} from '../../shared/details'
import 'rxjs';

@Component({
  selector: 'app-catalogs',
  templateUrl: './catalogs.component.html',
  styleUrls: ['./catalogs.component.css'],
  providers:[CatalogService]
})
export class CatalogsComponent implements OnInit {
  newHero:Details;
  constructor(private appService:CatalogService) { }

  ngOnInit() {
    this.appService.getdetails()
    .subscribe(data=> {this.newHero = data;
    });
  }
}
