import style from'./login.module.css';
import Facebook from '../../assets/icons/faceboo.svg';
import Apple from '../../assets/icons/Apple.svg';
import Google from '../../assets/icons/googlee.svg';
import line from '../../assets/icons/line.svg';
import eye from '../../assets/icons/Eye.svg'; 
import { Logo } from '../Header/logo';


export const Login=()=>{
  return (
    <section className={style.main}>
        <div className={style.logo}> <Logo usewhite={false} /></div>
        <div className={style.line}></div>
      <div>
        <p className={style.button}><button className={style.facebook}><img src={Facebook} alt="First" />CONTINUE WITH FACEBOOK</button></p>
        <p className={style.button}><button className={style.apple}><img src={Apple} alt="First" />CONTINUE WITH APPLE</button></p>
        <p className={style.button}><button className={style.google}><img src={Google} alt="First" />CONTINUE WITH GOOGLE</button></p>


        <div className={style.lineOr}><img src={line} alt="First" /></div>

        <p className={style.emailText}>Email address or username</p>
        <input className={style.email} type="email" placeholder='Email address or username'/>
        <p className={style.passwordText}>Password</p>
        <input className={style.password} type="password" placeholder='Password'  />
        <p className={style.forgetpassword}>Forgot your password?</p>
        <div className={style.checkbox}>
        <input type="checkbox" property='payme'/>
        <p className={style.remember}>Remember me</p>
        <button className={style.login}>Log in</button>
        </div>
        <div className={style.line}></div>
        <p className={style.noAccount}>Don't have an account?</p>
        <p className={style.button}><button className={style.signUP}>SIGN UP FOR SPOTIFY</button></p>
        
        
        
      </div>
    </section>
   ) 
}