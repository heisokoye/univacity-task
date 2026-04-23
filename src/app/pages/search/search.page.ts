import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule, ModalController } from '@ionic/angular';
import { RouterLink } from '@angular/router';
import { Location } from '@angular/common';
import { addIcons } from 'ionicons';

// Register only the icons used in this page template.
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
  // Local UI-only flag (`liked`) sits on top of Program data.
  programs: (Program & { liked?: boolean })[] = [];

  // Visible filter chips shown under the header action bar.
  activeFilters: string[] = ['Design', 'Design', 'Programming', 'Programming'];

  // Stores modal output so filter selections can persist.
  filterState: any = null;

  constructor(
    private dataService: Data,
    private modalCtrl: ModalController,
    private location: Location
  ) {
    // Standalone components need explicit icon registration.
    addIcons({
      heart, heartOutline, shareSocialOutline, languageOutline,
      calendarOutline, timeOutline, ribbonOutline, flagOutline,
      checkmarkCircle, closeOutline, optionsOutline,
      reorderTwoOutline, chevronDownOutline, arrowBackOutline
    });
  }

  ngOnInit() {
    // Prime the card list and initialize local "liked" state.
    this.programs = this.dataService.getPrograms().map(p => ({
      ...p,
      liked: false
    }));
  }

  /**
   * Number displayed inside the red filter badge.
   */
  get activeFilterCount() {
    return this.activeFilters.length;
  }

  /**
   * Removes one visible filter chip.
   */
  removeFilter(filter: string) {
    const index = this.activeFilters.indexOf(filter);
    if (index > -1) {
      this.activeFilters.splice(index, 1);
    }
  }

  /**
   * Toggles the heart state on a card.
   */
  toggleLike(program: Program & { liked?: boolean }) {
    program.liked = !program.liked;
  }

  /**
   * Opens the native share sheet if supported by the browser/device.
   */
  async share(program: Program) {
    if (navigator.share) {
      await navigator.share({
        title: program.title,
        text: `${program.university}`,
        url: window.location.href
      }).catch(() => {});
    }
  }

  /**
   * Opens the full-screen filter modal.
   */
  async openFilter() {
    const modal = await this.modalCtrl.create({
      component: FilterModalComponent,
      cssClass: 'full-screen-modal',
      backdropDismiss: true
    });

    await modal.present();

    // Wait for modal close and capture returned payload.
    const { data } = await modal.onDidDismiss();

    if (data) {
      console.log('Filter data received:', data);
      
      this.filterState = data;

      // TODO: Apply real filtering/sorting once backend/query model is defined.
    }
  }

  /**
   * Placeholder for sort action.
   */
  openSort() {
    console.log('Sort clicked');
  }

  /**
   * Navigates to previous history entry.
   */
  goBack() {
    this.location.back();
  }
}