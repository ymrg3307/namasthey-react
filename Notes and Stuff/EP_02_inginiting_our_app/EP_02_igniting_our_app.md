# 2.Igniting our App

## NPM

- largest software registry for packages, we usually interact with it using npm cli for installing/managing packages.
- npm doesn't stand for node package manager 😂, it's mentioned no where.
- Generate a plain old package.json using legacy init
  - `npm init` -> asks bunch of questions and then generates a package.json file based on the answers we provide.
  - `npm init -y` -> skips the questions and generates a package.json
- **package.json** is a configuration file for npm.
- There are two type of dependencies/packages -> dev dependency(only used in dev env) and normal dependency(used in prod too),
- `npm install -D {dev dependency name}` -> this is for installing dev dependency.

## NPX

- default package runner of node.
- Simplifies the process of executing the packages, i.e., if we want to execute a package using **npm run** we should specify it in package.json, npx solves this like we it automatically searches the local scope and if it's not available it will install it to the **npm cache** and executes the package thus it avoids global scope pollution.
- There are many other features like we can test/play with different versions of a package without much effort etc., please refer to the docs for info.

## Parcel

- Build tool we use for our application, it offers many features like minification, development server, hot reloading etc.,
- .parcel-cache is where parcel stores it's cache, this is automatically rebuilt based on our changes.
- `npx parcel {index.html}` 

## Tree Shaking in Parcel

- Parcel concatenates modules into a single scope when possible, rather than wrapping each module in a separate function. This is called “scope hoisting”. This helps make minification more effective, and also improves runtime performance by making references between modules static rather than dynamic object lookups.
- Parcel also statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination"
- Read in more detailed manner [here](https://parceljs.org/features/scope-hoisting/) and also observe that there are couple of important things to avoid for a more effective tree shaking.

## Hot reloading & Hot Module Replacement(HMR)

- Parcel automatically rebuilds the modified files and updates your app in the browser by reoloading the page, this is is called hot reloading.
- Hot reloading sometimes does HMR which refreshes the parts of page without reloading it which retains the application state also iproves the dev experience.
- Read more [here](https://parceljs.org/features/development/#hot-reloading)

> ~ vs ^ in package json dependency versions?
> What is package-lock.json?
> Transitive dependencies -> We installed only parcel but it has it own dependencies and those dependencies has thier own dependencies. This is the reason why node modules folder have lot of modules even though we installed only a few.
>How npm resolves all the transitive dependencies?, Observe each module in node modules has it's own package.json file.
> ***The intituitve question on what and what not to push to github***
> Why node_modules need not be pushed to github? -> as we can build node modules from package.json and package-lock.json, so to avoid resource wastage we add to gitignore file.
> Git should have only essential things, don't push to github that those which can be regenerated.
> https://saturncloud.io/blog/whats-the-difference-between-tilde-and-caret-in-packagejson/#:~:text=In%20summary%2C%20tilde(%20~%20),both%20minor%20and%20patch%20updates.
> npx parcel index.html
> npx is for executing package, read more on what is npx
> CDN links is not a preferred way to bring react into our app, one reason is we need to get it from internet before using it.
> Browser script cannot have imports and exports error, -> use type='module' instead in script tag
> index.js:1 Warning: You are importing createRoot from "react-dom" which is not supported. You should instead import it from "react-dom/client".
> parcel
>   dev build
>   local server
>   HOT Module Replacement(changes in module are auto reflected in browser window)
>   File watcher algorithm
>   caching - faster builds - check .parcel-cache folder
>   image optimization
>   Bundling
>   compress
>   consistent hashing
>   code splitting
>   differential bundling
>   diagnostics
>   error handling
>   Can serve on HTTPS
>   Tree shaking algorithm

>   npx parcel build index.html -> build a production build -> if facing error "Target "main" declares an output file path of "App.js" which does not match the compiled bundle type "html" " remove the "main":'App.js' from package.json
> browsersList
>
> Sources:
> https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/
> https://www.geeksforgeeks.org/what-are-the-differences-between-npm-and-npx/