// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
export const environment = {
  production: false,
  firebaseConfig : {
    apiKey: "AIzaSyA-12gHnSU9gBsMIEF1blR9pPUDTfXiMe0",
    authDomain: "japiyop-125df.firebaseapp.com",
    databaseURL: "https://japiyop-125df.firebaseio.com",
    projectId: "japiyop-125df",
    storageBucket: "japiyop-125df.appspot.com",
    messagingSenderId: "560375271294",
    appId: "1:560375271294:web:659edca6aa7e2dbeb02d2f",
    measurementId: "G-PT59S9DV39"
  }
};

/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
