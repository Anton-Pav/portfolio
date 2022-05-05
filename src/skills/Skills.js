import React from 'react';
import s from './Skills.module.scss'
import Skill from './skil/Skill';
import Title from '../common/components/title/Title';
import iconJS from '../assets/image/icons/js.svg';
import iconTS from '../assets/image/icons/ts.svg';
import iconReact from '../assets/image/icons/react.svg';
import iconRedux from '../assets/image/icons/redux.svg';
import iconHTML from '../assets/image/icons/html.svg';
import iconCSS from '../assets/image/icons/css.svg';
import Bounce from 'react-reveal/Bounce';

const Skills = () => {
    return (
        <div className={s.skillsBlock} id={'skills'}>
            <div className={s.skillsContainer}>
                <Title text={'Skills'}/>
                <div className={s.skills}>
                    <Bounce left>
                        <Skill title={'JS'} img={`${iconJS}`}/>
                    </Bounce>
                    <Bounce bottom>
                        <Skill title={'HTML'} img={`${iconHTML}`}/>
                    </Bounce>
                    <Bounce right>
                        <Skill title={'CSS'} img={`${iconCSS}`}/>
                    </Bounce>
                    <Bounce left>
                        <Skill title={'TS'} img={`${iconTS}`}/>
                    </Bounce>
                    <Bounce bottom>
                        <Skill title={'React'} img={`${iconReact}`}/>
                    </Bounce>
                    <Bounce right>
                        <Skill title={'Redux'} img={`${iconRedux}`}/>
                    </Bounce>

                </div>

            </div>
        </div>
    );
};

export default Skills;