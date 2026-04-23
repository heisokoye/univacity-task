import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { addIcons } from 'ionicons';

// Import all icons here to ensure they compile properly for our standalone component layout
import {
  heart, heartOutline, shareSocialOutline, languageOutline,
  calendarOutline, timeOutline, ribbonOutline, flagOutline,
  checkmarkCircle, closeOutline, optionsOutline,
  reorderTwoOutline, chevronDownOutline, arrowBackOutline
} from 'ionicons/icons';

import { Data } from '../../services/data';
import { Program } from '../../models/program';
import { FilterModalComponent } from '../../components/filter-modal/filter-modal.component';

@Component({
  selector: 'app-search',
  templateUrl: './search.page.html',
  styleUrls: ['./search.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, RouterLink]
})
export class SearchPage implements OnInit {

  // We append a custom 'liked' boolean onto the core Program model
  // so we can track the toggle state of the heart icon purely in the UI
  programs: (Program & { liked?: boolean })[] = [];

  // Tracks the hardcoded categories displayed horizontally beneath the search bar
  activeFilters: string[] = ['Design', 'Design', 'Programming', 'Programming'];

  // Preserves any advanced filters users apply when they close out of the filter modal
  filterState: any = null;

  constructor(
    private dataService: Data,
    private modalCtrl: ModalController,
    private location: Location
  ) {
    // We explicitly register the imported icons with Ionic so they load successfully
    addIcons({
      heart, heartOutline, shareSocialOutline, languageOutline,
      calendarOutline, timeOutline, ribbonOutline, flagOutline,
      checkmarkCircle, closeOutline, optionsOutline,
      reorderTwoOutline, chevronDownOutline, arrowBackOutline
    });
  }

  ngOnInit() {
    // When the component boots up, we pull the initial static dataset 
    // and initialize every program's 'liked' status to false.
    this.programs = this.dataService.getPrograms().map(p => ({
      ...p,
      liked: false
    }));
  }

  /**
   * Helper function to show a badge on the filter icon, letting the user know
   * how many active constraints they apply.
   */
  get activeFilterCount() {
    return this.activeFilters.length;
  }

  /**
   * Called when a user clicks the tiny 'x' inside an active filter chip.
   * Finds the exact filter string and slices it out of the array securely.
   */
  removeFilter(filter: string) {
    const index = this.activeFilters.indexOf(filter);
    if (index > -1) {
      this.activeFilters.splice(index, 1);
    }
  }

  /**
   * Flips the liked state back and forth, turning the heart outline solid red and vice versa.
   */
  toggleLike(program: any) {
    program.liked = !program.liked;
  }

  /**
   * Invokes the native OS share dialog (e.g. iOS share sheet or Android share intent).
   * Notice we silently catch errors because the user dismissing the share sheet natively throws an error we can safely ignore.
   */
  async share(program: Program) {
    if (navigator.share) {
      await navigator.share({
        title: program.title,
        text: `${program.university}`,
        url: window.location.href // Fallback URL points back to our web app
      }).catch(() => {});
    }
  }

  /**
   * Opens up our complex, full-screen Filter Modal allowing users to manage constraints like fee ranges or location.
   */
  async openFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterModalComponent,
      // Setting a custom CSS class lets us override Ionic's shadow DOM styles to match the desired mockups
      cssClass: 'full-screen-modal',
      // Permitting user to dismiss by tapping the gray area
      backdropDismiss: true
    });

    await modal.present();

    // Block the thread and wait for the user to close/dismiss the modal
    const { data } = await modal.onDidDismiss();

    if (data) {
      console.log('Filter data received:', data);
      
      // Store state locally so we don't forget if the modal is opened repetitively.
      this.filterState = data;

      // TODO: Perform actual sorting/filtering on the `this.programs` array based on `this.filterState`
    }
  }

  /**
   * Stub meant to eventually expose a dropdown sorting system (e.g., Price High-to-Low)
   */
  openSort() {
    console.log('Sort clicked');
  }

  /**
   * Smoothly animates the page backwards using Angular's native Location construct.
   */
  goBack() {
    this.location.back();
  }
}