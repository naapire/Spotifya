import { CustomButton} from "../Button"
import style from "./Hero.module.css"
import { Counter } from "./counter"

export const Hero=()=>{
    return(<section className={style.hero}>
       <div className={style.title}>Get Premium free for 1 month</div>
       <div className={style.description}>Just ₹119/month after. Debit and credit cards accepted. Cancel anytime.</div>
       <div className={style.button}>
        <button className='btn'>GET STARTED</button>
        <button className='btn-outline'>SEE OTHER PLANS</button>
       </div>
       <div className={style.terms}>
        <a href="#">Terms and conditions apply.</a>1 month free not available for users who have already tried Premium.</div>
        {/* <Counter/> */}
    </section>)
}