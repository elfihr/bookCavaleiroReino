import React from 'react'
import '../style/About.css'
import about from '../assets/about.png'

const About = () => {
    return (
        <section className='about'>
            <h3>&#x268A;&#x26AC; Sobre o Livro &#x26AC;&#x268A;</h3>
            <p className='about_title'>Breve Introdução sobre o Livro</p>
            <div className='about_Container'>
                <img src={about} alt='livro aberto' />
                <div className='about_intro'>
                    <p className='description'>Em O Cavaleiro do Reino, Corgi D. Fihr nos leva a um mundo de Asltoria. Com uma narrativa envolvente e personagens cativantes, este livro promete capturar sua imaginação desde a primeira página.</p>
                    <h3 className='about_h3'>Historia Geral</h3>
                    <div className='about_check'>
                        <i class="fa-solid fa-check"></i>
                        <h4 className='check_title'>Narrativa Envolvente</h4>
                    </div>
                    <p className='description'> A escrita de Fihr transporta o leitor para um universo onde a realidade e a ficção se encontram de maneira mágica.</p>
                    <div className='about_check'>
                        <i class="fa-solid fa-check"></i>
                        <h4 className='check_title'>Personagens Cativantes</h4>
                    </div>
                    <p className='description'>
                    Cada personagem é construído com profundidade, trazendo à tona emoções e dilemas com os quais muitos podem se identificar.
                    </p>
                    <div className='about_check'>
                        <i class="fa-solid fa-check"></i>
                        <h4 className='check_title'>Reflexão e Entretenimento</h4>
                    </div>
                    <p className='description'>
                    Além de entreter, o livro convida à reflexão sobre uma aventura insperadora.
                    </p>
                    
                    <div className='about_border'></div>
                    <div className='about_book'>

                        
                        <div className='about_column'>
                            <h4>Data da Publicação</h4>
                            <p>23/12/2023</p>
                        </div>
                        <div className='about_column'>
                            <h4>Paginas</h4>
                            <p>398</p>
                        </div>
                        <div className='about_column'>
                            <h4>ISBN</h4>
                            <p>123456</p>
                        </div>

                    </div>
                    
                
                </div>
            </div>
        </section>
    )
}

export default About