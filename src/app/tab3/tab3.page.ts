import {Component, ViewChild} from '@angular/core';
import {IonNav} from '@ionic/angular';

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss']
})
export class Tab3Page {
  title = 'Chercher';
  @ViewChild(IonNav, {static: true}) nav: IonNav;
  constructor() {}

}
