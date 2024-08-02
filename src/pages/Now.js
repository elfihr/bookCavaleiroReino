import React from 'react'
import '../style/Now.css'
import NowImg from '../assets/Now.jpg'

const Now = () => {
    return (
        <section className='now' style={{ backgroundImage: `url(${NowImg})` }}>
            <div className='now_container'>
                <p>
                    Entre em contato agora
                    <br />
                    E ganhe descontos Especiais!
                </p>
                <button>
                    <a href='https://wa.me/' className='nowBtn'>
                        <i className="fa-brands fa-whatsapp">&nbsp;Fale com a Gente</i>
                    </a>
                </button>
            </div>
        </section>
    )
}

export default Now