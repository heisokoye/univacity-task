/**
 * Shared shape for program objects used across pages and services.
 */
export interface Program {
  id: string;          // Route-safe identifier.
  title: string;       // Program name shown on cards/details.
  university: string;  // Institution name.
  location: string;    // Country/location text.
  level: string;       // Academic level (Masters, Bachelors, etc.).
  attendance: string;  // Attendance mode (full-time, part-time).
  duration: string;    // Program duration.
  language: string;    // Teaching language.
  tuitionFee: number;  // Numeric fee for display/filtering.
  isOfficial: boolean; // Controls official partner badge.
  imageUrl: string;    // Program/university image.
}