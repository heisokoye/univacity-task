import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { InstitutesViewComponent } from '../institutes-view/institutes-view.component';

/**
 * Full-screen filter modal used by the search page.
 * Handles tuition range and navigation into the institute picker view.
 */
@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, InstitutesViewComponent]
})
export class FilterModalComponent {
  // Internal view switch inside the modal.
  currentView: 'main' | 'institutes' = 'main';

  // Numeric values used by ion-range (in thousands).
  tuitionRange = { lower: 50, upper: 120 };
  
  // Formatted text values shown in min/max inputs.
  minFeeStr = '$50,000';
  maxFeeStr = '$120,000';

  constructor(private modalCtrl: ModalController) {}

  /**
   * Close modal and return to the search screen.
   */
  close() {
    this.modalCtrl.dismiss();
  }

  /**
   * Sync text fields when slider values change.
   */
  updateInputsFromRange() {
    this.minFeeStr = `$${this.tuitionRange.lower},000`;
    this.maxFeeStr = `$${this.tuitionRange.upper},000`;
  }

  /**
   * Parse typed fee inputs and push values back to the slider model.
   */
  updateRangeFromInput() {
    // Keep digits only so values like "$50,000" can be parsed safely.
    const minStr = this.minFeeStr.replace(/[^0-9]/g, '');
    const maxStr = this.maxFeeStr.replace(/[^0-9]/g, '');

    // Inputs are currency, slider uses "thousands" units.
    const minVal = parseInt(minStr, 10) / 1000 || 0;
    const maxVal = parseInt(maxStr, 10) / 1000 || 200;

    this.tuitionRange = { lower: minVal, upper: maxVal };
  }

  /**
   * Reset fee controls to full range.
   */
  clearAll() {
    this.tuitionRange = { lower: 0, upper: 200 };
    // Keep text inputs aligned with reset slider values.
    this.updateInputsFromRange();
  }
}