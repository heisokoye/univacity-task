import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { ActivatedRoute } from '@angular/router';
import { Data } from '../../services/data';
import { Program } from '../../models/program';
import { addIcons } from 'ionicons';
import {
  arrowBackOutline, shareSocialOutline, heartOutline,
  ribbonOutline, timeOutline, cashOutline, locationOutline,
  schoolOutline, globeOutline, checkmarkCircle, chevronDownOutline,
  calendarOutline, mapOutline, languageOutline, diamondOutline,
  peopleOutline, bookOutline
} from 'ionicons/icons';

/**
 * Program detail screen.
 * Reads `:id` from the route and resolves the corresponding mock program.
 */
@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.page.html',
  styleUrls: ['./program-detail.page.scss'],
  standalone: true,
  imports: [IonicModule, CommonModule]
})
export class ProgramDetailPage implements OnInit {
  // Bound in the template; undefined if an invalid id is passed.
  program: Program | undefined;

  // Reserved for "Read more" expansion behavior.
  showFullDescription = false;
  showFullRequirement = false;
  showFullStructure = false;

  constructor(
    private route: ActivatedRoute,
    private dataService: Data
  ) {
    // Register template icons once when component is created.
    addIcons({
      arrowBackOutline, shareSocialOutline, heartOutline,
      ribbonOutline, timeOutline, cashOutline, locationOutline,
      schoolOutline, globeOutline, checkmarkCircle, chevronDownOutline,
      calendarOutline, mapOutline, languageOutline, diamondOutline,
      peopleOutline, bookOutline
    });
  }

  /**
   * Load program from route param on first render.
   */
  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.program = this.dataService.getProgramById(id);
    }
  }

  /**
   * Go back to previous page in browser/app history.
   */
  goBack() {
    window.history.back();
  }
}