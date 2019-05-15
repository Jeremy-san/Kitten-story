import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CatService {


   /* This array home the new object "Kitten" created */
  kitten = [];

    /* This array home the object "Kitten" adopted */
  cat = [];


  constructor() { }

  addKittenToList(newkitten) {
    this.kitten.push(newkitten);
    console.log(this.kitten);

  }
  /* This method is called in list-kitten-component. It push the object "Kitten adopted" in the array*/
  getKitten(myKitten) {
    this.cat.push(myKitten);
}

}
