import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';

/**
 * Generated class for the EventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-eventos',
	templateUrl: 'eventos.html'
})
export class EventosPage {
	nombre: string;
	lugar: string;
	direccion: string;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private db: AngularFirestore,
		public alertCtrl: AlertController
	) {}

	ionViewDidLoad() {
		console.log('ionViewDidLoad EventosPage');
	}

	/**
	 * Metodo encargado de la creacion de un evento
	 */
	crearEvento() {
		const id = this.db.createId();
		this.db.collection('eventos').doc(id).set({
			id,
			nombre: this.nombre,
			lugar: this.lugar,
			direccion: this.direccion
		});
		this.showAlert();
	}

	/**
	 * Metodo que lanza una alerta sobre la respuesta del mensaje
	 */
	showAlert() {
		let alert = this.alertCtrl.create({
			title: 'Exitoso',
			subTitle: 'El evento ha sido creado con exito',
			buttons: [ 'Continuar' ]
		});
		alert.present();
	}
}
