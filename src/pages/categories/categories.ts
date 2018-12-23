import { Component } from '@angular/core';
import {NavController} from 'ionic-angular';
import {ImagesPage} from "../images/images";
import {Images2Page} from "../images2/images2";
import {Images3Page} from "../images3/images3";


@Component({
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor (public navCtrl: NavController){}

  iMagesPage(){
    this.navCtrl.push(ImagesPage);
  }

  iMages2Page(){
    this.navCtrl.push(Images2Page);
  }

  iMages3Page(){
    this.navCtrl.push(Images3Page);
  }


}
