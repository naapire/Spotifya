import React from 'react';
import './landingPageHeader.css';
import { Logo } from './logo';
import { ReactComponent as MenuIcon } from "../../assets/icons/list.svg";

function useState(initialValue){
  let val=initialValue
  function change(newValue){
    val=newValue
  }
  return[val, change]
}
export const LandingPageHeader = () => {

   
  const [showMenu, setMenu] = React.useState(false);

  const toggleMenu = () => {
    setMenu(!showMenu);
  };
  
    return (
        <header className='header'>
            <div className='logo'>
                <Logo usewhite={true} />
                <MenuIcon fill='white' onclick={toggleMenu} />
            </div>
            <div className='menu'>
                <ul>
                    <li><a href="#/premium">Premium</a></li>
                    <li><a href="#/Support">Support</a></li>
                    <li><a href="#/Download">Download</a></li>
                    <li>|</li>
                    <li className='active'><a href="#/Sign up">Sign up</a></li>
                    <li className='active'><a href="#/Log in">Log in</a></li>
                </ul>
            </div>
        </header>
    );
};
