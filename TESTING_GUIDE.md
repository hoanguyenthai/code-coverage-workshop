# Writing Unit Tests in NestJS: A Step-by-Step Guide

This document provides a detailed guide on how to write effective unit tests for NestJS applications, focusing on controllers and services.

## Table of Contents

1. [Introduction to Testing in NestJS](#introduction-to-testing-in-nestjs)
2. [Setting Up the Testing Environment](#setting-up-the-testing-environment)
3. [Testing Services](#testing-services)
4. [Testing Controllers](#testing-controllers)
5. [Using Mocks and Spies](#using-mocks-and-spies)
6. [Understanding Code Coverage](#understanding-code-coverage)
7. [Best Practices](#best-practices)

## Introduction to Testing in NestJS

NestJS uses Jest as its default testing framework. Jest provides a robust set of tools for writing and running tests, including:

- A test runner
- Assertion library
- Mocking capabilities
- Code coverage reporting

## Setting Up the Testing Environment

### Basic Test Structure

A typical NestJS test file follows this structure:

```typescript
import { Test, TestingModule } from '@nestjs/testing';
import { YourService } from './your.service';

describe('YourService', () => {
  let service: YourService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [YourService],
    }).compile();

    service = module.get<YourService>(YourService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  // More tests...
});
```

### Key Components:

1. **TestingModule**: Creates an isolated module for testing
2. **describe**: Groups related tests
3. **beforeEach**: Sets up the testing environment before each test
4. **it**: Defines an individual test case

## Testing Services

Services are typically the easiest components to test because they have fewer dependencies.

### Step 1: Create the Testing Module

```typescript
const module: TestingModule = await Test.createTestingModule({
  providers: [AppService],
}).compile();

service = module.get<AppService>(AppService);
```

### Step 2: Test Simple Methods

```typescript
describe('getHello', () => {
  it('should return "Hello World!"', () => {
    expect(service.getHello()).toBe('Hello World!');
  });
});
```

### Step 3: Test Methods with Parameters

```typescript
describe('calculateSum', () => {
  it('should correctly add two positive numbers', () => {
    expect(service.calculateSum(5, 3)).toBe(8);
  });

  it('should correctly handle negative numbers', () => {
    expect(service.calculateSum(-5, 3)).toBe(-2);
    expect(service.calculateSum(5, -3)).toBe(2);
    expect(service.calculateSum(-5, -3)).toBe(-8);
  });
});
```

### Step 4: Test Methods with Objects

```typescript
describe('getInfo', () => {
  it('should return application information', () => {
    const expectedInfo = {
      name: 'NestJS Code Coverage Demo',
      version: '1.0.0',
      description: 'A simple NestJS application to demonstrate code coverage',
    };
    expect(service.getInfo()).toEqual(expectedInfo);
  });
});
```

## Testing Controllers

Controllers typically depend on services, so we need to include both in our testing module.

### Step 1: Create the Testing Module with Controller and Service

```typescript
const app: TestingModule = await Test.createTestingModule({
  controllers: [AppController],
  providers: [AppService],
}).compile();

appController = app.get<AppController>(AppController);
appService = app.get<AppService>(AppService);
```

### Step 2: Test Simple Endpoints

```typescript
describe('root', () => {
  it('should return "Hello World!"', () => {
    expect(appController.getHello()).toBe('Hello World!');
  });
});
```

### Step 3: Test Endpoints with Parameters

```typescript
describe('calculateSum', () => {
  it('should correctly calculate sum of two numbers', () => {
    // Call controller method with string parameters (simulating query params)
    const result = appController.calculateSum('5', '3');
    
    // Assert the result
    expect(result).toEqual({ result: 8 });
  });

  it('should handle non-numeric input by returning 0', () => {
    expect(appController.calculateSum('abc', '3')).toEqual({ result: 0 });
  });
});
```

## Using Mocks and Spies

### Using Spies to Verify Method Calls

```typescript
it('should call the service getInfo method', () => {
  // Create a spy on the service method
  const getInfoSpy = jest.spyOn(appService, 'getInfo');
  
  // Call the controller method
  appController.getInfo();
  
  // Assert that the service method was called
  expect(getInfoSpy).toHaveBeenCalled();
});
```

### Mocking Service Responses

```typescript
it('should use mocked service response', () => {
  // Create a mock implementation for the service method
  jest.spyOn(appService, 'getHello').mockImplementation(() => 'Mocked hello');
  
  // Call the controller method
  const result = appController.getHello();
  
  // Assert that we get the mocked response
  expect(result).toBe('Mocked hello');
});
```

## Understanding Code Coverage

Code coverage is a measure of how much of your code is executed during your tests. Jest provides coverage reports that include:

- **Statements**: Percentage of statements executed
- **Branches**: Percentage of control structures (if/else, switch, etc.) executed
- **Functions**: Percentage of functions called
- **Lines**: Percentage of executable lines executed

To generate a coverage report, run:

```bash
npm run test:cov
```

Then open `coverage/lcov-report/index.html` in your browser to view the detailed report.

## Best Practices

1. **Test One Thing at a Time**: Each test should focus on testing one specific behavior
2. **Use Descriptive Test Names**: The test name should clearly describe what is being tested
3. **Arrange-Act-Assert Pattern**: Structure tests with setup, action, and verification phases
4. **Test Edge Cases**: Include tests for boundary conditions and error cases
5. **Keep Tests Independent**: Tests should not depend on each other
6. **Mock External Dependencies**: Use mocks for external services or databases
7. **Aim for High Coverage**: Strive for high code coverage, but focus on testing behavior, not just lines of code
8. **Refactor Tests When Needed**: Keep test code clean and maintainable

Remember, the goal of testing is not just to achieve high coverage numbers, but to ensure your code works correctly under various conditions.

## Conclusion

Writing effective unit tests in NestJS involves setting up the testing module correctly, testing individual components in isolation, and using mocks and spies to verify behavior. By following the steps and examples in this guide, you can create comprehensive tests that ensure your application works as expected.