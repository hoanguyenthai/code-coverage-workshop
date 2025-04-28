import { Test, TestingModule } from '@nestjs/testing';
import { AppController } from './app.controller';
import { AppService } from './app.service';

/**
 * Unit tests for AppController
 * 
 * This file demonstrates step-by-step how to write unit tests for a controller.
 */
describe('AppController', () => {
  let appController: AppController;
  let appService: AppService;

  // Step 1: Set up the testing module before each test
  beforeEach(async () => {
    // Create a testing module with both controller and service
    const app: TestingModule = await Test.createTestingModule({
      controllers: [AppController],
      providers: [AppService],
    }).compile();

    // Get instances of controller and service
    appController = app.get<AppController>(AppController);
  });

  // Step 2: Test the root endpoint
  describe('root', () => {
    it('should return "Hello World!"', () => {
      // Call the controller method
      const result = appController.getHello();
      // Assert the expected result
      expect(result).toBe('Hello World!');
    });
  });

  // Step 4: Test an endpoint that returns an object
  describe('info', () => {
    it('should return application information', () => {
      // Define expected result
      const expectedResult = {
        name: 'NestJS Code Coverage Demo',
        version: '1.0.0',
        description: 'A simple NestJS application to demonstrate code coverage',
      };
      const result = appController.getInfo();
      // Assert the result matches expected object
      expect(result).toEqual(expectedResult);
    });
  });

  // Step 5: Test endpoints with query parameters
  describe('calculateSum', () => {
    it('should correctly calculate sum of two numbers', () => {
      // Call controller method with string parameters (simulating query params)
      const result = appController.calculateSum('5', '3');
      // Assert the result
      expect(result).toEqual({ result: 8 });
    });

    it('should handle non-numeric input by returning 0', () => {
      // Test with invalid inputs
      expect(appController.calculateSum('abc', '3')).toEqual({ result: 0 });
    });
  });

  // Step 7: Test another endpoint with query parameters
  describe('calculateProduct', () => {
    it('should correctly calculate product of two numbers', () => {
      expect(appController.calculateProduct('4', '5')).toEqual({ result: 20 });
    });

    it('should handle non-numeric input by returning 0', () => {
      expect(appController.calculateProduct('abc', '5')).toEqual({ result: 0 });
    });
  });

  // Step 8: Test an endpoint with path parameters
  describe('isEven', () => {
    it('should correctly identify even numbers', () => {
      expect(appController.isEven('2')).toEqual({ number: 2, isEven: true });
      expect(appController.isEven('3')).toEqual({ number: 3, isEven: false });
    });

    it('should handle non-numeric input', () => {
      expect(appController.isEven('abc')).toEqual({ number: 0, isEven: true });
    });
  });

  // Step 9: Test an endpoint with optional parameters
  describe('generateGreeting', () => {
    it('should generate default greeting when only name is provided', () => {
      expect(appController.generateGreeting('John')).toEqual({ 
        greeting: 'Hello, John!' 
      });
    });

    it('should handle missing name parameter by using default value', () => {
      // Here we're passing undefined as name but the controller has a default value
      expect(appController.generateGreeting()).toEqual({ 
        greeting: 'Hello, guest!' 
      });
    });
  });
});