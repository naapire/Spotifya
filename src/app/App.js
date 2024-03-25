// import logo from '../logo.svg';
import './App.css';
import { LandingPageHeader } from './components/Header/landingPageHeader';
import { Hero } from './components/Hero/index';
import { Features } from './components/Features/index';
import {Premium} from './components/main/index';
import {Footer} from './components/Footer/index';
import {Login}from'./components/loginPage/login';

export function App(){
  return(
    <div>
     <LandingPageHeader/>
     <Hero id="some-id" onclick={()=>{}} className="some class"/>
     <Features />
     <Premium/>
     <Footer/>
     <Login />
    </div>
  )
}
export default App;
