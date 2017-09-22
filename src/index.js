import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import './style.css';
import Tree from './Tree';
import DraggableLeaf from './DraggableLeaf';
import Leaf from './Leaf';
import DraggableTree from './DraggableTree';

const Node = (props) => {
  return (
    <div> Hello {props.title} {props.display && props.display  == 'collapsed'? '-' : '+'}</div>
  )
}

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: 'React'
    };
    this.title = (props) => <Node {...props}/>
  }

  render() {
    const Abc = Hello; 
    return ( 
      <div>
        <Abc name={this.state.name} />
        <Tree title="abc" display="expanded">
          <DraggableTree title="bbc" display="expanded">
            <DraggableLeaf title="dbc" />
            <DraggableLeaf title="dbc" />
            <DraggableLeaf title="dbc" />
          </DraggableTree> 
          <Tree title="bbc" display="expanded" hightlight={'hightlight'}>
            <Leaf title="dbc" />
            <Leaf title="dbc" />
            <Leaf title="dbc" />
          </Tree>          
          <Leaf title="dbc" hightlight={'hightlight'}/> 
          <Leaf title="ebc" />
        </Tree>
        <Leaf title="ebc" /> 
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
