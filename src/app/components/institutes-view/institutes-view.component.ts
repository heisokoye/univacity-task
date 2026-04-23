import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';

/**
 * Nested institute selector shown from inside the filter modal.
 * Emits actions back to parent so modal controls the flow.
 */
@Component({
  selector: 'app-institutes-view',
  templateUrl: './institutes-view.component.html',
  styleUrls: ['./institutes-view.component.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule, FormsModule]
})
export class InstitutesViewComponent {
  // Parent listens to these to switch views or apply.
  @Output() back = new EventEmitter<void>();
  @Output() apply = new EventEmitter<void>();

  // Search field model for future filtering.
  searchQuery = '';
  
  // Selected item id; default matches current mock design state.
  selectedInstitute: number | null = 2; 

  // Mock options for the UI.
  institutes = [
    { id: 1, name: 'University of Graz', count: 629, country: 'Canada' },
    { id: 2, name: 'University of Liverpool', count: 629, country: 'Canada' },
    { id: 3, name: 'University of Graz', count: 629, country: 'Canada' },
    { id: 4, name: 'University of Graz', count: 629, country: 'Canada' },
    { id: 5, name: 'University of Graz', count: 629, country: 'Canada' },
    { id: 6, name: 'University of Graz', count: 629, country: 'Canada' },
  ];

  /**
   * Return to previous filter view.
   */
  goBack() {
    this.back.emit();
  }

  /**
   * Clear current institute choice.
   */
  clearAll() {
    this.selectedInstitute = null;
  }

  /**
   * Notify parent to apply and close.
   */
  applyFilter() {
    this.apply.emit();
  }

  /**
   * Select one institute row.
   */
  selectInstitute(id: number) {
    this.selectedInstitute = id;
  }
}
