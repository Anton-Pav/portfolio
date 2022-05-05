import React from 'react';
import s from './Skil.module.scss'


const Skill = (props) => {
    return (
        <div className={s.skill}>
            <div className={s.icon}>
            <img src={props.img} alt={'icon'}/>
            </div>
            <h3 className={s.title}>{props.title}</h3>
        </div>
    );
};

export default Skill;