// const heading = React.createElement(
//     "h1", 
//     {id: "heading"}, 
//     "Hello World From React"
//     ); //this heading is nothing but a object

//Nested HTML ELEMNET USING REACT
//Remember this react.craeteElement is nothing but a object and becomes HTML which browser understands  
    const parent = React.createElement("div",{id:"parent"}, 
    React.createElement("div",{id:"child"},
    [
    React.createElement("h1",{},"I am h1 inside child"), 
    React.createElement("h2",{},"I am a h2 elemnet")
    ]// When you have to give 2 siblings you have to give array of children
    )
    )
   const root = ReactDOM.createRoot(document.getElementById("root"));
   root.render(parent);//this root.render job is to take  the this object create that h1 tag which brouser understand put that inside root element that is DOM elemnt


