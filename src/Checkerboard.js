import React, { Component } from 'react';
import './App.css';

function Board(props){
  let {size} = props;
  console.log(size)
  let board=[];
  let start = true;
  for(let r=0;r<size;r++){
    let row=[];
    if(r%2!==0){
      start = false;
    }
    let isRed = start;
    for (let c = 0; c < size; c++) {
      if(isRed){ row.push(true)}
      else { row.push(false)}
      isRed=!isRed;
    }
    board[r]=row;
    start=!start;
  }

  console.log(board)
  // const columns = row.map((col)=>{
  //   createBlock()
  // })
  

}
function createBlock(props){
  let classes = "box "+props.color
  return React.createElement('div',{className:classes},"");
}

class Checkerboard extends Component {
  render() {
    Board(this.props)
    return (
      <div className="Checkerboard">
      </div>
    );
  }
}

export default Checkerboard;
