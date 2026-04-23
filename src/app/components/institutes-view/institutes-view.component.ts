import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

/**
 * Institutes View Component
 * 
 * This allows our user to narrow filter selections down by a specific provider/institute.
 * It's structured to be nested inside the broader filter modal.
 */
@Component({
  selector: 'app-institutes-view',
  templateUrl: './institutes-view.component.html',
  styleUrls: ['./institutes-view.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InstitutesViewComponent {
  // Use EventEmitters to broadcast actions upward to the parent Filter Modal component
  @Output() back = new EventEmitter<void>();
  @Output() apply = new EventEmitter<void>();

  // Tracks the user's typed searches
  searchQuery = '';
  
  // Tracks exactly which institute is selected (2 corresponds to Liverpool to match screenshots)
  selectedInstitute: number | null = 2; 

  // Hardcoded mockup data to emulate pulling a localized list of institutes
  institutes = [
    { id: 1, name: 'University of Graz', count: 629, country: 'Canada' },
    { id: 2, name: 'University of Liverpool', count: 629, country: 'Canada' },
    { id: 3, name: 'University of Graz', count: 629, country: 'Canada' },
    { id: 4, name: 'University of Graz', count: 629, country: 'Canada' },
    { id: 5, name: 'University of Graz', count: 629, country: 'Canada' },
    { id: 6, name: 'University of Graz', count: 629, country: 'Canada' },
  ];

  /**
   * Tells the parent to hide this child view and return to the primary filter screen without changes
   */
  goBack() {
    this.back.emit();
  }

  /**
   * Purges the selection locally, resetting state to completely unobstructed. 
   */
  clearAll() {
    this.selectedInstitute = null;
  }

  /**
   * Commits the user's choices by informing the parent component to capture selection parameters 
   */
  applyFilter() {
    this.apply.emit();
  }

  /**
   * Updates the selected variable, forcing angular to redraw the list assigning 
   * the 'selected' styling classes to the relevant clicked row.
   */
  selectInstitute(id: number) {
    this.selectedInstitute = id;
  }
}
