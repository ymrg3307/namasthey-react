import React from "react"
import ReactDOM from "react-dom/client"

// const heading1 = React.createElement(
//     'h1',
//     { id: 'child1' },
//     'h1 here'
// )

// const heading2 = React.createElement(
//     'h2',
//     { id: 'child2' },
//     'h2 here'
// )

// const parent = React.createElement(
//     'div',
//     { id: 'parent' },
//     [React.createElement('div', {}, [heading1, heading2]), React.createElement('div', {}, [heading1, heading2])]
// )

// console.log('parent value is', parent, `and is of type of ${typeof (parent)}`)

// React Element
const additionalChild = <h2>I am an extra!!!</h2>

//React functional component
const HeadingComponent = () => <h2>Namasthey react Functional component</h2>

//Component composition
const Contentcontainer = () => (
    <div>
        <h1>This is a example of component composition</h1>
        {/* all below 3 implementations resulkt in same output and are valid */}
        <HeadingComponent />
        <HeadingComponent></HeadingComponent>
        {HeadingComponent()}

        {additionalChild}
    </div>
)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(<Contentcontainer />)