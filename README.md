# Amazon Clone app

an amazing full stack, serverless, AMAZON clone app, that have the full payment functionlity.

built with `REACT` as front-end, `REACT-CONTEXT-API`,
`Material UI` for icons and some components, `firebase` as a serverless cloud platform, and its `firestore` for the Database, combined with `clound functions` to have a comoplete secure and scalable back-end

for the payment services. I used `stripe` as a payment gateway. although paypal is a good choice but I choosed stripe for its simplicity, and developer friendly nature.

the project is all compiled as single-page app using firebase is bundler, and this means that there is no page reloading, and thus, no bored user.

## Usage

due to some personal concerns, I disables the cloud functions.
and chnged the code a bit to work without the back-end,
but it should work as soon as you do the following steps.

### stripe account

first of all, you need a stripe account, you can make one just by following this [LINK] and clicking on `sign up` underneath the log in form. or might as well log in directly if have an account already.

then grab the `publishable key` and the `privet key` form the API keys sectin

[link]: https://dashboard.stripe.com/login

### initiating firebase:
you can look for how to make a firebase project on the internet.

And I believe you won't have a problem with initiating firebase for the `deployment and hosting` and for `cloud functions`

I am concerned here just about the ``firebaseConfig variable`` that will be needed in the next step, you should be able to find in your firebase project page

### editing the code:

well the folowing files need to be slightly changed in oreder for the payment functionality to work properly:

-   src/app.js:: line-20: put you own publishable key
-   src/functions/index.js:: line-7: put you own private key
-   src/payment.js::
    -   line 27 to 40: uncomment these line
    -   line 42 to 76: uncomment these line
    -   line 78 to 113: delete these lines (those are just some fake handlers that jump over the stripe payment confirmation step, and send the data directly to the data base)
- src/firebase.js:: line 6: put you firebaseConfig var here

### intall the needed dependencies:
after doing the previous step, you should now just run the folowing:

- npm install

to install the needed dependencies.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.