import React from 'react'

let style = {height: '300px'}


function Img(props) {
    return (
      <div className="App">
            <img
                style= {{height: "300px"}}
                //style={style}
                onClick={()=>props.handler(props.source)}
                src={`/img/${props.source}`}
            />
      </div>
    );
  }

export default Img
