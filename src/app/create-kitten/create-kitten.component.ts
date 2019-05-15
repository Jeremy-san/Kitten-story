import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';
import { Kittens } from '../kittens';

@Component({
  selector: 'app-create-kitten',
  templateUrl: './create-kitten.component.html',
  styleUrls: ['./create-kitten.component.scss']
})


export class CreateKittenComponent implements OnInit {

kittens = {
  name : '',
  race : '',
  date : ''
};

createdKitten: Kittens;





  constructor(private catService: CatService) {
   }

  ngOnInit() {
  }
 /* create new object with class Kitten */

  createKitten() {
    this.createdKitten = new Kittens(this.kittens.name, this.kittens.date, this.kittens.race);
    this.catService.addKittenToList(this.createdKitten);

    console.log(this.kittens);
    this.kittens.name = '';
    this.kittens.race = '';
    this.kittens.date = '';


  }

}
