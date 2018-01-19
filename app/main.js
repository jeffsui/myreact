//main.js
/*'use strict'
require('!style!css!./style.css')
var component = require('./component.js');

// document.write(component());
document.body.innerHTML=component();*/
import Hello from './Hello.jsx' ;
//import World from  './World.jsx' ;
import React from 'react';
import ReactDOM from 'react-dom';


class App extends React.Component{
    constructor(props){
        super(props);
    }
    render(){
        return (
            <div className="container">
                <h1>Hello React</h1>
            </div>
        )
    }
}
// ReactDOM.render(
//     <App />,
//     document.querySelector('#container')
// );
const app = document.createElement('div');
document.body.appendChild(app);
ReactDOM.render(<App />,app);
// ReactDOM.render(<Hello />,document.body)