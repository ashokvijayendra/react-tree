
import React, { Component } from 'react';
import Tree from './Tree';
import Leaf from './Leaf'
export default class DraggableTree extends Component {

  constructor(props){
    super(props);
    this.onDragStart = this.onDragStart.bind(this);
    this.state = {display: props.display || 'expanded'};
  }

  onDragStart(event){
    this.setState((state) => ({display: 'collapsed'}))  
  }

  render() {
    const { children, ...rest } = this.props;
    return (
       <div onDragStart={this.onDragStart} draggable={true}> 
         <Tree {...rest} display={this.state.display}> 
          {React.Children.map(children, (child, i) =>
            React.cloneElement(child)
          )}
         </Tree>
       </div>
    )
  }

}




