# 2.Igniting our App

> npm doesn't stand for node package manager 😂, it's mentioned no where.
> package.json is a configuration file for npm.
> npm init vs npm init -y
> There are two type of dependencies/packages -> dev dependency(only used in dev env) and normal dependency(used in prod too),
> npm install -D {dev dependency name}
> ~ vs ^ in package json dependency versions?
> What is package-lock.json?
> Transitive dependencies -> We installed only parcel but it has it own dependencies and those dependencies has thier own dependencies. This is the reason why node modules folder have lot of modules even though we installed only a few.
>How npm resolves all the transitive dependencies?, Observe each module in node modules has it's own package.json file.
> ***The intituitve question on what and what not to push to github***
> Why node_modules need not be pushed to github? -> as we can build node modules from package.json and package-lock.json, so to avoid resource wastage we add to gitignore file.
> What kind of format can we add in gitignore?
> Git should have only essential things, don't push to github that those which can be regenerated.
> https://saturncloud.io/blog/whats-the-difference-between-tilde-and-caret-in-packagejson/#:~:text=In%20summary%2C%20tilde(%20~%20),both%20minor%20and%20patch%20updates.
> npx parcel index.html
> npx is for executing package, r3ead more on what is npx
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