import React, {useState} from 'react';
import s from './Project.module.scss'

const Project = (props) => {

    const [visible, setVisible] = useState(false)

    return (
        <div className={s.projectContainer} >
            <div className={s.image} style={props.style}
                 onMouseEnter={()=> setVisible(true)} onMouseLeave={()=> setVisible(false)} >
                {visible && <a className={s.viewBtn} style={{color: 'white'}}>Смотреть</a>}
            </div>
            <div className={s.projectDescription}>
                <div className={s.projectName}>
                    <h3 className={s.projectTitle}>{props.nameProject}</h3>
                    <span className={s.description}>{props.descProject}</span>
                </div>

            </div>
        </div>


    );
};

export default Project;
