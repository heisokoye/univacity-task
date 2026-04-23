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
 * Program Detail Page Component
 * 
 * Generates the expanded, data-heavy layout giving the user profound insight into a specific program.
 * We rely on Angular's Router to read which specific Program ID we should populate data against.
 */
@Component({
  selector: 'app-program-detail',
  templateUrl: './program-detail.page.html',
  styleUrls: ['./program-detail.page.scss'],
  standalone: true, // Operating as a standalone avoids requiring boilerplate NgModules declarations
  imports: [IonicModule, CommonModule]
})
export class ProgramDetailPage implements OnInit {
  // Contains the localized data structure defining what we render. 
  // Evaluates to undefined if the url is invalid.
  program: Program | undefined;

  // The design specifically asks for text snippets that can be expanded using a "Read More" button.
  // These boolean indicators track if those hidden textual panels should presently be rendered.
  showFullDescription = false;
  showFullRequirement = false;
  showFullStructure = false;

  constructor(
    private route: ActivatedRoute, // Used to read params fed securely out the current URL string
    private dataService: Data      // Our single-source database allowing us to query and fetch context
  ) {
    // Ensuring ionic knows what SVGs to draw since our project builds are heavily treeshaken
    addIcons({
      arrowBackOutline, shareSocialOutline, heartOutline,
      ribbonOutline, timeOutline, cashOutline, locationOutline,
      schoolOutline, globeOutline, checkmarkCircle, chevronDownOutline,
      calendarOutline, mapOutline, languageOutline, diamondOutline,
      peopleOutline, bookOutline
    });
  }

  /**
   * Triggers natively via Angular's lifecycle hooks once the component DOM lays itself out.
   */
  ngOnInit() {
    // Extracts the '/:id' part of our route configuration parameters (e.g. '/program-detail/2' evaluates to '2')
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      // Ask the mock database to populate all information dynamically matching the queried ID
      this.program = this.dataService.getProgramById(id);
    }
  }

  /**
   * Bypasses the angular router cleanly. Since we might have drilled into this page from anywhere,
   * asking the universal history to merely retreat by one step natively ensures the slick slide-back navigation holds up.
   */
  goBack() {
    window.history.back();
  }
}