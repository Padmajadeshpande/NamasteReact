import react from "react";
import reactDom from "react-dom/client";
const heading=React.createElement(
    "h1",
{
id:"title"
},
"Head1");
    const heading2=React.createElement(
        "h1",
    {

    },
    "Head2");
    const Container=React.createElement (
        "div",
    {
id:"container"
    },
    [heading,heading2]);
    const root= ReactDOM.createRoot(document.getElementById("root"));
root.render(Container);