# Software Frameworks - Assignment - Frontend

Thomas Bründl

## Task

1. Create a simple auto-complete text-input that is provided as a web-component.
2. A simple prototype in two SPAs (React, Angular, VueJs or your preferred
   SPA-Framework) should be created which renders the implemented webcomponent.
3. The web-component should get the list of possible suggestions from outside
   (from teh SPA Framework) and should emit an event with its current value
   if it loses focus.

## Solution

I implemented a web-componnt "wc-search-bar.element" that is written in Vanilla Javascript.
It is located under `libs\shared\ui-components\src\lib\search-bar\wc-search-bar.element.ts`.

This web-component is injected into an Angular and a React app.
<br>
Angular app insertion point: `apps\ng-app\src\app\app.component.ts`.
<br>
React app insertion point: `apps\react-app\src\app\app.tsx`.

<br>

The web-component uses the shadowRoot and appends on top of the show root the search bar and auto-completion elements.
If the user loses focus from the input field the app (e.g Angular-app) will receive the input-value of the web-component.

<br>

The web-component receives a name list from the Angular/React-app which is used for the auto completion.

## Run Angular app

`nx run ng-app:serve`

(You need to install nx in order to run this project: `npm install -g nx` )

## Run React app

`nx run react-app:serve`

(You need to install nx in order to run this project: `npm install -g nx` )
