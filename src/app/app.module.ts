import { AngularFireAuth, AngularFireAuthModule } from 'angularfire2/auth';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { Camera } from '@ionic-native/camera';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';

export const fireBas3214512345678901 = {
	apiKey: 'AIzaSyChTIz_vycPxX1udEQbRarQois7iG7oOH0',
	authDomain: 'proyectoionic-3e165.firebaseapp.com',
	databaseURL: 'https://proyectoionic-3e165.firebaseio.com',
	projectId: 'proyectoionic-3e165',
	storageBucket: 'proyectoionic-3e165.appspot.com',
	messagingSenderId: '340186415592'
};

@NgModule({
	declarations: [ MyApp, HomePage ],
	imports: [
		BrowserModule,
		IonicModule.forRoot(MyApp),
		AngularFireModule.initializeApp(fireBas3214512345678901),
		AngularFirestoreModule,
		AngularFireAuthModule,
		AngularFireStorageModule
	],
	bootstrap: [ IonicApp ],
	entryComponents: [ MyApp, HomePage ],
	providers: [
		StatusBar,
		SplashScreen,
		Camera,
		{ provide: ErrorHandler, useClass: IonicErrorHandler }
	]
})
export class AppModule {}
