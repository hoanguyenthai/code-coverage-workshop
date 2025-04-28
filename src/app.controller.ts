import { Controller, Get, Param, Query } from '@nestjs/common';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

  @Get('info')
  getInfo() {
    return this.appService.getInfo();
  }

  /**
   * Calculate sum of two numbers
   * @param a First number
   * @param b Second number
   * @returns Sum of a and b
   */
  @Get('calculate/sum')
  calculateSum(@Query('a') a: string, @Query('b') b: string): { result: number } {
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);
    
    if (isNaN(numA) || isNaN(numB)) {
      return { result: 0 };
    }
    
    return { result: this.appService.calculateSum(numA, numB) };
  }

  /**
   * Calculate product of two numbers
   * @param a First number
   * @param b Second number
   * @returns Product of a and b
   */
  @Get('calculate/product')
  calculateProduct(@Query('a') a: string, @Query('b') b: string): { result: number } {
    const numA = parseInt(a, 10);
    const numB = parseInt(b, 10);
    
    if (isNaN(numA) || isNaN(numB)) {
      return { result: 0 };
    }
    
    return { result: this.appService.calculateProduct(numA, numB) };
  }

  /**
   * Check if a number is even
   * @param num Number to check
   * @returns Result object indicating if number is even
   */
  @Get('check/even/:num')
  isEven(@Param('num') num: string): { number: number; isEven: boolean } {
    const numValue = parseInt(num, 10);
    
    if (isNaN(numValue)) {
      return { number: 0, isEven: true };
    }
    
    return { 
      number: numValue, 
      isEven: this.appService.isEven(numValue) 
    };
  }

  /**
   * Generate a greeting for a user
   * @param name User's name
   * @param time Time of day
   * @returns Greeting message
   */
  @Get('greet')
  generateGreeting(
    @Query('name') name = 'guest',
    @Query('time') time?: 'morning' | 'afternoon' | 'evening',
  ): { greeting: string } {
    return { 
      greeting: this.appService.generateGreeting(name, time)
    };
  }
}