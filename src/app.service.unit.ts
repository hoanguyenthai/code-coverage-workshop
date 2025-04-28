import { Test, TestingModule } from '@nestjs/testing';
import { AppService } from './app.service';

/**
 * Unit tests for AppService
 * 
 * This file demonstrates step-by-step how to write unit tests for a service.
 */
describe('AppService', () => {
  let service: AppService;

  // Step 1: Set up the testing module before each test
  beforeEach(async () => {
    // Create a testing module that includes our service
    const module: TestingModule = await Test.createTestingModule({
      providers: [AppService],
    }).compile();

    // Get an instance of the service from the testing module
    service = module.get<AppService>(AppService);
  });

  // Step 2: Write a basic test to verify the service is defined
  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // Step 3: Group related tests using describe blocks
  describe('getHello', () => {
    // Step 4: Test a simple method that returns a string
    it('should return "Hello World!"', () => {
      const result = service.getHello();
      // Assert the expected result
      expect(result).toBe('Hello World!');
    });
  });

  // Step 5: Test a method that returns an object
  describe('getInfo', () => {
    it('should return application information', () => {
      // Define expected result
      const expectedInfo = {
        name: 'NestJS Code Coverage Demo',
        version: '1.0.0',
        description: 'A simple NestJS application to demonstrate code coverage',
      };
      const result = service.getInfo();
      // Assert the result matches expected object
      expect(result).toEqual(expectedInfo);
    });
  });

  // Step 6: Test methods with parameters
  describe('calculateSum', () => {
    it('should correctly add two positive numbers', () => {
      expect(service.calculateSum(5, 3)).toBe(8);
      expect(service.calculateSum(5, 3)).toBe(8);
    });

    it('should correctly handle negative numbers', () => {
      expect(service.calculateSum(-5, 3)).toBe(-2);
      expect(service.calculateSum(5, -3)).toBe(2);
      expect(service.calculateSum(-5, -3)).toBe(-8);
    });

    it('should handle zero values', () => {
      expect(service.calculateSum(0, 5)).toBe(5);
      expect(service.calculateSum(5, 0)).toBe(5);
      expect(service.calculateSum(0, 0)).toBe(0);
    });
  });

  // Step 7: Test another method with parameters
  describe('calculateProduct', () => {
    it('should correctly multiply two positive numbers', () => {
      expect(service.calculateProduct(4, 5)).toBe(20);
    });

    it('should correctly handle negative numbers', () => {
      expect(service.calculateProduct(-4, 5)).toBe(-20);
      expect(service.calculateProduct(4, -5)).toBe(-20);
      expect(service.calculateProduct(-4, -5)).toBe(20);
    });

    it('should handle zero values', () => {
      expect(service.calculateProduct(0, 5)).toBe(0);
      expect(service.calculateProduct(5, 0)).toBe(0);
      expect(service.calculateProduct(0, 0)).toBe(0);
    });
  });

  // Step 8: Test a boolean return method
  describe('isEven', () => {
    it('should return true for even numbers', () => {
      expect(service.isEven(2)).toBe(true);
      expect(service.isEven(0)).toBe(true);
      expect(service.isEven(-4)).toBe(true);
    });

    it('should return false for odd numbers', () => {
      expect(service.isEven(1)).toBe(false);
      expect(service.isEven(-3)).toBe(false);
      expect(service.isEven(999)).toBe(false);
    });
  });

  // Step 9: Test a method with optional parameters
  describe('generateGreeting', () => {
    it('should generate default greeting when no time is provided', () => {
      expect(service.generateGreeting('John')).toBe('Hello, John!');
    });

    it('should generate morning greeting', () => {
      expect(service.generateGreeting('John', 'morning')).toBe('Good morning, John!');
    });

    it('should generate afternoon greeting', () => {
      expect(service.generateGreeting('John', 'afternoon')).toBe('Good afternoon, John!');
    });

    it('should generate evening greeting', () => {
      expect(service.generateGreeting('John', 'evening')).toBe('Good evening, John!');
    });
    
    // Add this test to cover the default case in the switch statement
    it('should handle unknown time values by returning default greeting', () => {
      // TypeScript won't allow us to pass an invalid time value directly,
      // so we use a little trick to test the default case in the switch
      const invalidTime = 'invalid' as 'morning';
      expect(service.generateGreeting('John', invalidTime)).toBe('Hello, John!');
    });
  });
});