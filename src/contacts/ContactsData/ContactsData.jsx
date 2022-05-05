import React from 'react'
import s from './ContactsData.module.scss';
import {faTelegramPlane, faVk} from "@fortawesome/free-brands-svg-icons";
import {faEnvelope, faPhone} from "@fortawesome/free-solid-svg-icons";
import DataBlock from "./DataBlock/DataBlock";

function ContactsData() {
    return (
        <div className={s.data}>
            <DataBlock iconTitle={faPhone} contactTitle={'Phone'} data={'+7-931-409-06-18'}/>
            <DataBlock iconTitle={faEnvelope} contactTitle={'Email'} data={'ant.pavlov93@yandex.ru'}/>
            <DataBlock iconTitle={ faTelegramPlane} contactTitle={'Telegram'} data={'+7-931-409-06-18'}/>
            <DataBlock iconTitle={faVk} contactTitle={'VK'} data={'Anton Pavlov'} a={'https://vk.com/id16142570'}/>

        </div>
    );
}

export default ContactsData;