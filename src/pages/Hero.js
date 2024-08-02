import React from 'react'
import '../style/Hero.css'
import heroCover from '../assets/hero.webp'
import heroImg from '../assets/hero.png'

const Hero = () => {
    return (
        <section className='hero' id='home' style={{ backgroundImage: `url(${heroCover})`}}>
            <div className='hero_intro'>
                <h3>Knight of The Kingdom</h3>
                <p>Leia o primeiro capitulo agora!</p>
                <form method='POST' className='hero_email'>
                    <div className='hero_mailIcon'>
                        <i className="fa-solid fa-paper-plane"></i>
                        <input type='email' placeholder='Seu E-mail' required></input>
                    </div>

                    <button className='form_btn' type='submit'>Receber Capitulo</button>
                </form>
            </div>
            <img className='heroImg' src={heroImg} alt='book'></img>
        </section>
    )
}

export default Hero