import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline,
  chevronDownOutline,
  reorderTwoOutline,
  optionsOutline,
  closeOutline,
  checkmarkCircle,
  flagOutline,
  ribbonOutline,
  timeOutline,
  calendarOutline,
  languageOutline,
  shareSocialOutline,
  heartOutline
} from 'ionicons/icons';

addIcons({
  arrowBackOutline,
  chevronDownOutline,
  reorderTwoOutline,
  optionsOutline,
  closeOutline,
  checkmarkCircle,
  flagOutline,
  ribbonOutline,
  timeOutline,
  calendarOutline,
  languageOutline,
  shareSocialOutline,
  heartOutline
});
import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
  ],
});
