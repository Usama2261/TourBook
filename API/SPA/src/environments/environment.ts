// This file can be replaced during build by using the `fileReplacements` array.
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiUrl: 'your-api-url.com',
  version: '1.0.0',
  api_base_url: 'https://localhost:44383',

  DEV_USER_ID: 1896326,
  DEV_AUTH: {
    'Content-Type': 'application/json',
    'Accept': 'application/json',
    // 'Content-type': 'multipart/form-data',
    'x-va-senderagent-id': '29B599D9-9C25-4B83-721E-C6CE6E0F35E1',
    'x-va-hash':
      'RjK5OC3PqvasroWe6UFYogdmQLG9MG/0UfRIK4f5JdLrryczbLyLJLZBxqB4/0L2IyWmOaTiHaExa6TRBSUfJw==',
    'x-va-transaction-id': 'fda17f23-fd71-40c0-bca8-43d6909d4519',
    // Authorization:
    //   'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJ1bmlxdWVfbmFtZSI6Ik1yLiBLdW1hciwgQWJoaXNoZWsiLCJzdWIiOiJNci4gS3VtYXIsIEFiaGlzaGVrIiwicm9sZSI6IkxhYiBNYW5hZ2VyIiwibG9naW5pZCI6ImFiaGlzaGVrcDRjbGluaWNhbCIsInB3ZCI6IjhjbHBOemZGQWViZDZsL25kMlIwQlE9PSIsImF1ZCI6Ijc3MDUyODUwMDgzYzQ3MmJhZjE3YmMzYTdmOTVjNGZkIiwiZXhwIjoiMTY3MDA5NTQ2MCIsIm5iZiI6IjE2Njk5MjI2NjAifQ.JMV8bB_bLzEbwfqnCrbyRWmJQKRM31TpYuQKbxwqBbA',
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
