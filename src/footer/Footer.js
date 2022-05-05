import React from 'react';
import s from './Footer.module.scss'

const Footer = () => {
    return (
        <div className={s.footerBlock}>
            <div className={s.footerContainer}>
                <div className={s.name}>
                    <h3>Anton Pavlov</h3>

                </div>
                <div className={s.textFooter}>
                    <span>© 2022, All Rights Reserved.</span>
                </div>
            </div>


        </div>
    );
};

export default Footer;