import { Injectable } from '@angular/core';
import { Program } from "../models/program"

/**
 * Simple in-memory repository used by the assessment screens.
 * Keeping data access behind a service makes it easy to replace with an API later.
 */
@Injectable({
  providedIn: 'root',
})
export class Data {
  // Mock records used by both search and detail pages.
  private programs: Program[] = [
    {
      id: '1',
      title: 'Computer Technologies and Environmental Engineering',
      university: 'University of Liverpool',
      location: 'Canada',
      level: 'Masters',
      attendance: 'Full-time',
      duration: '2 years',
      language: 'English Language',
      tuitionFee: 363.36,
      isOfficial: true,
      imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800'
    },
    // Duplicates are intentional so card scrolling looks realistic in demos.
    {
      id: '2',
      title: 'Computer Technologies and Environmental Engineering',
      university: 'University of Liverpool',
      location: 'Canada',
      level: 'Masters',
      attendance: 'Full-time',
      duration: '2 years',
      language: 'English Language',
      tuitionFee: 363.36,
      isOfficial: true,
      imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800'
    },
    {
      id: '3',
      title: 'Computer Technologies and Environmental Engineering',
      university: 'University of Liverpool',
      location: 'Canada',
      level: 'Masters',
      attendance: 'Full-time',
      duration: '2 years',
      language: 'English Language',
      tuitionFee: 363.36,
      isOfficial: true,
      imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800'
    }
  ];

  /**
   * Returns all programs for the listing page.
   */
  getPrograms() {
    return this.programs;
  }

  /**
   * Finds one program by id for the detail route.
   */
  getProgramById(id: string) {
    return this.programs.find(p => p.id === id);
  }
}
