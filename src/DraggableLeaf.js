
import React, { Component } from 'react';
import Leaf from './Leaf'
export default class DraggableLeaf extends Component {

  constructor(props){
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
  }

  onDragStart(event){
    alert('Leaf Dragged');
    event.preventDefault();
  }

  render() {
    const { children, ...rest } = this.props;
    return (
       <div onDragStart={this.onDragStart} draggable={true}> 
         <Leaf {...rest} /> 
       </div>
    )
  }

}




