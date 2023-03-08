# **1.Inception**
## 1.What's Emmet?
Plugin which improves HTML and CSS workflow
- html:5 gives HTML5 bolierplate code.
- div>h1 gives a h1 element inside a div element

Need to go through the documentation to get hang of this

## 2.What's difference between library and framework?
[Library vs Framework](https://www.interviewbit.com/blog/framework-vs-library/)
- Library has generally smaller package size
- Library lets you control the code flow, unike framework(inversion of control)
- Framework are generally built to address end to end development in that particular domain but libraries on the other end are built to address specific use cases. 

## 3.What is CDN ? Why do we use it?
[CDN by ByteByte go](https://www.youtube.com/watch?v=RI9np1LWzqw)
- At a base level CDN is a collection of servers(aka edge servers | point of presence(PoP)) that caches the original content and brings it close to the user, so it reduces latency.
- Each edge server acts as a reverse proxy with huge content cache.
- Can server users with optimized file formats

## 4.Why is react known as react?
- Because of it's ability to change the ui based on changes in data.

## 5. What is crossorigin in script tag?
- The crossorigin attribute sets the mode of the request to an HTTP CORS Request, allows resources from other domain(in this case react lib files)
- crossorigin or crossorigin='anonymous' is same.

## 6.What is diference between React and ReactDOM library files?
- 'React' lib file is entry point to react library, contains top level APIs like createElement,fragments, hooks etc., that are common across  different implementations of React like Reactnative.
- 'ReactDOM' provides DOM specific methods i.e., related to browsers.

## 7.What is difference between react.development.js and react.production.js files via CDN?
- development files are usually large in size but its easy to understand the code, so it is helpful during development cycle.
- production files are minimized(see .min in the cdn links)-> decreases the size of the file which enables to quickly download the files.

## 8. What is async and defer in script tag?
![asyncAnddefer](../images/async%2Cdefer.png)
[javascript info script async,defer](https://javascript.info/script-async-defer)
- both are boolean attributes.
- both are for external scripts..
- async downloads in parallel and executes it when it is available, generally used for prebuilt libs, script order is preservced.
- defer also downloads in parallel but executes it only html is completely rendered to the web page, script order is not present.