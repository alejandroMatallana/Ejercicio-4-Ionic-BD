import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
	selector: 'page-home',
	templateUrl: 'home.html'
})
export class HomePage {
	correo: string;
	clave: string;
	authState: any = null;

	constructor(
		public navCtrl: NavController,
		private db: AngularFirestore,
		private afAuth: AngularFireAuth
	) {}

	/**
	 * Metodo para registrar un usuario nuevo
	 * autentica el usuario con correo y clave
	 */
	registrar() {
		this.afAuth.auth.createUserWithEmailAndPassword(this.correo, this.clave).then((newUser) => {
			this.db
				.collection('personas')
				.doc(newUser.uid)
				.set({
					id: newUser.uid,
					correo: this.correo,
					password: this.clave
				})
				.then(() => {
					this.navCtrl.push('ListaEnventosPage');
				})
				.catch((error) => console.log);
		});
	}

	emailLogin() {
		return this.afAuth.auth
			.signInWithEmailAndPassword(this.correo, this.clave)
			.then((user) => {
				this.afAuth = user;
			})
			.catch((error) => console.log(error));
	}
}
