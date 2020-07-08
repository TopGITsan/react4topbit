import React, { useState } from 'react';
import { CSSTransition } from 'react-transition-group';
// import logo from './logo.svg';
// import './App.css';
import {ReactComponent as TopCube} from "./icons/cube.svg";
import {ReactComponent as Encrypt} from "./icons/data-encryption.svg";
import {ReactComponent as LangMenu} from "./icons/list.svg";

function App() {
  return (
    <>
    <NavBar>
      <NavItem icon={<Encrypt/>}/>
      <NavItem icon={<LangMenu/>} title="Select language">
        <DropDownMenu></DropDownMenu>
      </NavItem>
    </NavBar>
    Hello from app
    </>
  );
}

function NavBar(props) {
  return (
    <nav className="navbar">
      <NavItem icon={<TopCube/>} title="Topbit" logo="true"/>
      <ul className="navbar-nav">{props.children}</ul>
    </nav>
  );
}

function NavItem(props) {
  const [open, setOpen] = useState(false);

  return (
    <li className={props.logo ? "nav-item logo": "nav-item"}>
      <a href="#" title={props.title} className="icon-button" onClick={()=> setOpen(!open)}>
        {props.icon}
      </a>
      {open && props.children}
    </li>
  );
}

function DropDownMenu(){

  const [activeMenu, setActiveMenu] = useState('main');
  const [menuHeight, setMenuHeight] = useState(null);
  // this.wrapper = React.createRef();

  // function calcHeight(el){
  //   const height = el.offsetHeight;
  //   setMenuHeight(height);
  // }

  function DropDownItem(props){
    return (
      <a href="#" className="menu-item" onClick={()=> props.goToMenu && setActiveMenu(props.goToMenu)}>
        <span className="icon-button">{props.leftIcon}</span>
        {props.children}
        <span className={props.rightIcon ? "icon-button icon-right" : ""}>{props.rightIcon}</span>
      </a>
    );
  }
// style={{height: menuHeight}} on the div dropdown
// onEnter={calcHeight} on the CSSTransition 
  return (
    <div className="dropdown" > 
      <CSSTransition in={activeMenu === 'main'} unmountOnExit timeout={500} classNames="menu-primary">
        <div className="menu">
          <DropDownItem>My Profile</DropDownItem>
          <DropDownItem leftIcon={<TopCube/>}>Encrypted</DropDownItem>
          <DropDownItem leftIcon={<Encrypt/>} rightIcon={<Encrypt/>} goToMenu="languages">Languages</DropDownItem>
        </div>
      </CSSTransition>

      <CSSTransition in={activeMenu === 'languages'} unmountOnExit timeout={500} classNames="menu-secondary">
        <div className="menu">
          <DropDownItem leftIcon={<TopCube/>} goToMenu="main">&#9756;</DropDownItem>
          <DropDownItem leftIcon={<Encrypt/>}>French</DropDownItem>
          <DropDownItem leftIcon={<Encrypt/>}>Spanish</DropDownItem>
          <DropDownItem leftIcon={<Encrypt/>}>Chinese</DropDownItem>
          <DropDownItem leftIcon={<Encrypt/>}>Chinese</DropDownItem>
          <DropDownItem leftIcon={<Encrypt/>}>Chinese</DropDownItem>
          <DropDownItem leftIcon={<Encrypt/>}>Chinese</DropDownItem>
          <DropDownItem leftIcon={<Encrypt/>}>Chinese</DropDownItem>
        </div>
      </CSSTransition>
    </div>
  );
}


export default App;
