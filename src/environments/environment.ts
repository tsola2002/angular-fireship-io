// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  // we add our firebase credentials here
  firebase: {
      apiKey: "AIzaSyBqbKy-a97mt_FRRiXWAbrPwLI_R44RfbU",
      authDomain: "fireship-io-29b00.firebaseapp.com",
      databaseURL: "https://fireship-io-29b00.firebaseio.com",
      projectId: "fireship-io-29b00",
      storageBucket: "fireship-io-29b00.appspot.com",
      messagingSenderId: "634096747451",
      appId: "1:634096747451:web:6f63ba4236fb094fc83a9e"
  }
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.
