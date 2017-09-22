import React, { Component } from 'react';


export default class Node extends Component {

  render() {
     const { hightlightNode, title, display,depth, path } = this.props;
     return (
       <div className={`${display} ${hightlightNode || ''} `}> {title} Depth: {depth} Path: {path}</div>
     );
  }

}