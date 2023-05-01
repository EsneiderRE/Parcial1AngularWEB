import { Component, OnInit } from '@angular/core';
import { Cafe } from './cafe';
import { CafeService } from './cafe.service';

@Component({
  selector: 'app-cafe',
  templateUrl: './cafe.component.html',
  styleUrls: ['./cafe.component.css']
})
export class CafeComponent implements OnInit {

  cafes: Array<Cafe> = [];
  totalCafesOrigen:number=0;
  totalCafesBlend:number=0;
  constructor(private cafeService: CafeService) { }

  getCafes() {
    this.cafeService.getCafes().subscribe(cafes => {
      this.cafes = cafes;

      this.cafes.forEach(element => {
        console.log(element)
        if(element.tipo=='Café de Origen'){
          this.totalCafesOrigen++;
        }
        if(element.tipo=='Blend'){
          this.totalCafesBlend++;
        }
    });
    });
  }

  ngOnInit() {
    this.getCafes();
  }

}
