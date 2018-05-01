import { Eventos } from './../../app/eventos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the ListaEnventosPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-lista-enventos',
	templateUrl: 'lista-enventos.html'
})
export class ListaEnventosPage {
	// evento: Eventos[];
	nombre: string;
	lugar: string;
	direccion: string;
	listaEventos: Observable<Eventos[]>;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private db: AngularFirestore,
		public alertCtrl: AlertController
	) {
		this.listaEventos = this.getEvento();
	}

	getEvento(): Observable<Eventos[]> {
		return this.db.collection<Eventos>('eventos').valueChanges();
	}

	crearEvento() {
		const id = this.db.createId();
		this.db.collection('eventos').doc(id).set({
			id,
			nombre: this.nombre,
			lugar: this.lugar,
			direccion: this.direccion
		});
		console.log(this.nombre);
		console.log(this.listaEventos);
	}

	goCrearEvento() {
		this.navCtrl.push('EventosPage');
	}

	showAlert() {
		let alert = this.alertCtrl.create({
			title: 'New Friend!',
			subTitle: 'Your friend, Obi wan Kenobi, just accepted your friend request!',
			buttons: [ 'OK' ]
		});
		alert.present();
	}

	detalleEvento(eventoDetalle: Eventos): void {
		console.log(eventoDetalle);

		this.navCtrl.push('DetalleEventoPage', { eventoDetalle: eventoDetalle });
	}

	/**
	 * Alerta para agregar invitado
	 
	presentPrompt() {
		let alert = this.alertCtrl.create({
			title: 'Añadir invitado',
			inputs: [
				{
					name: 'username',
					placeholder: 'Username'
				},
				{
					name: 'password',
					placeholder: 'Password',
					type: 'password'
				}
			],
			buttons: [
				{
					text: 'Cancel',
					role: 'cancel',
					handler: (data) => {
						console.log('Cancel clicked');
					}
				},
				{
					text: 'Login',
					handler: (data) => {
						if (User.isValid(data.username, data.password)) {
							// logged in!
						} else {
							// invalid login
							return false;
						}
					}
				}
			]
		});
		alert.present();
	}
	*/

	ionViewDidLoad() {
		console.log('ionViewDidLoad ListaEnventosPage');
	}
}
