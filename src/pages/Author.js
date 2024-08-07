import React from 'react'
import '../style/Author.css'
import author from '../assets/author.jpg'
import { bioAuthor } from '../helper/helper'

const Author = () => {
    return (
        <div className='author' id='autor'>
            <h3 className='title'>&#x268A;&#x26AC; Sobre o Autor &#x26AC;&#x268A;</h3>
            <p className='description'>Marcus de Paula</p>
            <div className='author_container'>
                <img src={author} alt='autor' />
                <div className='descriptionMini'>
                    <p>Marcus de Paula é um escritor renomado, apaixonado pela rica tapeçaria da história medieval. Com um talento inato para tecer fatos históricos com narrativas envolventes, ele transporta os leitores para épocas de cavaleiros corajosos, batalhas épicas e intrigas palacianas.
                        Nascido em Rio de Janeiro, desde cedo demonstrou interesse pelas histórias de cavalaria e pelas complexas dinâmicas das cortes medievais.
                        <br /><br />
                        Formado em História pela PUC, ele combinou seu conhecimento acadêmico com uma habilidade narrativa única, resultando em romances que são ao mesmo tempo educativos e emocionantes.
                        Seus livros são conhecidos por sua pesquisa meticulosa e detalhada, apresentando personagens complexos e cenários vividamente retratados.
                        <br /><br />

                        Ao longo de sua carreira, Marcus de Paula recebeu diversos prêmios literários e conquistou uma legião de fãs ao redor do mundo. Quando não está escrevendo, ele participa de palestras e conferências sobre história medieval, compartilhando seu conhecimento e paixão com outros entusiastas.</p>
                    <div className='bio_wrapper'>
                        {bioAuthor.map((bio, index) => {
                            return (
                                <div key={index} className='bio_container'>
                                    <h4>{bio.name}</h4>
                                    <p>{bio.description}</p>
                                </div>
                            )
                        })}
                    </div>
                    <div className='socialMedia'>
                        <i className="fa-brands fa-facebook-f"></i>
                        <i className="fa-brands fa-x-twitter"></i>
                        <i className="fa-brands fa-linkedin-in"></i>
                        <i className="fa-brands fa-instagram"></i>
                    </div>
                </div>


            </div>
        </div>
    )
}

export default Author