
import React, { Component } from 'react';
import Title from './Title';

export default class Tree extends Component {

  constructor(props){
    super(props);
    this.renderTitle = this.renderTitle.bind(this);
    this.depth = props.depth || 0;
    this.path = props.path || 0;
  }

  renderTitle(){
    const { title, hightlightNode, display, node } = this.props; 
    const TitleComp = node || Title;
    const depth = this.depth;
    const path = this.path;
    return <TitleComp {...{title, display,hightlightNode,depth,path }} />;
  }

  render() {
    const { hightlight, display, children, draggable } = this.props;
    return (
      <div className={`node ${hightlight || ''}`} draggable={draggable} id={this.path}>
          {this.renderTitle()}
          {(!display || display == 'expanded') && 
          		React.Children.map(children, (child, i) =>
								React.cloneElement(child, { depth: this.depth + 1, path: `${this.path} ${i}` })
							)}
      </div>
    )
  }

}





