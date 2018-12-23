import { Component } from '@angular/core';
import {AlertController, ToastController} from "ionic-angular";
//import { NgForm } from '@angular/forms';
//import { ModalController, NavController } from 'ionic-angular';

@Component({
  templateUrl: 'images.html',
})
export class ImagesPage {

  //constructor(private modalCtrl: ModalController, private navCtrl: NavController) {}


  protected handler = this.setSubmit1;
  protected handler2 = this.setSubmit2;
  protected handler3 = this.setSubmit3;
  protected handler4 = this.setSubmit4;
  protected handler5 = this.setSubmit5;
  protected handler6 = this.setSubmit6;
  protected handler7 = this.setSubmit7;
  protected handler8 = this.setSubmit8;
  protected handler9 = this.setSubmit9;
  protected handler10 = this.setSubmit10;



  protected text1= 'Submit';
  protected text2= 'Submit';
  protected text3= 'Submit';
  protected text4='Submit';
  protected text5='Submit';
  protected text6='Submit';
  protected text7='Submit';
  protected text8='Submit';
  protected text9='Submit';
  protected text10='Submit';
  protected color1= 'secondary';
  protected color2= 'secondary';
  protected color3= 'secondary';
  protected color4= 'secondary';
  protected color5= 'secondary';
  protected color6= 'secondary';
  protected color7= 'secondary';
  protected color8= 'secondary';
  protected color9= 'secondary';
  protected color10= 'secondary';

  protected disabled1= false;
  protected disabled2= false;
  protected disabled3= false;
  protected disabled4= false;
  protected disabled5= false;
  protected disabled6= false;
  protected disabled7= false;
  protected disabled8= false;
  protected disabled9= false;
  protected disabled10= false;


  //constructor(private modalCtrl: ModalController,
  // private navCtrl: NavController) {}

  constructor(private toastCtrl: ToastController, private alertCtrl: AlertController) {

  }


  presentToast() {
    let toast = this.toastCtrl.create({
      message: 'HINT: Look closer!',
      duration: 4000,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }

  presentToast2() {
    let toast = this.toastCtrl.create({
      message: 'Hmmm, looks like it. Think to submit.',
      duration: 2500,
      position: 'middle'
    });

    toast.onDidDismiss(() => {
      console.log('Dismissed toast');
    });

    toast.present();
  }



  presentAlert() {
    let alert = this.alertCtrl.create({
      title: 'Your answer submitted.',
      subTitle: 'We are working on your response to gather your points.',
      buttons: ['OK']
    });
    alert.present();
  }

  setSubmit1(){
    this.text1 = 'Submitted';
    this.color1 = '#488aff';
    this.disabled1 = true
  }setSubmit2(){
    this.text2 = 'Submitted';
    this.color2 = '#488aff';
    this.disabled2 = true
  }setSubmit3(){
    this.text3 = 'Submitted';
    this.color3 = '#488aff';
    this.disabled3 = true
  }setSubmit4(){
    this.text4 = 'Submitted';
    this.color4 = '#488aff';
    this.disabled4 = true
  }setSubmit5(){
    this.text5 = 'Submitted';
    this.color5 = '#488aff';
    this.disabled5 = true
  }setSubmit6(){
    this.text6 = 'Submitted';
    this.color6 = '#488aff';
    this.disabled6 = true
  }setSubmit7(){
    this.text7 = 'Submitted';
    this.color7 = '#488aff';
    this.disabled7 = true
  }setSubmit8(){
    this.text8 = 'Submitted';
    this.color8 = '#488aff';
    this.disabled8 = true
  }setSubmit9(){
    this.text9 = 'Submitted';
    this.color9 = '#488aff';
    this.disabled9 = true
  }setSubmit10(){
    this.text10 = 'Submitted';
    this.color10 = '#488aff';
    this.disabled10 = true
  }


 /* onSubmit(form: NgForm) {
    let submit = {
      title: form.value.title,
      body: form.value.body,
    };
  }*/
}
