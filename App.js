
const parent = React.createElement(
    'div',
    { id: 'parent' },
    React.createElement(
        'div',
        { id: 'child' },
        [React.createElement(
            "h1",
            { id: 'head', xyz: "abc" },
            "I'm h1 tag!!"),
        React.createElement(
            "h2",
            { id: 'head', xyz: "abc" },
            "I'm h2 tag!!")
        ])
)
//JSX
const heading = React.createElement("h1", { id: 'heading', xyz: "abc" }, "Hello World from react!!");

const root = ReactDOM.createRoot(document.getElementById('root'));
console.log(heading);

root.render(parent);