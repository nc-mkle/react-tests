# The purpose
This is a simple application consisting of simple API consumption - CRD operations are included.
The purpose of this application is to show examples of different kinds of test in react application.

## Libraries used:
* react
* testing-library (https://testing-library.com/docs/react-testing-library/intro/)
* msw (https://mswjs.io/)
* json-server

# Installing
Install the app with your favorite package manager (commands `npm i` or `yarn`)

# Starting
Application uses json-server to provide mock API.

To start the mock server use command:
`npm run-script mock-server` or `yarn mock-server`

To start the application, use command:
`npm start` or `yarn start`

# Tests
To run test use either npm/yarn (`npm test` or `yarn test`) or IDE integrated test runner (for example IntelliJ test runner is more user-friendly than npm/yarn tools)

## Tests examples
The codebase contains different kinds of tests for frontend logic and components. This includes 
* Components unit tests: group `Loader label test` in  `src/components/utils/Loader.test.tsx`
* Snapshot tests: group `App snapshot tests` in `src/components/App.test.tsx`. This includes
  * inline snapshots
  * file snapshots
  * component mocking
* API unit tests: `src/logic/api.test.ts`. This includes API mocks
* Integration tests: `src/components/employeeList/EmployeeList.test.tsx`. This includes
  * API mocks
  * verification proper API calls were called