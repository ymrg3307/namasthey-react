# 3.Laying the Foundation

- add entries in scripts section
- npx parcel index.html is modified to npm run start or npm start
- npx parcel build index.html is modified to npm run build
- JSX is not a part of react, react can be used without jsx but its not developer friendly.
- JSX is not html, the syntax is similar that's it.
- Transpilation: 
- jsx -> React.createElement -> ReactElement - JS Object -> HTMl Element(rendered) (1st step isn handled by babel)
- Babel - read basics
- attributes in jsx are written in camelCase notation.
  - How are different tags, attributes are written in jsx?
- React Component:
  - Class based component
  - Functional component: A JS function that returns react element.(function can be any format)
- Component composition:
- React component vs React element? -> observe how both appear similar but are different and what are the differences?
- Cross-site scripting (XSS) -> What is it and how JSX protects us from it?
- Components are resuable and each instance is treated as separate elements.
