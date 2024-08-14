import React, { useState } from 'react'
import '../style/Faq.css'
import Collapsible from 'react-collapsible'

const Faq = () => {
    const [count, setCount] = useState(0);


    return (
        <section className='faq' id='faq'>
            <h3 className='title'>&#x268A;&#x26AC; FAQ &#x26AC;&#x268A;</h3>
            <p className='description'>Canal de Dúvidas</p>
            <div className='faq_wrapper'>
                <div>
                    <form method='POST' className='form_container' required>
                        <h3>&#x268A; Dúvidas? Fale com A gente! &#x268A;</h3>
                        <input type='name' placeholder='Nome Completo*' required></input>
                        <input type='email' placeholder='E-mail* ' required></input>
                        <input type='number' placeholder='Telefone*' required></input>
                        <textarea rows={6} placeholder='Digite sua Dúvida*' name='message' required></textarea>
                        <button className='form_btn' type='submit'>Enviar Mensagem</button>
                    </form>
                </div>


                <div>
                <h3 className='colapseTitle'>&#x268A; Questões Frequentes &#x268A;</h3>
                    <Collapsible className='box_title' trigger="&#8681; Será que Esse Livro é Para mim?" open={count === 1} handleTriggerClick={() => setCount(1)}>
                        <div className='separator'></div>
                        <p className='box_description'>
                            Se voce gosta de historias mediavais como as obras de Tolkien, provalvemente voce irá gostar muito.
                            <br /> <br />
                            História é recheada de aventuras em vários cenários com uma ambientação rica em qualidade
                        </p>
                    </Collapsible>
                    <Collapsible className='box_title' trigger="&#8681; Existem Outros Livros do Autor?" open={count === 2} handleTriggerClick={() => setCount(2)}>
                    <div className='separator'></div>
                        <p className='box_description'>
                            
                            Sim, Marcus de Paula a escreveu diversos livros dentre eles:
                            <br /> <br />
                            &#8811;Fuga do Ladrão de Isran
                            <br />
                            &#8811;Principe Dourado
                            <br />
                            &#8811;O Nascimento de um Heroi

                        </p>
                    </Collapsible>

                    <Collapsible className='box_title' trigger="&#8681; Onde são Vendidos os Livros?" open={count === 3} handleTriggerClick={() => setCount(3)}>
                    <div className='separator'></div>
                        <p className='box_description'>
                            
                            Os Livros podem ser encontrados em 3 tipos de formatos diferentes:
                            <br />
                            &#8811;Físico,PDF e Áudio
                            <br />   <br />
                            As versão Física pode ser adquirida direto pela Amazon ou pelo contato direto Whatsapp
                            <br />
                            Versões de áudio e PDF podem ser adquiridas pela Amazon,Whatsapp e Googgle Livros.

                        </p>
                    </Collapsible>
                </div>
            </div>




        </section>
    )
}

export default Faq