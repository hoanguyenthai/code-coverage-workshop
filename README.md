# NestJS Code Coverage Demo

This is a comprehensive NestJS application that demonstrates how to set up and use code coverage with Jest in a NestJS project. It includes detailed step-by-step guidance on writing effective unit tests.

## Features

- Complete NestJS application with a controller and service
- Multiple endpoints demonstrating different parameter types and functionalities
- Detailed unit tests with step-by-step comments explaining the testing process
- Jest configured for code coverage reporting
- 100% code coverage demonstration

## Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

## Getting Started

### Clone the repository

```bash
git clone https://github.com/yourusername/nestjs-code-coverage-demo.git
cd nestjs-code-coverage-demo
```

### Install dependencies

```bash
npm install
```

### Running the application

To start the application in development mode:

```bash
npm run start:dev
```

The application will be available at http://localhost:3000.

### Available Endpoints

- `GET /`: Returns "Hello World!"
- `GET /info`: Returns application information
- `GET /calculate/sum?a=5&b=3`: Calculates sum of two numbers
- `GET /calculate/product?a=4&b=5`: Calculates product of two numbers
- `GET /check/even/6`: Checks if a number is even
- `GET /greet?name=John&time=morning`: Generates a personalized greeting

## Running Tests

To run the tests:

```bash
npm test
```

### Running tests with coverage

To run the tests with coverage reporting:

```bash
npm run test:cov
```

This will generate a coverage report in the `coverage` directory. You can open the HTML report by opening `coverage/lcov-report/index.html` in your browser.

## Understanding the Code Coverage Report

The coverage report includes the following metrics:

- **Statements**: Percentage of statements executed
- **Branches**: Percentage of control structures (if/else, switch, etc.) executed
- **Functions**: Percentage of functions called
- **Lines**: Percentage of executable lines executed

A high percentage in all these metrics indicates good test coverage.

## Step-by-Step Guide to Writing Unit Tests

This project includes detailed step-by-step guides in the test files:

### Service Testing (`app.service.unit.ts`)

1. **Setting up the testing module**: How to create a testing module with the necessary providers
2. **Basic existence test**: Verifying the service is properly defined
3. **Testing simple methods**: How to test methods that return strings
4. **Testing object returns**: How to test methods that return objects
5. **Testing methods with parameters**: How to test methods with different parameter types
6. **Testing boolean returns**: How to test methods that return boolean values
7. **Testing methods with optional parameters**: How to handle optional parameters in tests

### Controller Testing (`app.controller.unit.ts`)

1. **Setting up the controller test**: How to create a testing module with controllers and services
2. **Testing basic endpoints**: How to test simple endpoint responses
3. **Using spies**: How to verify service methods are called by controllers
4. **Testing query parameters**: How to test endpoints with query parameters
5. **Testing path parameters**: How to test endpoints with path parameters
6. **Testing optional parameters**: How to test endpoints with optional parameters
7. **Mocking service responses**: How to mock service methods for controller tests

## Project Structure

```
src/
├── app.controller.ts        # Controller with multiple endpoints
├── app.controller.unit.ts   # Detailed step-by-step controller tests
├── app.module.ts            # Main application module
├── app.service.ts           # Service with multiple methods
├── app.service.unit.ts      # Detailed step-by-step service tests
└── main.ts                  # Application entry point
```

## Best Practices Demonstrated

1. **Comprehensive Testing**: Testing all code paths and edge cases
2. **Isolation**: Testing components in isolation with proper mocking
3. **Clear Test Structure**: Using describe/it blocks to organize tests
4. **Readable Tests**: Clear test names that describe what's being tested
5. **Proper Assertions**: Using the right assertions for each test case
6. **Service Mocking**: Demonstrating how to mock dependencies
7. **Parameter Testing**: Testing different parameter combinations

## License

MIT