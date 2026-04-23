import { Injectable } from '@angular/core';
import { Program } from "../models/program"

/**
 * Data Service
 * 
 * We use this service as a mock database. Instead of making real HTTP requests
 * to a backend right now, we store our list of university programs in memory 
 * and expose simple methods to retrieve them. This keeps things clean and modular!
 */
@Injectable({
  // providedIn: 'root' makes this service a singleton available globally throughout the app
  providedIn: 'root',
})
export class Data {
  // Our hardcoded mock database containing the dummy program data.
  // Each item perfectly matches the 'Program' interface.
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
      // A high quality splash image to make the UI pop
      imageUrl: 'https://images.unsplash.com/photo-1541339907198-e08756ebafe3?q=80&w=800'
    },
    // Adding duplicates purely so the search list has enough items to scroll realistically
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
   * Retrieves the entire list of programs.
   * Useful for populating the initial search page.
   */
  getPrograms() {
    return this.programs;
  }

  /**
   * Fetches a single program based on its unique string ID.
   * Useful for the program detail page where we only have the ID from the URL.
   * 
   * @param id The string ID to find in the database
   */
  getProgramById(id: string) {
    return this.programs.find(p => p.id === id);
  }
}
