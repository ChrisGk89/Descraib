import { Component } from '@angular/core';
import {AlertController, NavController} from 'ionic-angular';
import {ImagesPage} from "../images/images";
import {Images2Page} from "../images2/images2";
import {Images3Page} from "../images3/images3";
import {LoginPage} from "../login/login";


@Component({
  templateUrl: 'categories.html',
})
export class CategoriesPage {

  constructor (public navCtrl: NavController, private alertCtrl: AlertController){}

  iMagesPage(){
    this.navCtrl.push(ImagesPage);
  }

  iMages2Page(){
    this.navCtrl.push(Images2Page);
  }

  iMages3Page(){
    this.navCtrl.push(Images3Page);
  }

  public logout() {

    this.navCtrl.setRoot(LoginPage);
  }

  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Your are logged out.',
      buttons: ['OK'],
    });
    alert.present();
  }

}
