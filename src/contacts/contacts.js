import React, {useState} from 'react';
import s from './contacts.module.scss'
import Title from "../common/components/title/Title";
import Roll from 'react-reveal/Roll';
import ContactsData from "./ContactsData/ContactsData";

const Contacts = () => {

    const [email, setEmail] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')


    console.log(email)
    return (
        <div className={s.contactsBlock} id={'contacts'}>
            <div className={s.contactsContainer}>
                <Title text={'Contacts'}/>
                <div className={s.contactsData}>
                    <ContactsData/>
                    <Roll left>
                        <form className={s.form}
                              action="https://send.pageclip.co/aW7Z5eJ7fYjYIvvFlKDKpCWeShct1G4V/Form-Name" method="post">
                            <input className={s.input} placeholder={'Name'}
                                   value={name} onChange={e => setName(e.currentTarget.value)} name={'name'} />
                            <input className={s.input} placeholder={'E-mail'}
                                   value={email} onChange={e => setEmail(e.currentTarget.value)} name={'email'}/>
                            <textarea className={s.textarea} placeholder={'Your message'}
                                      value={message}  onChange={e => setMessage(e.currentTarget.value)} name={'description'}/>
                            <button type={'submit'} className={s.submitbtn}>Отправить</button>
                        </form>
                    </Roll>
                </div>

            </div>
        </div>
    );
};

export default Contacts;
