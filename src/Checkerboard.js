import React, { Component } from 'react';
import './App.css';

function Board(props){
  let {size} = props;
  let board=[];
  let start = true;
  for(let r=0;r<size;r++){
    board.push(start)
    start=!start;
  }
  const rows = board.map((start)=>
    <Row start={start} size={size} />
  );
  return (<div className="board">{rows}</div>);
}
function Row(props){
  let { size,start } = props;
  let row = [];
  let isRed = start;
  for (let c = 0; c < size; c++) {
    if (isRed) { row.push("red") }
    else { row.push("black") }
    isRed = !isRed;
  }
  const columns = row.map((value)=><Block color={value} />);
  return(<p className="row">{columns}</p>);
}
function Block(props){
  let classes = "box "+props.color;
  return React.createElement('div',{className:classes},"");
}
class Checkerboard extends Component {
  render() {
    return (
      <Board size={this.props.size}/>
    );
  }
}

export default Checkerboard;
