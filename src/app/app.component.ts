import { Component } from '@angular/core';
import { IonApp, IonRouterOutlet } from '@ionic/angular/standalone';

/**
 * Root Application Component
 * 
 * This is the very top level of our application hierarchy. It orchestrates the rendering of our App 
 * by wrapping everything inside standard Ionic layout tags (<ion-app> and <ion-router-outlet>).
 * Since we are relying thoroughly on Angular Standalone components, we import Ionic directly here. 
 */
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  // In place of an NgModule, we array the needed dependencies immediately in the component decorators
  imports: [IonApp, IonRouterOutlet],
})
export class AppComponent {
  constructor() {}
}
