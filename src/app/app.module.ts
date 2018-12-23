import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from "@ionic-native/camera";
import { HttpModule } from "@angular/http";
//import { AngularFireModule } from 'angularfire2';
import { AngularFireDatabaseModule } from 'angularfire2/database';
import { AngularFireAuthModule } from 'angularfire2/auth';

import { File } from '@ionic-native/file';
import { IonicStorageModule } from "@ionic/storage";
//import { environment } from "../environment";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { WelcomePage } from '../pages/welcome/welcome';
import { IntroPage } from '../pages/intro/intro';
import { ImagesPage } from "../pages/images/images";
import { Images2Page } from "../pages/images2/images2";
import { Images3Page } from "../pages/images3/images3";
import { CategoriesPage } from "../pages/categories/categories";
import { LeaderboardPage } from "../pages/leaderboard/leaderboard";
import { LoginPage } from "../pages/login/login";
import { RegisterPage } from "../pages/register/register";

import { InAppBrowser } from "@ionic-native/in-app-browser";
import { AuthService } from "../providers/auth-service/auth-service";
import { GoogleCloudVisionServiceProvider } from '../providers/google-cloud-vision-service/google-cloud-vision-service';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    WelcomePage,
    IntroPage,
    ImagesPage,
    Images2Page,
    Images3Page,
    CategoriesPage,
    LeaderboardPage,
    LoginPage,
    RegisterPage
  ],
  imports: [
    BrowserModule,
    HttpModule,
    IonicModule.forRoot(MyApp),
    //AngularFireAuthModule.initializeApp(environment.firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    WelcomePage,
    IntroPage,
    ImagesPage,
    Images2Page,
    Images3Page,
    CategoriesPage,
    LeaderboardPage,
    LoginPage,
    RegisterPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    InAppBrowser,
    Camera,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    File,
    AuthService,
    GoogleCloudVisionServiceProvider
  ]
})
export class AppModule {}
