import React from 'react';
import "./ImgContainer.css";

const ImgContainer = props => <div className={props.shakeHeader === "true" ? "ImgShake" : "ImgContainer"}>{props.pictures}</div>

export default ImgContainer; 
