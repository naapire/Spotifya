import { features} from "./data"
import style from "./style.module.css"
import React from 'react'; // Import React

export const Features = () => {
    return (
        <section className={style.feature}>
            <h3 className={style.title}>The Power of premium</h3>
            <div className={style.list}>
                {features.map((feature, index) => (
                    <div className={style.item} key={index}>
                        <img src={feature.image} alt={feature.title} />
                        <h5 className={style.title}>{feature.title}</h5>
                        {/* Replace \n with <br> in description */}
                        <p className={style.description}>
                            {typeof feature.discription === "string" ? feature.discription.split('\n').map((line, index) => <React.Fragment key={index}>{line}<br/></React.Fragment>) : feature.discription}
                        </p>
                    </div>
                ))}
            </div>
        </section>
    );
}
