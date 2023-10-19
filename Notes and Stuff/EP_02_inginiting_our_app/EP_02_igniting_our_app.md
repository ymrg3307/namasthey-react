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
- There are many other features in parcel like code splitting, minification, differential bundling etc., please refer official parcel documentation for more info.
- `npx parcel {index.html}` -> start the development with index.html as entry point. if filename is not index.html give complete path in the URL.
- `npx parcel build index.html` -> build a production build -> if facing error "Target "main" declares an output file path of "App.js" which does not match the compiled bundle type "html" " -> remove "main":'App.js' from package.json

### Features of parcel

- dev build
- local server
- HOT Module Replacement(changes in module are auto reflected in browser window)
- File watcher algorithm
- caching - faster builds - check .parcel-cache folder
- image optimization
- Bundling
- compress
- consistent hashing
- code splitting
- differential bundling
- diagnostics
- error handling
- Can serve on HTTPS
- Tree shaking algorithm

## Tree Shaking in Parcel

- Parcel concatenates modules into a single scope when possible, rather than wrapping each module in a separate function. This is called “scope hoisting”. This helps make minification more effective, and also improves runtime performance by making references between modules static rather than dynamic object lookups.
- Parcel also statically analyzes the imports and exports of each module, and removes everything that isn't used. This is called "tree shaking" or "dead code elimination"
- Read in more detailed manner [here](https://parceljs.org/features/scope-hoisting/) and also observe that there are couple of important things to avoid for a more effective tree shaking.

## Hot reloading & Hot Module Replacement(HMR)

- Parcel automatically rebuilds the modified files and updates your app in the browser by reoloading the page, this is is called hot reloading.
- Hot reloading sometimes does HMR which refreshes the parts of page without reloading it which retains the application state also iproves the dev experience.
- Read more [here](https://parceljs.org/features/development/#hot-reloading)

## package.json and package-lock.json

- package.json is for maintaining the dependency list at a high level and other project related metadata like name, version, author etc.,
- package-lock.json is for maintaining the exact versions of dependencies used in our project.
- when we do `npm install`, npm will first check for the lock file, if found it will install the exact dependencies, if not it goes and checks in **package.json** file.
- If the package version given in the lockfile is not in the version range of the package.json file, packages are updated & package-lock.json is overwritten.
- To make installation fail instead of overwriting package-lock.json, use `npm ci`.
- Never touch/modify the lock file as it is auto generated and used by several dev to maintain a consistent dependency tree.
- what are those crazy symbols in the package.json file
  - ~ tells npm to upgrade to patch versions, but not minor and major versions.
  - ^ tells npm to upgrade to minor and patch versions, but not major versions.
  - There are many more please check [here](https://docs.npmjs.com/cli/v8/configuring-npm/package-json#dependencies).
- [A good article on this](https://medium.com/helpshift-engineering/package-lock-json-the-complete-guide-2ae40175ebdd)

## Browserslist

- Main focus is on the question which browsers our app should be targeted to
- We can build a query according to that using [this](https://browserslist.dev/?q=bGFzdCAyIHZlcnNpb25z)
- Add this in our **package.json** file
- Parcel will use differential bundling based on this info to generate different versions optimised according to each browser. Read more [here](https://parceljs.org/features/targets/#differential-bundling)

## module vs script in JS

- If we want to import a module into html file then we should specify **type='module'** as module uses additional keywords and syntax unless like a regular script.
- Try importing a file containing import and export statements without type module, parcel will throw an error saying we cant use import/export in classic scripts.
- Some general features of modules are
  - scope is per module
  - a module code is evaluated only the first time when imported
  - top-level ***this*** is undefined.
- Some browser specific features are
  - Module scripts are always deferred, relative order of scripts is maintained.
  - Async works on inline scripts with type='module' which is not the case in normal scripts, here when async is added the respective script doesn’t wait for anything.
  - To load external scripts from another origin (domain/protocol/port), CORS headers are needed.
  - Duplicate external scripts are ignored.
- In depth intro on features of modules can be found [here](https://javascript.info/modules-intro#core-module-features)

## Misc

- **.gitignore** adding entries like folders and files to this will omit them out git indexing, so git won't track the changes to these files.
- As we can  build node modules from package.json and package-lock.json, so to avoid resource wastage we add to gitignore file.
- **dist** folder i.e.,distribution folder contains the transpiled and minimized versions of source code, this is used to serve the actual application.
- Transitive dependencies -> We installed only parcel but it has it own dependencies and those dependencies has thier own dependencies. This is the reason why node modules folder have lot of modules even though we installed only a few.
- How npm resolves all the transitive dependencies?, Observe each module in node modules has it's own package.json file.
- ***The intituitve question on what and what not to push to github***
- Git should have only essential things, don't push to github that those which can be regenerated.
- CDN links is not a preferred way to bring react into our app, one reason is we need to get it from internet before using it.

## Sources

- https://www.freecodecamp.org/news/npm-vs-npx-whats-the-difference/
- https://www.geeksforgeeks.org/what-are-the-differences-between-npm-and-npx/
- https://blog.bitsrc.io/package-vs-package-lock-json-file-d3b783dbaa95