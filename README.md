## How to run

1. Rebuild app: `$npm install`. Use `$ npm start` to run the React app, running tests is only available in this mode,
2. I preconfigured build to work with regular browser, just run `$ npm run build` and then open the `index.html` file in your browser.

## Important note:

Data is displayed in `console.log` as plain JavaScript object, which causes for example Chrome to display keys in alphabetic order (as opposed to README order of properties).
Using JSON.stringify() will preserve the order, but it becomes JSON (which wasn't mentioned as desired output).

## Technologies

1. React + TypeScript
    - chose React because I'm very comfortable with it, it allows me to create modular app, and manage state easily for form submission,
    - the aim was to create reusable components as much as possible,
    - TypeScript for type checking to smooth out development, and to avovid silly bugs,
2. CSS Grid & Flexbox, Responsiveness
    - since CSS frameworks are out, Grid and Flexbox will be just perfect
    - I tried to make everything as responsive as possible; at 600px the form starts stacking  to display everything better. On mobile devices it stacks by default.
3. Cypress for testing
    - to automate testing form submission scenarios, I've writted a few Cypress tests,
    - just in case, some instructions how to run tests, in console:
        $ npx cypress open
    - in case of troubles visit:
    (https://docs.cypress.io/guides/getting-started/installing-cypress.html)




