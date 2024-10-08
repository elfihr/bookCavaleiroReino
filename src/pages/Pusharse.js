import React from 'react'
import '../style/Pusharse.css'
import buy from '../assets/pusharse.webp'

const Pusharse = () => {
    return (
        <section className='pusharse' style={{ backgroundImage: `url(${buy})` }}>
            <div className='pusharse_container'>
                <h3>&#x268A;&#x26AC; Aventura a sua Porta &#x26AC;&#x268A;</h3>
                <p>Acompanhe agora Sir Eliote pelo continente Alfar atraves de pantanos, florestas, desertos e mais!</p>
                <p>Compre agora nas lojas oficiais ou whatsapp</p>
                <div className='pusharsesBtn_Container'>
                    <a href='https://wa.me/' className='redBtn'>
                        <i className="fa-brands fa-whatsapp"></i>Whatsapp
                    </a>
                    <a href='https://www.amazon.com.b' className='whiteBtn'>
                        <i className="fa-brands fa-amazon"></i>Amazon
                    </a>
                    <a href='https://play.google.com/store/books'  className='redBtn'>
                        <i className="fa-brands fa-google-play"></i>GooglePlay
                    </a>
                </div>
            </div>

        </section>

    )
}

export default Pusharse