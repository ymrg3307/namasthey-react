import React from "react"
import ReactDOM from "react-dom/client"

const heading1 = React.createElement(
    'h1',
    {},
    'h1 here'
)

const heading2 = React.createElement(
    'h2',
    {},
    'h2 here'
)

const parent = React.createElement(
    'div',
    { id: 'parent' },
    [React.createElement('div', { id: 'child1' }, [heading1, heading2]), React.createElement('div', { id: 'child2' }, [heading1, heading2])]
)


console.log('parent value is', parent, `and is of type of ${typeof (parent)}`)

const root = ReactDOM.createRoot(document.getElementById('root'))
root.render(parent)