import React from 'react';
import s from './Main.module.scss'
import avatar from '../assets/image/ava.jpg'
import Fade from 'react-reveal/Fade';
import ReactTypingEffect from 'react-typing-effect';
import Tilt from 'react-tilt'

const Main = () => {
    return (
        <div className={s.mainBlock} id={'main'}>
            <Fade left>
                <div className={s.container}>
                    <div className={s.text}>
                        <span>I am </span>
                        <h1 className={s.name}>Anton Pavlov</h1>
                        {/*<p className={s.speciality}>Frontend Developer</p>*/}
                        <ReactTypingEffect
                            text='Frontend Developer'
                            speed='400'
                            eraseSpeed='300'
                            eraseDelay='400'
                        />
                    </div>
                    <Fade top>
                        <Tilt className="Tilt" options={{max: 25}}>
                            <div className={s.photo}>
                                <img src={`${avatar}`} alt="avatar"/>
                            </div>
                        </Tilt>
                    </Fade>
                </div>
            </Fade>
        </div>
    );
};

export default Main;