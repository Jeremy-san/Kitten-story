import { Component, OnInit } from '@angular/core';
import { CatService } from '../cat.service';

@Component({
  selector: 'app-list-kitten',
  templateUrl: './list-kitten.component.html',
  styleUrls: ['./list-kitten.component.scss']
})
export class ListKittenComponent implements OnInit {
// add Kitten
  kitten;
  chatons = [];
  constructor(private catService: CatService) { }

  addKitten() {
    this.kitten = this.catService;
    this.kitten = this.chatons.push(this.chatons);
  }
  ngOnInit() {

  }

}
