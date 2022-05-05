import React, {useState} from 'react';
import menuIcon from "../assets/image/icons/menu.svg";
import menuCloseIcon from "../assets/image/icons/close.svg";
import s from "./Menu.module.scss"
import { Link, animateScroll as scroll } from "react-scroll";

function Menu() {
    const [menu, setMenu] = useState(false)
    return (
        <>
            <div className={s.btn} onClick={() => {setMenu(!menu)}}>
                {!menu? <img src={`${menuIcon}`} alt="menu"/>:
                    <img src={`${menuCloseIcon}`} alt="menu"/>}
            </div>
            {menu && <div className={s.menu} onClick={() => setMenu(false)}>
                <div className={s.hamburgerMenu} >
                    {/*<a href={'#'}>Home</a>*/}
                    <Link
                        activeClass={s.active}
                        to="main"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Home</Link>
                    {/*<a href={'#skills'}>Skills</a>*/}
                    <Link
                        activeClass={s.active}
                        to="skills"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Skills</Link>
                    {/*<a href={'#projects'}>Projects</a>*/}
                    <Link
                        activeClass={s.active}
                        to="projects"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Projects</Link>
                    {/*<a href={'#contacts'}>Contacts</a>*/}
                    <Link
                        activeClass={s.active}
                        to="contacts"
                        spy={true}
                        smooth={true}
                        offset={0}
                        duration={500}
                    >Contacts</Link>
                </div>
            </div>}
        </>
    );
}

export default Menu;