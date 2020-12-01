This project was generate based on create-react-app

## Available Scripts

In the project directory, you can run:

### `yarn translation`

You will see translation.json file generated in shared/translation directory.
Run this every time you update translation key for the app

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

At the moment if got CORS issue when get real API we need to add PORT=80 in .env.development file

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn test:coverage`

Launches the coverage test runner to see how many percentages we were cover our code<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

### `yarn build-prod`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />

You will see body.html contain script tag that include bundle file to generate the app

You will also see head.html contain Link tag that include all styles for the app
