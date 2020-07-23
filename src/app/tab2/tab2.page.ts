import {Component, OnInit} from '@angular/core';
import {Geolocation} from '@ionic-native/geolocation/ngx';
import {ToastController} from '@ionic/angular';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page implements OnInit{

  title = 'Près de moi';
  latitude?;
  longitude?;
  constructor(private geolocation: Geolocation,
              public toastController: ToastController) {}

  ngOnInit(): void {
    this.getWeatherLocation();
  }

  async presentToast(msg, color) {
    const toast = await this.toastController.create({
      message: msg,
      color: color,
      duration: 2000
    });
    toast.present();
  }

  getWeatherLocation() {

    this.geolocation.getCurrentPosition({enableHighAccuracy: true}).then(resp => {
      this.latitude = resp.coords.latitude;
      this.longitude = resp.coords.longitude;
    }).catch((error) => {
      console.log('Error getting location', error);
      this.presentToast(error, 'danger');
    });
  }
}
