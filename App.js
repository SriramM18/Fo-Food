const parent = React.createElement("div", {id:"parent"}, [
    React.createElement("div", {id: "children"},[
        React.createElement("h1", {}, "I'm a H1 tag"),
        React.createElement("h2", {}, "I'm a H2 tag"),]),

        React.createElement("div", {id: "children2"},[
            React.createElement("h1", {}, "I'm a H1 tag"),
            React.createElement("h2", {}, "I'm a H2 tag"),])
]);
const heading = React.createElement

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);