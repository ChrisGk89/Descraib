import { Component } from '@angular/core';
import {NavController} from "ionic-angular";
import {IntroPage} from "../intro/intro";


@Component({
  templateUrl: 'welcome.html',
})
export class WelcomePage {

  constructor (public navCtrl: NavController){}

  iNtroPage(){
    this.navCtrl.setRoot(IntroPage);
  }


  slides = [
    {
      title: "Welcome to DesCra(i)b!",
      description: "<b>DesCra(i)b</b> showcases a number of photos you need to classify and describe. That's the reason of the name DesCra(i)b. Smart? You decide.",
      image: "assets/imgs/giant-crab.png",
    },
    {
      title: "What is DesCra(i)b?",
      description: "<b>Photo Description</b> The eye-catching detail crab want to know what you see in your smartphone screen. You can additionally upload your own photos and describe them. As a matter of fact you could gain points and earn beatiful rewards.",
      image: "assets/imgs/phone.png",
    },
    {
      title: "DesCra(i)b wizard will reward you",
      description: "<b>DesCra(i)b Wizard.</b> After submiting your answers our system will review your photos and reward your points. So the more you play the more you win.",
      image: "assets/imgs/ica-slidebox-img-3.png",
    }
  ];

}
