// const heading1 = React.createElement('h1', {id: "heading"}, "Hello world with react");

// const root1 = ReactDOM.createRoot(document.getElementById("root2"));

// root1.render(heading1)

const parent = React.createElement('div', {id: "parent"}, [React.createElement('h1', {id: "heading"}, "heading1"), React.createElement('h2', {id: "heading2"}, "heading2")]);

const root1 = ReactDOM.createRoot(document.getElementById("root2"));

root1.render(parent)