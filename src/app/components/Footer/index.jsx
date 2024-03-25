import style from "./footer.module.css"
import { Logo } from '../Header/logo';
import twitter from "../../assets/icons/twitter.svg";
import facebook from "../../assets/icons/facebook.svg";
import instagram from "../../assets/icons/instagram.svg"

export const Footer=()=>{
    return(
        <section className={style.main}>
            <div className={style.body} >
            <div className={style.logo}>
                <Logo usewhite={true} />
                
            </div>
            <section className={style.title}>
                <div className={style.first}>
                    <li className={style.heading}></li>
                    <li>About</li>
                    <li>Jobs</li>
                    <li>For the Record</li>
                </div>
                <div className={style.second}>
                <li className={style.heading}>COMMUNITIES</li> 
                <li>For Artists</li>
                <li>Developers</li>
                <li>Advertising</li>
                <li>Investors</li>
                <li>Vendors</li> 
                </div>
                <div className={style.third}>
                    <li className={style.heading}>USEFUL LINK</li>
                    <li>Support</li>
                    <div>Web Player</div>
                    <li>Free Mobile App</li>
                </div>
                <div className={style.media}>
                 <li><img src={instagram} alt="instagram" /></li>
                 <li><img src={twitter} alt="Twitter" /></li>
                 <li><img src={facebook} alt="facebook" /></li>
                </div>
            </section>
            </div>
            <section className={style.end}>
                <div className={style.policy}>
                <li>Privacy Center</li>
                <li>Privacy Policy</li>
                <li>Cookies</li>
                <li>About Ads</li>
                
                </div>
                <div>© 2023 Spotify AB</div> 
            </section>
        </section>
    )
}