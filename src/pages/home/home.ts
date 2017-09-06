import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {Camera, CameraOptions} from "@ionic-native/camera";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  public imagemBase64: string;
  private _opcoes: CameraOptions = {
    quality: 100,
    mediaType: this._camera.MediaType.PICTURE,
    destinationType: this._camera.DestinationType.DATA_URL,
    encodingType: this._camera.EncodingType.JPEG,
    correctOrientation: true
  };

  constructor(public navCtrl: NavController,
              private _camera: Camera) {

  }

  inicializaCamera() {
    this._camera.getPicture(this._opcoes).then(imagem => {
      this.imagemBase64 = "data:image/jpeg;base64," + imagem;
    }).catch(err => {
      console.log(err);
      this.imagemBase64 = "";
    })
  }

}
