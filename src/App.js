import React, {Component} from 'react'
import './App.css';
import Img from './components/Img';
import { file } from '@babel/types';

let fileList = [
  {
    path: "japan",
    clicked: false
  },
  {
    path: "japan2",
    clicked: false
  },
]
let deepNewFileList= new Array(...fileList)
class App extends Component{
  state = {
    fileList:fileList
  }
  handleClick = (value) => {
    console.log(value)
    let changeDex = fileList.findIndex(elem => `${ elem.path }.jpg` == value)
    console.log(changeDex)
    if (!fileList[changeDex.clicked]) {
      console.log("first time")
      fileList[changeDex].clicked=true
      console.log(fileList[changeDex])
    } else {
      console.log("too much")
    }
  }
  render=function(){
    
    return(
      <div className="App">
        {fileList.map((val, dex) => {
          return (
            <Img handler={this.handleClick} key={dex} source={`${val.path}.jpg`} />
          )
        })}
      
      </div>
    );
  }
}

export default App;
