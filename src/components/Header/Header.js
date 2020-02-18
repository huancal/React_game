import React from 'react';
import "./Header.css";

const Header = props => <div className={props.shakeHeader === "true" ? "headerShake" : "header"}>{props.pictures}</div>

export default Header
