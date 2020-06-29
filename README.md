# Description

Diversified angular app that support multiple languages is a much needed addition. Every angular developer must  know how to add different language support in his/her app. Angular supports natively internationalisation feature but its not go to choice of developers. The third party ngx-translate library is much more powerful and well suited for many developers. Learn more about it in this template.
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 9.1.9.

## Step 1

Make sure you have latest version installed of angular and NPM in your system. Visit this for more details - https://angular.io/guide/setup-local

## Step 2

Install ngx-translate library from here - https://github.com/ngx-translate/core.

Run these commands -
 - npm install @ngx-translate/core --save
 - npm install @ngx-translate/http-loader --save
 
## Step3

Update app.module.ts file with these -
- Setup TranslateLoader
````
export function HttpLoaderFactory(http: HttpClient) {
    return new TranslateHttpLoader(http);
}
````
- Import TranslateModule.forRoot config -
````
TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      },
      defaultLanguage: 'en',
})
````

## Step 4

Add language based JSON files in this directory /src/assets/i18n/. Here we create a common object that holds key value pairs of language based content. Remember the keys among these files should be same.
JSON files will look like this, with values changing for different languages -
```
{
  "LANDING": {
    "LINE1": "Localization Demo in Angular using ngx-translate",
    "LINE2": "Testing NGX-translate",
    "LINE3": "Greetings everyone! I am Shubhrank Rastogi",
    "PROPERTY": {
      "LINE": "Translating using property binding"
    }
  }
}
```

## Step 5

Update HTML with string interpolation tags and property tags

````
<h1>{{'LANDING.LINE1' | translate}}</h1>
<h1 [translate]="'LANDING.PROPERTY.LINE'"></h1>
````

## Step 6

To serve 
- Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

To build
- Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.
