import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, AlertController } from 'ionic-angular';
import { AngularFirestore } from 'angularfire2/firestore';
import { AngularFireStorage } from 'angularfire2/storage';
import { Camera, CameraOptions } from '@ionic-native/camera';
import { FirebaseApp } from 'angularfire2';
import firebase from 'firebase';

/**
 * Generated class for the InvitadoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
	selector: 'page-invitado',
	templateUrl: 'invitado.html'
})
export class InvitadoPage {
	nombre: string;
	imagen: string = '';
	file: File;

	constructor(
		public navCtrl: NavController,
		public navParams: NavParams,
		private db: AngularFirestore,
		private storage: AngularFireStorage,
		public cameraPlugin: Camera,
		public fireba: FirebaseApp,
		public alertCtrl: AlertController
	) {}

	/**
	 * Metodo que se encarga de abrir la camara para tomar la foto
	 */
	takePicture(): void {
		const options: CameraOptions = {
			quality: 100,
			targetHeight: 1000,
			targetWidth: 1000,
			destinationType: this.cameraPlugin.DestinationType.DATA_URL,
			encodingType: this.cameraPlugin.EncodingType.JPEG,
			mediaType: this.cameraPlugin.MediaType.PICTURE,
			saveToPhotoAlbum: true,
			sourceType: 1
		};

		this.cameraPlugin.getPicture(options).then(
			(imageData) => {
				// imageData is either a base64 encoded string or a file URI
				// If it's base64:
				this.imagen = 'data:image/jpeg;base64,' + imageData;
			},
			(err) => {
				// Handle error
			}
		);
	}

	/**
	 * Metod que se encarga de crear un invitado y de subir la imagen al storage
	 */
	crearInvitado() {
		if (!this.nombre) {
			return;
		}
		let storageRef = firebase.storage().ref();

		const filename = this.nombre;

		const imageRef = storageRef.child(`${filename}.jpg`);
		imageRef
			.putString(this.imagen, firebase.storage.StringFormat.DATA_URL)
			.then((snapshot) => {});
		const id = this.db.createId();
		this.db.collection('invitados').doc(id).set({
			id,
			nombre: this.nombre,
			imagen: this.imagen
		});

		this.showAlert();
	}

	/**
	 * Metodo que lanza una alerta sobre la respuesta del mensaje
	 */
	showAlert() {
		let alert = this.alertCtrl.create({
			title: 'Exitoso',
			subTitle: 'El invitado ha sido creado con exito',
			buttons: [ 'Continuar' ]
		});
		alert.present();
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad InvitadoPage');
	}
}
