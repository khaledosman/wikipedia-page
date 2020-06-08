[![Netlify Status](https://api.netlify.com/api/v1/badges/473456ff-6488-427b-b098-2895643268f8/deploy-status)](https://app.netlify.com/sites/my-wikipedia-app/deploys)

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

![Lighthouse Score](https://i.ibb.co/CnvH8qD/image.png)

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Linting
run `yarn lint` to lint the project and `yarn lint:fix` to automatically fix automatically fixable lint issues
husky is installed to automatically fix lint issues on commits

## Solution
This project is a Progressive Web App that shows information about a specific item from Wikipedia's public API.
Being a progressive web app means it can run in any network condition even offline once cached after the first visit.

The project uses the new experimental React concurrent mode (for funsies).

I used the new Wikipedia API to get the response in text format rather than HTML in order to avoid setting the html of the page manually for security reasons to avoid xss attacks.

## Progressive Web App setup
In order to enhance the PWA capabilities, custom service worker code can be written in `sw-epilog.js` which will be appended to the built service worker file by PWA in order to customize the service worker without ejecting from create-react-app

Custom PWA features added are:
1. "Content cached for offline usage" message
1. click-to-update functionality
1. caching get requests
1. Show "user is online/offline" message 
This cose I reused from an older template project https://github.com/khaledosman/create-react-pwa

## Deployment
Netlify is used for deployment since its the easiest and fastest to work with, also gives automated deployments/previews for each commit / branch.
