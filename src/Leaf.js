import React, { Component } from 'react';


export default class Leaf extends Component {


  render() {
     const { title,hightlight, depth, path } = this.props;
     return (
       <div className={`${hightlight||''} leaf`} >{title} Depth: {depth || 0} Path: {path || 0}</div>
     );
  }

}

