import React from 'react';
import ReactDOM from 'react-dom';

export default class Hello extends React.Component{
    constructor(){
        super();
    }
  
    render(){
        return <div>Hello </div>
    }
}

//ReactDOM.render(<Hello/> , document.querySelector('id'));
//exports.modules=Hello 