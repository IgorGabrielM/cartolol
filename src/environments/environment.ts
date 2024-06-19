// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
import { initializeApp } from "firebase/app";


/* export const environment = {
  production: false,
  firebase: {
    projectId: 'rent-app-d693f',
    appId: '1:1051099167233:web:6ebd83cd0e768abe2ede00',
    storageBucket: 'rent-app-d693f.appspot.com',
    locationId: 'southamerica-east1',
    apiKey: 'AIzaSyB5CjZgScJxQrsbbfBbNuWIfCI6tfbw_so',
    authDomain: 'rent-app-d693f.firebaseapp.com',
    messagingSenderId: '1051099167233',
    measurementId: 'G-3DRB58ZSVX',
  }
};

initializeApp(environment.firebase) */


export const environment = {
  production: false,
  firebase: {
    apiKey: "AIzaSyCsSecS2V_qoW1E7tazaR5SKbctp0KODhM",
    authDomain: "cartolol-b86c3.firebaseapp.com",
    projectId: "cartolol-b86c3",
    storageBucket: "cartolol-b86c3.appspot.com",
    messagingSenderId: "100924082245",
    appId: "1:100924082245:web:312deafda472c133c4fb2c",
    measurementId: "G-GST3WZ64ZB"
  }
};

initializeApp(environment.firebase);
