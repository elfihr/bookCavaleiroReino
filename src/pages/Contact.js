import React from 'react'
import '../style/Contact.css'
import contact from '../assets/contact.jpg'
import { contacts } from '../helper/helper'

const Contact = () => {
  return (
    <section className='contact' id='contato' style={{backgroundImage: `url(${contact})`}}>
        <h3 className='title'>&#x268A;&#x26AC; Contato &#x26AC;&#x268A;</h3>
        <p className='description'>Entre em contato pelos canais abaixo</p>
        <div className='contact_wrapper'>
            {contacts.map((item,index) => {
                return(
                    <div key={index} className='contact_container'>
                        <i className={item.class}></i>
                        <h4>{item.label}</h4>
                        <div className='contact_info'>
                            <p>{item.info01}</p>
                            <p>{item.info02}</p>
                        </div>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Contact