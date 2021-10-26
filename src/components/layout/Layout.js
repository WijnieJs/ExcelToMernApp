import React, { Fragment } from 'react';
import Logo from "../logo/Logo"
 
const Layout = props => (
  <div className="content">
    <div className="bck__forall"/>
     <Logo />
        <div style={{width: "100px", height: "120px"}}/>
  {props.children} 
     
  </div>
);

export default Layout;
