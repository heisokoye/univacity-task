/**
 * Program Model interface
 * 
 * This file defines the explicit structure of our Program object so that
 * TypeScript can help us catch errors if we try to use undefined fields.
 * It acts as the single source of truth for the properties every program card must have.
 */
export interface Program {
  id: string;          // Unique identifier for the program (e.g., used for routing)
  title: string;       // The name of the academic program
  university: string;  // The institution offering the program
  location: string;    // Country or precise location of the university
  level: string;       // Academic level (e.g., Masters, Bachelors)
  attendance: string;  // Format of attendance (e.g., Full-time, Part-time)
  duration: string;    // Length of the program (e.g., '2 years')
  language: string;    // The primary language of instruction
  tuitionFee: number;  // The cost of the program. Using numbers for easier math/filtering later
  isOfficial: boolean; // Flag to show the blue verified checkmark icon if the program is officially verified
  imageUrl: string;    // URL pointing to a thumbnail or campus image
}