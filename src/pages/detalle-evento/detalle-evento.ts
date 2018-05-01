import { Eventos } from './../../app/eventos';
import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';

/**
 * Generated class for the DetalleEventoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-detalle-evento',
	templateUrl: 'detalle-evento.html'
})
export class DetalleEventoPage {
	evento: Eventos;
	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		public alertCtrl: AlertController
	) {
		this.evento = this.navParams.get('eventoDetalle');
		console.log(this.evento);
	}

	/**
	 * Alerta para agregar invitado
	 */
	// presentPrompt() {
	// 	let alert = this.alertCtrl.create({
	// 		title: 'Añadir invitado',
	// 		inputs: [
	// 			{
	// 				name: 'username',
	// 				placeholder: 'Username'
	// 			},
	// 			{
	// 				name: 'password',
	// 				placeholder: 'Password',
	// 				type: 'password'
	// 			}
	// 		],
	// 		buttons: [
	// 			{
	// 				text: 'Cancel',
	// 				role: 'cancel',
	// 				handler: (data) => {
	// 					console.log('Cancel clicked');
	// 				}
	// 			},
	// 			{
	// 				text: 'Login',
	// 				handler: (data) => {
	// 					// if (User.isValid(data.username, data.password)) {
	// 					// 	// logged in!
	// 					// } else {
	// 					// 	// invalid login
	// 					// 	return false;
	// 					// }
	// 					console.log(name);
	// 				}
	// 			}
	// 		]
	// 	});
	// 	alert.present();
	// 	console.log(name);
	// }

	agregarInvitado() {
		this.navCtrl.push('InvitadoPage');
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad DetalleEventoPage');
	}
}
