

## Testing Framework

### Chosen Framework: **Playwright**
Playwright was chosen as the testing framework for this project due to its powerful and versatile features, including:
- **Cross-browser Support**: Allows testing on modern web browsers like Chromium, Firefox, and WebKit.
- **End-to-End Testing**: Ideal for simulating real-world user interactions.
- **Built-in Test Runner**: Comes with a test runner that simplifies setup and configuration.
- **Rich Debugging Capabilities**: Features like automatic screenshots, video recording, and tracing for test failures.
- **Ease of Integration**: Works seamlessly with GitHub Actions for CI/CD pipelines.

---

## Local Test Setup Instructions

Follow these steps to set up and run the tests locally on your development machine:

### Prerequisites
1. **Node.js**: Ensure that Node.js is installed on your system (version 16 or later is recommended). Download it from [Node.js](https://nodejs.org/).
2. **NPM**: Comes bundled with Node.js. Ensure it's installed and updated (`npm install -g npm`).

### Steps to Set Up:
1. **Clone the Repository**:
   ```bash
   git clone https://github.com/your-username/your-repository.git
   cd your-repository
   ```

2. **Install Dependencies**:
   Run the following command to install all project dependencies, including Playwright:
   ```bash
   npm install
   ```

3. **Install Browsers**:
   Playwright requires browser binaries for testing. Run:
   ```bash
   npx playwright install
   ```

4. **Run Tests**:
   To execute the tests, use:
   ```bash
   npx playwright test
   ```

5. **View Test Results**:
   - **CLI Results**: Test results will appear in the terminal after the test suite finishes.
   - **HTML Report**: To generate and open the Playwright HTML report, use:
     ```bash
     npx playwright show-report
     ```

---

## Additional Configuration Requirements

1. **Environment Variables**:
   - Some tests may require environment variables for credentials or configurations.
   - Create a `.env` file in the project root and populate it with the necessary variables:
     ```env
     BASE_URL=http://localhost:3000
     API_KEY=your-api-key
     ```

2. **Custom Test Configurations**:
   - The default Playwright configuration is located in `playwright.config.js`. You can customize it as needed (e.g., for test retries, timeouts, or parallel execution).

3. **Debugging Tests**:
   - Run tests in debug mode with:
     ```bash
     npx playwright test --debug
     ```
   - This allows you to pause tests and inspect elements in the browser.

4. **Artifacts**:
   - Test artifacts (screenshots, videos, traces) are saved in the `test-results` folder by default for debugging purposes.

---

This section ensures anyone setting up the project locally or contributing to it understands the testing framework, why it was chosen, and how to configure and run the tests successfully. 
