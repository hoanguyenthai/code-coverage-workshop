import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Hello World!';
  }

  getInfo(): { name: string; version: string; description: string } {
    return {
      name: 'NestJS Code Coverage Demo',
      version: '1.0.0',
      description: 'A simple NestJS application to demonstrate code coverage',
    };
  }

  /**
   * Calculate the sum of two numbers
   * @param a First number
   * @param b Second number
   * @returns Sum of a and b
   */
  calculateSum(a: number, b: number): number {
    return a + b;
  }

  /**
   * Calculate the product of two numbers
   * @param a First number
   * @param b Second number
   * @returns Product of a and b
   */
  calculateProduct(a: number, b: number): number {
    return a * b;
  }

  /**
   * Check if a number is even
   * @param num Number to check
   * @returns True if number is even, false otherwise
   */
  isEven(num: number): boolean {
    return num % 2 === 0;
  }

  /**
   * Generate a greeting message for a user
   * @param name User's name
   * @param time Time of day (morning, afternoon, evening)
   * @returns Personalized greeting message
   */
  generateGreeting(name: string, time?: 'morning' | 'afternoon' | 'evening'): string {
    if (!time) {
      return `Hello, ${name}!`;
    }
    
    switch (time) {
      case 'morning':
        return `Good morning, ${name}!`;
      case 'afternoon':
        return `Good afternoon, ${name}!`;
      case 'evening':
        return `Good evening, ${name}!`;
      default:
        return `Hello, ${name}!`;
    }
  }
}