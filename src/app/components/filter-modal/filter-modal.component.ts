import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { IonicModule, ModalController } from '@ionic/angular';
import { InstitutesViewComponent } from '../institutes-view/institutes-view.component';

/**
 * Filter Modal Component
 * 
 * Provides an elaborate overlay GUI for adjusting search constraints. 
 * Allows users to set tuition bounds and optionally drills deeper into selecting an actual institute.
 */
@Component({
  selector: 'app-filter-modal',
  templateUrl: './filter-modal.component.html',
  styleUrls: ['./filter-modal.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule, InstitutesViewComponent]
})
export class FilterModalComponent {

  // Tracks if the user is looking at the 'main' overview filter page or if they've 
  // drilled down into the child 'institutes' selection page.
  currentView: 'main' | 'institutes' = 'main';

  // Backing data struct representing the pure numeric bounds from the range slider
  tuitionRange = { lower: 50, upper: 120 };
  
  // Format string representations since our text-fields necessitate dollar signs and comma separation
  minFeeStr = '$50,000';
  maxFeeStr = '$120,000';

  constructor(private modalCtrl: ModalController) {}

  /**
   * Safely dismisses the overlay without applying anything.
   */
  close() {
    this.modalCtrl.dismiss();
  }

  /**
   * Triggered gracefully when the user drags the native ION-RANGE slider.
   * Automatically parses the raw numbers into our clean comma-formatted strings.
   */
  updateInputsFromRange() {
    this.minFeeStr = `$${this.tuitionRange.lower},000`;
    this.maxFeeStr = `$${this.tuitionRange.upper},000`;
  }

  /**
   * Operates as a two-way bind failsafe. If the user decides to bypass the slider entirely 
   * and just aggressively type `$5,000` into the text box, this aggressively scrubs non-numeric 
   * identifiers and updates the slider's physical knob position natively to reflect their keystrokes.
   */
  updateRangeFromInput() {
    // Strip everything that isn't a digit using strict Regex
    const minStr = this.minFeeStr.replace(/[^0-9]/g, '');
    const maxStr = this.maxFeeStr.replace(/[^0-9]/g, '');

    // Downscale integer thousands to match the max bounds (200 threshold) on the range slider
    const minVal = parseInt(minStr, 10) / 1000 || 0;
    const maxVal = parseInt(maxStr, 10) / 1000 || 200;

    this.tuitionRange = { lower: minVal, upper: maxVal };
  }

  /**
   * Universal reset button. Restores the absolute lowest and highest constraints unconditionally.
   */
  clearAll() {
    this.tuitionRange = { lower: 0, upper: 200 };
    // Synchronize inputs natively so we don't end up out-of-sync
    this.updateInputsFromRange();
  }
}