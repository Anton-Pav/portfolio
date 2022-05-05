import React from "react";
import s from "./Projects.module.scss"
import Project from "./project/Project";
import Title from "../common/components/title/Title";
import todoImage from "../assets/image/todo-list.jpg"
import socialImage from "../assets/image/social-Network.jpg"
import Zoom from 'react-reveal/Zoom';


const Projects = () => {
    const socialNetwork = {
        color: 'blue',
        backgroundImage: `url(${socialImage})`,
    }
    const Todo = {
        color: 'blue',
        backgroundImage: `url(${todoImage})`
    }
    return (
        <div className={s.projectsBlock} id={'projects'}>
            <div className={s.projectsContainer}>
                <Title text={'Projects'}/>
                <Zoom>
                <div className={s.projects}>
                    <Project style={socialNetwork}
                             nameProject={'Social Network'}
                             descProject={'Lorem  nobis perferendis sed sequi unde? Animi beatae doloremque eos harum soluta?'}
                    />
                    <Project
                        style={Todo}
                        nameProject={'Todo'}
                        descProject={'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus distinctio laudantium quisquam quo tempora! Accusantium consectetur est fugit illo maxime nulla placeat recusandae rem ut! Aspernatur molestiae necessitatibus numquam officiis.'}
                    />
                </div>
                </Zoom>
            </div>
        </div>
    );
};

export default Projects;