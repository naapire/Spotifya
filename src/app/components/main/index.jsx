import React from 'react';
import FirstImage from "../../assets/images/one.svg";
import SecondImage from "../../assets/images/two.svg";
import ThirdImage from "../../assets/images/three.svg";
import ForthImage from "../../assets/images/four.svg";
import FifthImage from "../../assets/images/five.svg";
import viewplan from "../../assets/images/viewplan.svg";
import style from "./style.module.css"

export const Premium = () => {
    return (
        <section className={style.titles}>
            <h2 className={style.h2}>Pick your Premium</h2>
            <h5 className={style.h5}>Listen without limits on your phone, speaker, and other devices.</h5>
            <div className={style.images}>
                <ul className={style.images}> {/* Corrected to <ul> instead of <div> */}
                    <li><img src={FirstImage} alt="First" /></li> {/* Added img tag to render the image */}
                    <li><img src={SecondImage} alt="Second" /></li> {/* Added img tag to render the image */}
                    <li><img src={ThirdImage} alt="Third" /></li> {/* Added img tag to render the image */}
                    <li><img src={ForthImage} alt="Fourth" /></li> {/* Corrected to ForthImage */}
                    <li><img src={FifthImage} alt="Fifth" /></li> {/* Corrected to FifthImage */}
                </ul>
            </div>
            <div><img src={viewplan} alt="viewPlain" /></div>
            <div className={style.more}>
              <p className={style.discount}>Special discount for eligible students in university</p>
              <p><button className={style.butt}>LEARN MORE</button></p>
            </div>
        </section>
    );
};
